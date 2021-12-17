

localStorage.setItem("products", localStorage.getItem("cart"))

let cartFilledContainer = document.getElementById("cart-filled-container");
let containerCartEmpty = document.getElementById("container-cart-empty");
let totalPay = document.getElementById("totalpay");
let bigContainerInlineflex = document.getElementById(
  "big-container-inlineflex"
);

if (localStorage.getItem("products") == null) {
  console.log("cart empty");
  containerCartEmpty.style.display = "block";
  cartFilledContainer.style.display = "none";
  totalPay.style.display = "none";
} else {
  console.log("cart filled");
  containerCartEmpty.style.display = "none";
  cartFilledContainer.style.display = "flex"; // flex filled ****************
  totalPay.style.display = "block";
  var productsData = JSON.parse(localStorage.getItem("products")); //array of products {products: Array(8)}
  let products = productsData.products;  // array of json object [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
console.log(productsData)
productsData.forEach((item) => {
    var productflexrow = document.createElement("div");
    productflexrow.setAttribute("class", "productflexrow");

    var inputCheck = document.createElement("input");
    inputCheck.setAttribute("type", "checkbox"); //type="checkbox" id="check-box-product"
    inputCheck.setAttribute("id", "check-box-product"); //type="checkbox" id="check-box-product"

    var imgProduct = document.createElement("img"); //src="./img/bag.jpg"
    imgProduct.setAttribute("src", item.image);
    imgProduct.style.width = "180px";
    imgProduct.style.height = "180px";

    var innerDetailsPproduct = document.createElement("div"); //class="inner-details-product"
    innerDetailsPproduct.setAttribute("class", "inner-details-product");

    var idOfItem = document.createElement("p");
    idOfItem.style.display = "none";
    idOfItem.innerText = item.id;

    var nameOfProduct = document.createElement("p"); //class="name"
    nameOfProduct.setAttribute("class", "name");
    nameOfProduct.innerText = item.name;

    var companyOfProduct = document.createElement("p");
    companyOfProduct.setAttribute("class", "company");
    companyOfProduct.innerText = item.company;

    var oldpriceOfProduct = document.createElement("p");
    oldpriceOfProduct.setAttribute("class", "oldprice");
    oldpriceOfProduct.innerText = item.oldprice;

    var statusOfProduct = document.createElement("p");
    statusOfProduct.setAttribute("class", "status");
    statusOfProduct.innerText = item.status;

    var btnDelete = document.createElement("button");
    btnDelete.innerText = "Delete";
    btnDelete.addEventListener("click", (eo) => {
      var idofproduct = eo.target.parentNode.querySelectorAll("p")[4].innerText;
      var productsData = JSON.parse(localStorage.getItem("products"));
      var newArr = productsData.filter((element) => {
        return element.id != idofproduct; // filter  return new array of all element except the element that i pressed
      });

      localStorage.setItem( "products", JSON.stringify({  products: newArr })  )
      window.location.reload();

    });

    var innerPriceeOfProduct = document.createElement("p");
    innerPriceeOfProduct.setAttribute("class", "innerprice");
    innerPriceeOfProduct.innerText = item.price;

    // -------------------- append in div
    productflexrow.append(
      inputCheck,
      imgProduct,
      innerDetailsPproduct,
      innerPriceeOfProduct
    );

    innerDetailsPproduct.append(
      nameOfProduct,
      companyOfProduct,
      oldpriceOfProduct,
      statusOfProduct,
      btnDelete,
      idOfItem
    );

    // -------------------- append in body

    cartFilledContainer.append(productflexrow);
  });
}
// -----------------------------
// to select all checkbox for products
let selectAllProdAnchor = document.getElementById("select-all-prod-anchor");

selectAllProdAnchor.addEventListener("click", (eo) => {
  eo.preventDefault();
  var inputCheckbox = document.querySelectorAll('input[type="checkbox"]');
  inputCheckbox.forEach((item) => {
    item.checked = true;
  });
});


// ------------------------------------
// subtotal 

// productsData.products
var productsData = JSON.parse(localStorage.getItem('products'));
var numOfProducts =  productsData.length
// var priceOfProducts =  productsData.products.price

document.getElementById("first-span").innerText = numOfProducts;
var sum = 0;
productsData.forEach(item => {
  var remove$ =  item.price.replace("$"," ")
  var tonumber = Number(remove$ )
    sum += tonumber
});

document.getElementById("second-span").innerText = sum;


// ---------------------------------------------------------
// fetch data 
var jsonFile = "./data.json"


async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  let tojson = JSON.parse(myText)
  console.log(tojson.products,"x")
  x=[1,2]



}
var result = getText(jsonFile)
