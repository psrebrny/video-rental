Video-rental 
============

web(backbone) and backend npm + MongoDB application
---------------------------------------------------

to install
----------
- git clone git@github.com:silver029/video-rental.git
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
- from json catalog 'mongoimport --db VideoRental --collection movies --file movies.json --jsonArray'

To open application in broswer
------------------------------
- in browser localhost:8000
