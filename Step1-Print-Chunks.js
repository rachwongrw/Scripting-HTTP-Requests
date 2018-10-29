var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

https.get(requestOptions, function (response) {
  response.setEncoding('utf8');

  response.on('data', function(data) {
    console.log('Chunk Received. Length: ' + data);
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});


function getAndPrintHTMLChunks () {


// Add code here


}


/* Steps
1. use https lib to GET a given url
2. function should console.log each chunk of data

*/