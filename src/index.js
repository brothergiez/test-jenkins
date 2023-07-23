const express = require('express');
const axios = require('axios');
const cors = require('cors')

const { appPort, appname, targetUrl } = require('../config');

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.get('/test', async (req, res) => {
    const hitApi = await axios.get(targetUrl);
    res.send({
        name: appname,
        success: true,
        targetUrl,
        targetResult: hitApi.data
    })
})

app.get('/', async (req, res) => {
    res.send({
        name: appname,
        success: true
    })
})

app.listen(appPort, () => console.log(`app running on port ${appPort}`));
