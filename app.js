var Twit = require("twit");
var config = require('./config');
var express = require("express");
var app = express();

var T = new Twit(config);

var tweet = {
    status: '#codingrrainbow from node.js'
}

T.post('statuses/update', tweet, tweeted)

function tweeted(err, data, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(data)
    }
}


// var params =  { 
//     count: 1
// }

// T.get('search/tweets',params,gotData)

// function gotData(err,data,response) {
//     console.log(err);
// }

// app.listen(8080);