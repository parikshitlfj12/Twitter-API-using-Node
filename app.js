var Twit = require("twit");
var config = require('./config');
var express = require("express");
var app = express();
var fs = require('fs');

var T = new Twit(config);

var b64content = fs.readFileSync('./photo.jpeg', { encoding: 'base64' })
 
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreters
  var mediaIdStr = data.media_id_string
  var altText = "Small flowers in a planter on a sunny balcony, blossoming."
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
 
  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet)
      var params = { status: 'loving life #nofilter', media_ids: [mediaIdStr] }
 
      T.post('statuses/update', params, function (err, data, response) {
        console.log(data)
      })
    }
  })
})

// FOR POSTING SOME TEXT BASED TWEETS
// var tweet = {
//     status: 'Node Test Tweet'
// }

// T.post('statuses/update', tweet, tweeted)

// function tweeted(err, data, response) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data)
//     }
// }

// FOR SEARCHING SOME TWEETS ON MY WALL
// var params =  { 
//     count: 1
// }

// T.get('search/tweets',params,gotData)

// function gotData(err,data,response) {
//     console.log(err);
// }

// app.listen(8080);