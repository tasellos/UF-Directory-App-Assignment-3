/* Fill out these functions using Mongoose queries*/
var listings = require("./ListingSchema.js"),
    config = require('./config.js'),
    mongoose = require('mongoose');
mongoose.connect('mongodb://tasellos:8uhb*UHBb@ds129024.mlab.com:29024/cen3031assignment3');

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
    listings.find({ 'name': 'Library West' }, function (err, listing) {
        if (err)
            throw err;
        console.log(listing);
    });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

    listings.remove({ 'code': 'CABL' }, function (err, listing) {
        if (err)
            throw err;
        retrieveAllListings();
    });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
    listings.findOneAndUpdate({ 'name': 'Phelps Laboratory' }, function (err, listing) {
        if (err)
            throw err;
        console.log('here');
        console.log(listing);
    });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */

    listings.find({}, function (err, listing) {
        if (err)
            throw err;
        console.log(listing);
    });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
