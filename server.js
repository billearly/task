require('dotenv').config();

const port = parseInt(process.env.PORT, 10);
const dev = process.env.NODE_ENV !== 'production';

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();

// Express
const express = require('express');
const session = require('express-session');
const sess = {
    secret: process.env.EXPRESS_SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: false
}

// Passport
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const strategy = new Auth0Strategy({
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL
}, function (accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
});

passport.use(strategy);

passport.serializeUser(function (user, done) {
    done(null, user);
});
  
passport.deserializeUser(function (user, done) {
    done(null, user);
});

// Server
app.prepare().then(() => {
    const server = express();

    if (server.get('env') === 'production') {
        sess.cookie.secure = true;
    }

    server.use(session(sess));
    server.use(passport.initialize());
    server.use(passport.session());

    server.use(function (req, res, next) {
        res.locals.user = req.user;
        next();
    });

    server.get('/login', passport.authenticate('auth0', {
        scope: 'openid email profile'
    }), function (req, res) {
        res.redirect('/');
    });

    server.get('/callback', function (req, res, next) {
        passport.authenticate('auth0', function (err, user, info) {
            if (err) { 
                return next(err);
            }

            if (!user) {
                return res.redirect('/login');
            }

            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }

                const returnTo = req.session.returnTo;
                delete req.session.returnTo;
                res.redirect(returnTo || '/');
            });
        })(req, res, next);
    });

    server.get('/user', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ displayName: req.user.displayName }));
    });

    server.get('/logout', (req, res) => {
        const returnToUrl = encodeURIComponent(process.env.AUTH0_LOGOUT_RETURN_URL);

        req.logout();
        res.redirect(`${process.env.AUTH0_LOGOUT_URL}?returnTo=${returnToUrl}&client_id=${process.env.AUTH0_CLIENT_ID}`);
    });

    server.get('*', (req, res) => {
        const parsedUrl = parse(req.url, true);
        return handle(req, res);
    });
  
    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
