/*const Pornsearch = require('pornsearch');
//const Searcher = new Pornsearch(query, driver = 'pornhub');
Pornsearch.search('bigass')
  .gifs()
  .then(gifs => console.log(gifs));
*/

const request = require('request');
request('https://api.redtube.com/?data=redtube.Videos.searchVideos&output=Sexy', function (error, response, body) {
  var categories = JSON.parse(body).videos
  console.log(categories[1])
});