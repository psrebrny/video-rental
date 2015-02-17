/**
 * Created by Paweł on 2015-02-12.
 */
var express = require("express"),
    mongo = require("mongodb"),
    MongoClient = mongo.MongoClient,
    app = express(),
    dburl = "mongodb://localhost:27017/VideoRental";

app.use(express.static(__dirname + "/"));
//app.use(express.static(__dirname + "/bower_components"));

app.get("/", function(req,res){
   res.sendfile("index.html");
});

app.get("/movies", function(req,res){
    MongoClient.connect(dburl, function(err, db){
        if(err){
            res.status(500);
            res.send({error:true});
            return;
        }

        db.collection("movies").find({}).toArray(function(err, docs) {
            if (err) {
                res.status(500);
                res.send({error: true});
                return;
            }
            res.json(docs)
        });
    })
});

app.listen("8000", function(){
    console.log("Server Aktywny");
});