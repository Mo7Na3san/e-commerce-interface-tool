let backBtn = document.getElementById("backBtn");
let itemBox = document.getElementById("itemBox");
let clearAll = document.getElementById("clearAll");
let cartBtn = document.getElementById("cartBtn");
let outputItem = document.getElementById("outputItem");
clearAll.addEventListener("click", function () {
  localStorage.clear();
});
// Item Image
let inpItemImg = document.getElementById("inpItemImg");
let itemImg = document.getElementById("itemImg");
let itemImageStorage = window.localStorage.getItem("itemPhoto");
if (itemImageStorage) {
  addItemImage(itemImageStorage);
}
function addItemImage(choosePhoto) {
  itemImg.src = choosePhoto;
}
inpItemImg.addEventListener("change", function () {
  let reader = new FileReader();
  let newItemImg = inpItemImg.files[0];
  reader.onload = function (e) {
    localStorage.setItem("itemPhoto", e.target.result);
    addItemImage(e.target.result);
  };
  reader.readAsDataURL(newItemImg);
});

// item name  :

let inpItemName = document.getElementById("inpItemName");
let itemTitle = document.getElementById("itemTitle");
let itemTitleStorage = window.localStorage.getItem("newValue");
if (itemTitleStorage) {
  inpItemName.value = itemTitleStorage;
  addItemName(itemTitleStorage);
}
function addItemName(Name) {
  itemTitle.textContent = `${Name}`;
}
inpItemName.addEventListener("input", function () {
  let newName = inpItemName.value;
  addItemName(newName);
  localStorage.setItem("newValue", newName);
});
// Item Name Color
let inpItemNameColor = document.getElementById("inpItemNameColor");
let itemTitleColorStorage = window.localStorage.getItem("TitleFontColor");
if (itemTitleColorStorage) {
  inpItemNameColor.value = itemTitleColorStorage;
  addItemNameColor(itemTitleColorStorage);
}
function addItemNameColor(titleColor) {
  itemTitle.style.color = `${titleColor}`;
}
inpItemNameColor.addEventListener("input", function () {
  let newItemNameColor = inpItemNameColor.value;
  addItemNameColor(newItemNameColor);
  localStorage.setItem("TitleFontColor", newItemNameColor);
});
// Item Name Size
let inpItemNameSize = document.getElementById("inpItemNameSize");
let itemTitleSizeStorage = window.localStorage.getItem("itemTitleSizeStorage");
if (itemTitleSizeStorage) {
  inpItemNameSize.value = itemTitleSizeStorage;
  addItemNameSize(itemTitleSizeStorage);
}
function addItemNameSize(addSize) {
  itemTitle.style.fontSize = `${addSize}px`;
}
inpItemNameSize.addEventListener("input", function () {
  let newItemNameSize = inpItemNameSize.value;
  addItemNameSize(newItemNameSize);
  localStorage.setItem("itemTitleSizeStorage", newItemNameSize);
});

// Item Description
let inpItemDes = document.getElementById("inpItemDes");
let itemDescription = document.getElementById("itemDescription");
let itemDesStorage = window.localStorage.getItem("DesStorage");
if (itemDesStorage) {
  inpItemDes.value = itemDesStorage;
  addDescription(itemDesStorage);
}
function addDescription(description) {
  itemDescription.textContent = `${description}`;
}
inpItemDes.addEventListener("input", function () {
  let newDes = inpItemDes.value;
  addDescription(newDes);
  localStorage.setItem("DesStorage", newDes);
});

// Item Description Color
let inpItemDesColor = document.getElementById("inpItemDesColor");
let DesStorage = window.localStorage.getItem("itemDesColor");
if (DesStorage) {
  inpItemDesColor.value = DesStorage;
  addDesColor(DesStorage);
}
function addDesColor(DescriptionColor) {
  itemDescription.style.color = `${DescriptionColor}`;
}
inpItemDesColor.addEventListener("input", function () {
  let newDesColor = inpItemDesColor.value;
  addDesColor(newDesColor);
  localStorage.setItem("itemDesColor", newDesColor);
});

// Item Description Size
let inpItemDesSize = document.getElementById("inpItemDesSize");
let DesSizeStorage = window.localStorage.getItem("itemDesSizeStorage");
let itemPrice = document.getElementById("itemPrice");
if (DesSizeStorage) {
  inpItemDesSize.value = DesSizeStorage;
  addDesSize(DesSizeStorage);
}
function addDesSize(DesSize) {
  itemDescription.style.fontSize = `${DesSize}px`;
}
inpItemDesSize.addEventListener("input", function () {
  let DesFontSize = inpItemDesSize.value;
  addDesSize(DesFontSize);
  localStorage.setItem("itemDesSizeStorage", DesFontSize);
});

