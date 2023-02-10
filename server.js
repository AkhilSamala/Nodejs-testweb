//jshint esversion:6

const express = require("express");

const app = express();

const port = 80;

app.get("/", function(request, response){
    response.send("Hello World!")
});

app.listen(port, function(){
    console.log("server has started on port 80");
});

