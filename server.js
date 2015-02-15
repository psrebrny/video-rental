/**
 * Created by Paweł on 2015-02-12.
 */
var express = require("express"),
    mongo = require("mongodb"),
    MongoClient = mongo.MongoClient,
    app = express(),
    dburl = "mongodb://localhost:27017/bazaDanych";

app.use(express.static(__dirname + "/"));
//app.use(express.static(__dirname + "/bower_components"));

app.get("/", function(req,res){
   res.sendfile("index.html");
});

app.listen("8000", function(){
    console.log("Server Aktywny");
});