// Item Price
let showPrice = document.getElementById("showPrice");
let inpItemPrice = document.getElementById("inpItemPrice");
let itemPriceStorage = window.localStorage.getItem("ItemPriceStorage");
if (itemPriceStorage) {
  inpItemPrice.value = itemPriceStorage;
  addItemPrice(itemPriceStorage);
}
function addItemPrice(addPrice) {
  showPrice.textContent = `${addPrice}`;
}
inpItemPrice.addEventListener("input", function () {
  let newPrice = inpItemPrice.value;
  addItemPrice(newPrice);
  localStorage.setItem("ItemPriceStorage", newPrice);
});

// Item Price Color
let inpItemPriceColor = document.getElementById("inpItemPriceColor");
let priceClrStorage = window.localStorage.getItem("itemPriceColorStrg");
if (priceClrStorage) {
  inpItemDesColor.value = priceClrStorage;
  addPriceColor(priceClrStorage);
}
function addPriceColor(priceColor) {
  showPrice.style.color = `${priceColor}`;
}
inpItemPriceColor.addEventListener("input", function () {
  let newPriceColor = inpItemPriceColor.value;
  addPriceColor(newPriceColor);
  localStorage.setItem("itemPriceColorStrg", newPriceColor);
});

// Item Price Size
let inpItemPriceSize = document.getElementById("inpItemPriceSize");
let PriceSizeStorage = window.localStorage.getItem("itemPriceSizeStorage");
let currencyType = document.getElementById("currencyType");

if (PriceSizeStorage) {
  inpItemPriceSize.value = PriceSizeStorage;
  addPriceSize(PriceSizeStorage);
}

function addPriceSize(PriceSize) {
  showPrice.style.fontSize = `${PriceSize}px`;
  currencyType.style.fontSize = `${PriceSize}px`;
}
inpItemPriceSize.addEventListener("input", function () {
  let PriceFontSize = inpItemPriceSize.value;
  addPriceSize(PriceFontSize);
  localStorage.setItem("itemPriceSizeStorage", PriceFontSize);
});
// currency setting
// here I spend long time to solve this problem and the reason was that I put the span currency inside p , should be design letter with CSS
let currencyChoice = document.getElementById("currencyChoice");
let currencyStorage = window.localStorage.getItem("currencySaved");

if (currencyStorage) {
  currencyChoice.value = currencyStorage;
  addCurrency(currencyStorage);
}
function addCurrency(choose) {
  currencyType.textContent = `${choose}`;
}
document.addEventListener("DOMContentLoaded", function () {
  currencyChoice.addEventListener("change", function () {
    let newCurrency = currencyChoice.value;
    addCurrency(newCurrency);
    localStorage.setItem("currencySaved", newCurrency);
  });
});
// Currency Color
let inpCurrencyColor = document.getElementById("inpCurrencyColor");
let currencyColorStorage = window.localStorage.getItem("currecnyColorStrg");
if (currencyColorStorage) {
  inpCurrencyColor.value = currencyColorStorage;
  setCurrencyColor(currencyColorStorage);
}
function setCurrencyColor(currencyColor) {
  currencyType.style.color = `${currencyColor}`;
}
inpCurrencyColor.addEventListener("input", function () {
  let newCurrencyColor = inpCurrencyColor.value;
  setCurrencyColor(newCurrencyColor);
  localStorage.setItem("currecnyColorStrg", newCurrencyColor);
});

let inpCurrencySize = document.getElementById("inpCurrencySize");
let currencySizeStorage = window.localStorage.getItem("currecnySizeStrg");
if (currencySizeStorage) {
  inpCurrencySize.value = currencySizeStorage;
  setCurrencySize(currencySizeStorage);
}
function setCurrencySize(currencySize) {
  currencyType.style.fontSize = `${currencySize}px`;
}
inpCurrencySize.addEventListener("input", function () {
  let newCurrencySize = inpCurrencySize.value;
  setCurrencySize(newCurrencySize);
  localStorage.setItem("currecnySizeStrg", newCurrencySize);
});

// Img Setting
let inpImgSize = document.getElementById("inpImgSize");
let imgDiv = document.getElementById("imgDiv");
let imgSizeStorage = window.localStorage.getItem("imgSizeStrg");
if (imgSizeStorage) {
  inpImgSize.value = imgSizeStorage;
  setImgSize(imgSizeStorage);
}
function setImgSize(imgSize) {
  imgDiv.style.padding = `${imgSize}px`;
}
inpImgSize.addEventListener("input", function () {
  let newImgSize = inpImgSize.value;
  setImgSize(newImgSize);
  localStorage.setItem("imgSizeStrg", newImgSize);
});

