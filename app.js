const showProductData = require("./utils/dataGood");

process.stdin.setEncoding('utf8');
console.log("Set your URL: ");

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`URL: ${chunk}`);
    showProductData(chunk);
  }
});