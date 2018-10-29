var https = require('https');

function getAndPrintHTML (options) {
  https.get(options, function (response) {
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);