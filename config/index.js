require('dotenv').config()

const targetServer = process.env.APP_TARGET_HOST;
const targetPort = process.env.APP_TARGET_PORT;

const config = {
    appPort: process.env.APP_PORT,
    appname: process.env.APP_NAME,
    targetUrl: `http://${targetServer}:${targetPort}/`
};
console.log(config.targetUrl);
module.exports = config;
