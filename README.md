Video-rental 
============

web(backbone) and backend npm + MongoDB application
---------------------------------------------------

to install
----------
- git clone git@github.com:psrebrny/video-rental.git
- npm install
- bower install

To open server.js
-----------------
- node server.js or nodemon server.js

If you want change something in .sccs files
-----------------------------------------
- sass --watch sass/main.scss:css/style.css -- style expanded

To open mongo Db server
-----------------------
- mongod

To use mongo db
---------------
- I using names for my configuration if you want use another you must change it in server.js file
- json to import are in json catalog
- 'mongo' to open connections
- 'use VideoRental'
- 'db.createCollection("movies")'
- 'db.createCollection("actors")'
- 'db.createCollection("categories")'
- 'db.createCollection("clients")'
- from json catalog 'mongoimport --db VideoRental --collection movies --file movies.json --jsonArray'
- from json catalog 'mongoimport --db VideoRental --collection actors --file actors.json --jsonArray'
- from json catalog 'mongoimport --db VideoRental --collection categories --file categories.json --jsonArray'
- from json catalog 'mongoimport --db VideoRental --collection clients --file clients.json --jsonArray'

To open application in broswer
------------------------------
- in browser localhost:8000
