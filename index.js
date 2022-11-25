const express = require('express');

const api = express();

// use my website (link to the index.html)
api.use(express.static(__dirname));


api.use(express.json({limit: '1mb' }));


api.get('/as', (reqq, ress) =>{
    console.log("Get has called")
})

api.post('/post_server', (req, res) => {
    console.log("I got a request")
    const NameOfClient = Object.values(req.body)
    const sendd = "Hi " + NameOfClient 
    console.log("Hi " + NameOfClient)
    res.json({
        sendout: sendd
    });
});


api.listen(4000,() => {
    console.log("API is up and runing");
});