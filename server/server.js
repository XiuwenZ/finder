const express = require('express');
const app = express();
const http = require('http');
const port = 4000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.use((req, res, next)=>{
    res.on("finish",()=>{
        console.log(`${req.method} ${req.originalUrl} ${req.statusCode} `);
    });
    next();
});