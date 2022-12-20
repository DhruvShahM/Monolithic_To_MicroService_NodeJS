const dotEnv = require("dotenv");


if (process.env.NODE_ENV && process.env.NODE_ENV !== 'prod') {
    const configFile = `./.env.${process.env.NODE_ENV}`;
    dotEnv.config({ path: configFile });
} else {
    const result = dotEnv.config({ path: __dirname + '/../.env' });
    if (result.error) {
        throw result.error
    }
    console.log(result.parsed)
}

module.exports = {
    PORT: process.env.PORT,
    DB_URL: process.env.MONGODB_URI,
    APP_SECRET: process.env.APP_SECRET
}
