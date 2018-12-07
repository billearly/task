import fetch from 'isomorphic-unfetch';

// Gets user data on both server and client
export const getUserData = async (req) => {
    let displayName;

    if (req) {
        if (req.user) {
            const { _raw, _json, ...profile } = req.user;
            displayName = profile.displayName;
        }
    } else {
        var profile = await fetch('/user')
            .then(res => res.json())
            .catch(err => console.log(err));

        displayName = profile.displayName;
    }

    return { displayName };
}
