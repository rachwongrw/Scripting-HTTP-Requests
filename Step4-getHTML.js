var https = require('https');

function getHTML(options, callback) {
  https.get(options, function (response) {
  response.setEncoding('utf8');

  var body = [];

  response.on('data', function(chunk) {
    body.push(chunk);
    callback(chunk);
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);