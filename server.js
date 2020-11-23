const express = require('express');
const cors = require('cors');
const Datastore = require('nedb');

const app = express();
app.use(cors());                             //Solves Allow-origin problem
app.use(express.json({limit: '1mb'}));
app.use(express.static('Public'));          //point to my root folder to host web pages

const database = new Datastore('messageData.db');
database.loadDatabase();

const port = process.env.PORT || 1000;
app.listen(port, ()=>{
    console.log(`Started at port: ${port}`);
})

app.get('/dev', (request, response)=>{
    database.find({}, (err, data)=>{
        if(err) {
            response.end();
            return;
        }
        response.json(data);
    });
});

app.post('/dev', (request, response)=>{
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);

    response.json({
        status: 'success'
    });
});



