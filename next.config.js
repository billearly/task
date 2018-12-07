const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
    publicRuntimeConfig: {
        TASK_FEED_CONNECTION_STRING: process.env.TASK_FEED_CONNECTION_STRING
    }
});
