const express = require('express');
const showProductData = require("./utils/dataGood");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post("/foxtrot/", async (req, res) => {
  const {url} = req.body;
  const products = await showProductData(url);
  res.json(products)
});

app.listen(4004, () => {
  console.log("SERVER IS STARTED!");
})