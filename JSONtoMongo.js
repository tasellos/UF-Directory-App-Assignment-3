'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.connect('mongodb://tasellos:8uhb*UHBb@ds129024.mlab.com:29024/cen3031assignment3');
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
fs.readFile('listings.json', '', function (err, data) {
    if (err) {
        throw err,
    }
    var ufListing = mongoose.model('Listing', Listing.listingSchema);
    JSON.parse(data).entries.forEach(function (listing) {
        var listing = new ufListing({
            code: listing.code,
            name: listing.name,
            latitude: listing.latitude,
            longitude: listing.longitude,
            address: listing.address,
        });
        listing.save(function (err) {
            if (err)
                throw err;
        });
    });
});


/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */