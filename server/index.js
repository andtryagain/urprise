const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

const port = 3001;

app.use(cors());

const getBase64FromUrl = async (url) => {
    const data = await fetch(url)
        .then((response) => response.buffer())
        .then((buffer) => {
            const b64 = buffer.toString('base64');
            return b64;
        })

    return await data;
};

app.get('*', (req, res) => {
    const url = req.originalUrl.slice(1);
    // !!! url-parser needed
    getBase64FromUrl(url).
        then((data) => 
            {   
                res.send({base64: data});
            }
        )
});

app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
});
