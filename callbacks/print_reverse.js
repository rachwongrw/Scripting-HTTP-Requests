var getHTML = require('../Step5-http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse(html) {
  var arrHTML = html.split("").reverse().join("");
  console.log(arrHTML);
}

getHTML(requestOptions, printReverse);