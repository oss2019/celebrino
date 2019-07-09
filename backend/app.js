const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const Club = require('./models/club');

const app = express();

mongoose.connect('mongodb+srv://mandeep:Tr6wYmhrRGlvxfKw@cluster0-3oshg.mongodb.net/events?retryWrites=true')
.then(()=>{
    console.log('Connected to Database');
    })
    .catch(()=>{
        console.log('Connection Failed!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.post('/api/clubs',(req,res,next)=>{
    const club = new Club({
        name: req.body.name,
        secretary: req.body.secretary,
        content: req.body.content
    });
    club.save().then((response) => {
        res.status(201).json({
            message: "Club added successfully",
            id: response._id
        });
    });
    res.status(201).json({
        message: "Club added successfully"
    });
});

app.get('/api/clubs',(req,res,next)=>{
    Club.find()
    .then((documents)=>{
        res.send({
            message:"send successfully",
            clubs: documents
        });
    });
    
});

app.delete('/api/clubs/:id',(req,res,next) => {
    Club.deleteOne({_id:req.params.id}).then((response) => {
        console.log(response);
    });
    res.status(200).json({message: "Club Deleted"});
})


module.exports = app;