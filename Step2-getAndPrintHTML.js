
var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};


function getAndPrintHTML () {
  https.get(requestOptions, function (response) {
  response.setEncoding('utf8');

  var body = [];

  response.on('data', function(chunk) {
    body.push(chunk);
    console.log('Chunk Received.' + chunk);
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

}

getAndPrintHTML();