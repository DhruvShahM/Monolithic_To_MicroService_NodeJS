const dotEnv  = require("dotenv");

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'prod') {
    const configFile =  `./.env.${process.env.NODE_ENV}`;
    dotEnv.config({ path:  configFile });
} else {
    dotEnv.config();
}

module.exports = {
    PORT: 8000,
    DB_URL: 'mongodb://localhost:27017/amazon_demo',
    APP_SECRET: 'jg_youtube_tutorial'
}
 