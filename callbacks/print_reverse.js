var getHTML = require('../Step5-http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  var reversed = html.reverse();
  console.log(reversed);
}

getHTML(requestOptions, printReverse);