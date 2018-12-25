const {JSDOM} = require("jsdom");

module.exports = async function showProductData(url) {
  const productCount = [];
  const foxtrotReg = /(foxtrot\.com\.ua)/gi;
  if (!foxtrotReg.test(url)) {
    console.log("Error url. Enter please right url");
    return;
  }

  const dom = await JSDOM.fromURL(url);
  const document = dom.window.document;
  const allGoods = document.querySelectorAll('.product-item .listing-item__info');

  allGoods.forEach((param) => {
    let nameHTML = param.children[1].lastElementChild,
        priceHTML = param.children[2].lastElementChild.firstElementChild;

    if (nameHTML == "" || priceHTML == "") {
      console.log("Error. Does not exist name goods or price.");
    } else {
      productCount.push({
        name: nameHTML.innerHTML,
        prise: priceHTML.innerHTML
      });
    }
  })
  console.log(productCount);  

  return productCount;
}