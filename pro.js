const pro = document.getElementById("sec2");
const type = localStorage.getItem("type");
let products;
async function getData() {
  const response = await fetch(`http://localhost:3000/${type}`);
  const data = await response.json();
  products=data;
  for (let i = 0; i < data.length; i++) {
    const productdiv = document.createElement("div");
  /*     console.log(data);
 */
    productdiv.innerHTML += ` <div class="divjason">  
                  <div class="imgg">
                  <img  class="img2" src="${data[i].image}" />
                  </div>
          <div class="divall2">
            <p class="p1"> ${data[i].name}</p>
            <p> ${data[i].price}</p> 
           <h5 class="ship">${data[i].status}</h5>
           <h3 class="only">${data[i].company}</h3>
           <h3 class="more">${data[i].oldprice}</h3>
           <button>Add To Cart</button>
          </div>
      </div> `;

    pro.appendChild(productdiv);
  }
  var images = document.getElementsByClassName("img2")
  for (const image of images) {
    image.addEventListener("click",(e)=>
    {
        console.log(window.location.href)
        const url = location.href.replace("pro","product");
        location.href = url; 
    });
    
  }
  for (const item of cartButton) 
  {
      item.addEventListener("click",(e)=>
      {
        console.log(e.target)
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
getData();

 var cartButton = document.getElementsByTagName("button") 



/* for (const item of cartButton) 
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
  } */

 
