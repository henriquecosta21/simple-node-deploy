const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.json({
        name: "Henrique",
        age: 30
    });
});

app.get('/info', (req, res) => {
    res.send('Some informations about me')
});

app.listen(port, () => {
    console.log(`Example app listenning on port ${port}`);
});

