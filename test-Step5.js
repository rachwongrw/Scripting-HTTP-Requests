var getHTML = require('./Step5-http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML(html) {
  console.log(html);
}

getHTML(requestOptions, printHTML); //this calls the function and the callback is printHTML.