// Img Corners design
let topImgCorners = document.getElementById("topImgCorners");
let bottomImgCorners = document.getElementById("bottomImgCorners");
let topImgCornersStorage = window.localStorage.getItem("topCornersStrg");
let bottomImgCornersStorage = window.localStorage.getItem("bottomCornersStrg");
if (topImgCornersStorage) {
  topImgCorners.value = topImgCornersStorage;
  setTopImgCorners(topImgCornersStorage);
}
function setTopImgCorners(top) {
  itemImg.style.borderTopLeftRadius = `${top}px`;
  itemImg.style.borderTopRightRadius = `${top}px`;
}

topImgCorners.addEventListener("input", function () {
  let newTopCorners = topImgCorners.value;
  setTopImgCorners(newTopCorners);
  localStorage.setItem("topCornersStrg", newTopCorners);
});

if (bottomImgCornersStorage) {
  bottomImgCorners.value = bottomImgCornersStorage;
  setBottomImgCorners(bottomImgCornersStorage);
}
function setBottomImgCorners(bottom) {
  itemImg.style.borderBottomLeftRadius = `${bottom}px`;
  itemImg.style.borderBottomRightRadius = `${bottom}px`;
}
bottomImgCorners.addEventListener("input", function () {
  let newBottomCorners = bottomImgCorners.value;
  setBottomImgCorners(newBottomCorners);
  localStorage.setItem("bottomCornersStrg", newBottomCorners);
});

let linkImgCorners = document.getElementById("linkImgCorners");
linkImgCorners.addEventListener("click", function () {
  let equalsCorners = topImgCorners.value;
  bottomImgCorners.value = equalsCorners;
  setBottomImgCorners(equalsCorners);
  localStorage.setItem("bottomCornersStrg", equalsCorners);
});

// Img Border setting
let inpImgBorder = document.getElementById("inpImgBorder");
let inpImgBorderColor = document.getElementById("inpImgBorderColor");
let imgBorderStorage = window.localStorage.getItem("imgBorderStrg");
let imgBorderColorStorage = window.localStorage.getItem("imgBorderColorStrg");
if (imgBorderStorage) {
  inpImgBorder.value = imgBorderStorage;
  setImgBorder(imgBorderStorage);
  setImgBorderColor(imgBorderColorStorage);
}
function setImgBorder(width) {
  itemImg.style.border = `${width}px solid `;
}
function setImgBorderColor(color) {
  itemImg.style.borderColor = `${color}`;
}

inpImgBorder.addEventListener("input", function () {
  let newImgBorder = inpImgBorder.value;
  setImgBorder(newImgBorder);

  // here I try many times to fix issue that if you set the width and update it letter the color will not change
  setImgBorderColor(inpImgBorderColor.value);
  localStorage.setItem("imgBorderStrg", newImgBorder);
});
// Img Border Color
if (imgBorderColorStorage) {
  inpImgBorderColor.value = imgBorderColorStorage;
  setImgBorderColor(imgBorderColorStorage);
}
inpImgBorderColor.addEventListener("input", function () {
  let newImgBorderColor = inpImgBorderColor.value;
  setImgBorderColor(newImgBorderColor);
  localStorage.setItem("imgBorderColorStrg", newImgBorderColor);
});

// Item box design
let inpItemBoxRadius = document.getElementById("inpItemBoxRadius");
let itemBoxRadiusStorage = window.localStorage.getItem("itemBoxRadiusStrg");
if (itemBoxRadiusStorage) {
  inpItemBoxRadius.value = itemBoxRadiusStorage;
  setBoxRadius(itemBoxRadiusStorage);
}
function setBoxRadius(radiusBox) {
  itemBox.style.borderRadius = `${radiusBox}px`;
}
inpItemBoxRadius.addEventListener("input", function () {
  let newBoxRadius = inpItemBoxRadius.value;
  setBoxRadius(newBoxRadius);
  localStorage.setItem("itemBoxRadiusStrg", newBoxRadius);
});
let linkBorderWithImg = document.getElementById("linkBorderWithImg");
linkBorderWithImg.addEventListener("click", function () {
  let linckAllCorners = topImgCorners.value;
  inpItemBoxRadius.value = linckAllCorners;
  setBoxRadius(linckAllCorners);
  localStorage.setItem("itemBoxRadiusStrg", linckAllCorners);
});

