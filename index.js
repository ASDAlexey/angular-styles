const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const app = express();

app.use("/", expressStaticGzip(__dirname + '/dist/angular-styles', {
  enableBrotli: true,
  customCompressions: [{
    encodingName: "deflate",
    fileExtension: "zz"
  }]
}));

// app.use("/", express.static(__dirname + '/dist/angular-styles'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
