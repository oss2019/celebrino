const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const Club = require('./models/club');

const app = express();

mongoose.connect("mongodb://localhost:27017/events")
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
    }).catch(err => {
        if(err) {
            res.status(404).json({
                message: "Problem in adding club",
            }); 
        }
    })
});

app.get('/api/clubs',(req,res,next)=>{
    Club.find()
    .then((documents)=>{
        res.send({
            message:"send successfully",
            clubs: documents
        });
    }).catch(err => {
        res.status(404).json({
            message: "Error in finding clubs"
        })
    })
});

app.delete('/api/clubs/:id',(req,res,next) => {
    Club.deleteOne({_id:req.params.id}).then((response) => {
        console.log(response);
        res.status(200).json({message: "Club Deleted"});
    }).catch(err => {
        res.status(200).json({message: "Club Deleted"});
    });
})


module.exports = app;