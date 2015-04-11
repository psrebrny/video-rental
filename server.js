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
            res.json({error:true});
            return;
        }

        db.collection("movies").find({},{limit: limit}).toArray(function(err, docs) {
            if (err) {
                res.status(500);
                res.json({error: true});
                return;
            }
            res.json(docs)
            db.close();
        });
    })
});

app.get("/actors", function(req,res){

    var limit = req.query.limit;

    MongoClient.connect(dburl, function(err, db){
        if(err){
            res.status(500);
            res.json({error:true});
            return;
        }

        db.collection("actors").find({},{limit: limit}).toArray(function(err, docs) {
            if (err) {
                res.status(500);
                res.json({error: true});
                return;
            }
            res.json(docs)
            db.close();
        });
    })
});

app.get("/categories", function(req,res){

    var limit = req.query.limit;

    MongoClient.connect(dburl, function(err, db){
        if(err){
            res.status(500);
            res.json({error:true});
            return;
        }

        db.collection("categories").find({},{limit: limit}).toArray(function(err, docs) {
            if (err) {
                res.status(500);
                res.json({error: true});
                return;
            }
            res.json(docs)
            db.close();
        });
    })
});

app.get("/clients", function(req,res){

    var limit = req.query.limit;

    MongoClient.connect(dburl, function(err, db){
        if(err){
            res.status(500);
            res.json({error:true});
            return;
        }

        db.collection("clients").find({},{limit: limit}).toArray(function(err, docs) {
            if (err) {
                res.status(500);
                res.json({error: true});
                return;
            }
            res.json(docs)
            db.close();
        });
    })
});

app.get("/movie/:id", function(req, res){

    var id = req.params.id,
        isValid = mongo.BSONPure.ObjectID.isValid(id);

    if(!isValid){
        res.status(500);
        res.json({error:true});
        return;
    }

    MongoClient.connect(dburl, function(err, db){

        if(err){
            res.status(500);
            res.json({error:true});
            return;
        }

        db.collection("movies").find({_id: new mongo.ObjectID(id)}).toArray(function(err, docs){
            if (err) {
                res.status(500);
                res.json({error: true});
                return;
            }
            res.json(docs[0]);
            db.close();
        })

    })


});

app.listen("8000", function(){
    console.log("Server Aktywny");
});