let inpItemBoxBg = document.getElementById("inpItemBoxBg");
let itemBoxBgStorage = window.localStorage.getItem("itemBoxBgStrg");
if (itemBoxBgStorage) {
  inpItemBoxBg.value = itemBoxBgStorage;
  setItemBoxBg(itemBoxBgStorage);
}
function setItemBoxBg(bgColor) {
  itemBox.style.backgroundColor = `${bgColor}`;
}
inpItemBoxBg.addEventListener("input", function () {
  let newItemBoxBg = inpItemBoxBg.value;
  setItemBoxBg(newItemBoxBg);
  localStorage.setItem("itemBoxBgStrg", newItemBoxBg);
});

// item Box Border
let inpItemBoxBorder = document.getElementById("inpItemBoxBorder");
let itemBoxBorderStorage = window.localStorage.getItem("boxBorderStrg");
let itemBoxBorderClrStorage = window.localStorage.getItem("boxBorderClrStrg");
if (itemBoxBorderStorage) {
  inpItemBoxBorder.value = itemBoxBorderStorage;
  setItemBoxBorder(itemBoxBorderStorage);
  setItemBoxBorderColor(itemBoxBorderClrStorage);
}
function setItemBoxBorder(boxBorder) {
  itemBox.style.border = `${boxBorder}px solid`;
}
function setItemBoxBorderColor(borderColor) {
  itemBox.style.borderColor = `${borderColor}`;
}
inpItemBoxBorder.addEventListener("input", function () {
  let newBoxBorder = inpItemBoxBorder.value;
  setItemBoxBorder(newBoxBorder);
  setItemBoxBorderColor(inpItemBoxBorderColor.value);
  localStorage.setItem("boxBorderStrg", newBoxBorder);
});
let inpItemBoxBorderColor = document.getElementById("inpItemBoxBorderColor");
if (itemBoxBorderClrStorage) {
  inpItemBoxBorderColor.value = itemBoxBorderClrStorage;
  setItemBoxBorderColor(itemBoxBorderClrStorage);
}
inpItemBoxBorderColor.addEventListener("input", function () {
  let newBoxBorderClr = inpItemBoxBorderColor.value;
  setItemBoxBorderColor(newBoxBorderClr);
  localStorage.setItem("boxBorderClrStrg", newBoxBorderClr);
});
// tool for cart Btns
let cartBtnOne = document.getElementById("cartBtnOne");
let cartBtnOneCart = document.getElementById("cartBtnOneCart");
// I make it here using classes Game but the problem in effecting , so should be in css to get control but here working well
// function clickCartBtnOne() {
//   cartBtnOne.classList.toggle("justify-content-end");
//   if (cartBtnOne.classList.contains("justify-content-end")) {
//     cartBtnOneCart.style.backgroundColor = "red";
//   } else {
//     cartBtnOneCart.style.backgroundColor = "lightGreen";
//   }
// }
// cartBtnOne.addEventListener("click", clickCartBtnOne);
//Planning :
// use classes list to control and train , and use only bootstrap classes
let movedCart = false;
cartBtnOne.addEventListener("click", function () {
  if (movedCart) {
    cartBtnOneCart.style.left = 0;
    cartBtnOneCart.style.backgroundColor = "red";
  } else {
    cartBtnOneCart.style.left = "18.5px";
    cartBtnOneCart.style.backgroundColor = "lightGreen";
  }
  movedCart = !movedCart;
});

// Tool : Choose Cart Button
let chooseCartOne = document.getElementById("chooseCartOne");
let chooseCartTwo = document.getElementById("chooseCartTwo");
let chooseCartThree = document.getElementById("chooseCartThree");
cartBtn = document.getElementById("cartBtn");
let clonedCartBtnStorage = window.localStorage.getItem("clonedStorage");
if (clonedCartBtnStorage) {
  cartBtn.innerHTML = clonedCartBtnStorage;
}
chooseCartOne.addEventListener("click", function () {
  let cartBtnOne = document.getElementById("cartBtnOne");
  let clonedCartBtn = cartBtnOne.cloneNode(true);
  localStorage.setItem("clonedStorage", clonedCartBtn.outerHTML);
  cartBtn.innerHTML = "";
  cartBtn.appendChild(clonedCartBtn);
});
chooseCartTwo.addEventListener("click", function () {
  let cartBtnTwo = document.getElementById("cartBtnTwo");
  clonedCartBtn = cartBtnTwo.cloneNode(true);
  cartBtn.innerHTML = "";
  cartBtn.appendChild(clonedCartBtn);
  localStorage.setItem("clonedStorage", clonedCartBtn.outerHTML);
});
chooseCartThree.addEventListener("click", function () {
  let cartBtnThree = document.getElementById("cartBtnThree");
  clonedCartBtn = cartBtnThree.cloneNode(true);
  cartBtn.innerHTML = "";
  cartBtn.appendChild(clonedCartBtn);
  localStorage.setItem("clonedStorage", clonedCartBtn.outerHTML);
});
