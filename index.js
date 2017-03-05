"use strict";

var path = require('path');
var express = require('express')
var app = express()

const views = path.join(__dirname + '/views/')

app.set('title','SamsungRemote')
// app.set('views', __dirname + './views');
app.use(express.static('static'))
app.use(function(req,res,next){
    console.log(req.url);
    next();
})



app.get('/',function(req,res){

    res.sendFile(views + 'master.html')
})

// app.get('/:command',function(req,res){
//     let command = req.params.command;
    

// })




app.listen(3000,function(){console.log('Listening on port 3000')})


console.log('it worked')
