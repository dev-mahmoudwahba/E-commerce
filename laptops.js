
async function getdata(){
   const response = await fetch('http://localhost:3000/products')
    const data = await response.json();
    
  console.log(data)
    
  data.forEach((el,i) =>{
   document.getElementsByClassName("pic")[i].innerHTML = `<img src="${el.image}" />`;
   document.getElementsByClassName("name")[i].innerHTML = el.name;
   document.getElementsByClassName("company")[i].innerHTML = el.company;
   document.getElementsByClassName("oldprice")[i].innerHTML =el.oldprice;
   document.getElementsByClassName("price")[i].insertAdjacentHTML('beforeend',el.price)
   document.getElementsByClassName("status")[i].innerHTML =el.status;

   
  })
    
}
 