
const type = localStorage.getItem("type");
let products;
async function getdata()
{
    const response = await fetch(`http://localhost:3000/${type}`)
     const data = await response.json();
     products = data;
   productsDiv.innerHTML= "";
   data.forEach((el,i) =>
   {
     productsDiv.innerHTML += `
     <div class="product">
 
     <div class="pic" id="pic1"></div>
     <div class="info">
       <h2 class="name"></h2>
       <p class="company"></p>
       <p class="price"><del class="oldprice"></del> </p>
       <h4 class="status"></h4>
       <button class='Button'>Add to cart</button>
     </div>
   </div>`
    document.getElementsByClassName("pic")[i].innerHTML = `<img src="${el.image}" />`;
    document.getElementsByClassName("name")[i].innerHTML = el.name;
    document.getElementsByClassName("company")[i].innerHTML = el.company;
    document.getElementsByClassName("oldprice")[i].innerHTML =el.oldprice;
    document.getElementsByClassName("price")[i].insertAdjacentHTML('beforeend',el.price)
    document.getElementsByClassName("status")[i].innerHTML =el.status; 
   })
 
 

    var productsNameArray = [];

  for (const item of cartButton) 
  {
      item.addEventListener("click",(e)=>
      {
       const product = products.find(el => el.name == e.target.parentElement.firstElementChild.innerText)
       if(JSON.parse(localStorage.getItem("cart"))){
         productsNameArray = [...JSON.parse(localStorage.getItem("cart"))];
         productsNameArray.push(product)
       } else{
        productsNameArray.push(product)
       }      
      localStorage.setItem(`cart`,JSON.stringify(productsNameArray));

      alert("Item Added to the Cart");
      
      })
  }

 
}
 getdata()

 var cartButton = document.getElementsByTagName("button")

   
