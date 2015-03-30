/**
 * Created by Paweł on 2015-02-12.
 */
var express = require("express"),
    mongo = require("mongodb"),
    MongoClient = mongo.MongoClient,
    app = express(),
    dburl = "mongodb://localhost:27017/VideoRental";

app.use(express.static(__dirname + "/"));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req,res){
   res.sendfile("public/index.html");
});

app.get("/movies", function(req,res){

    var limit = req.query.limit;

    MongoClient.connect(dburl, function(err, db){
        if(err){
            res.status(500);
            res.send({error:true});
            return;
        }

        db.collection("movies").find({},{limit: limit}).toArray(function(err, docs) {
            if (err) {
                res.status(500);
                res.send({error: true});
                return;
            }
            res.json(docs)
        });
    })
});

app.get("/actors", function(req,res){

    var limit = req.query.limit;

    MongoClient.connect(dburl, function(err, db){
        if(err){
            res.status(500);
            res.send({error:true});
            return;
        }

        db.collection("actors").find({},{limit: limit}).toArray(function(err, docs) {
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