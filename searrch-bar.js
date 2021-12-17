
"use strict";
const suggestionsDiv = document.getElementById("suggestions");
let arr= [];
const db = async ()=>{
  const response = await fetch('http://localhost:3000/laptops');
  const laptopsdata = await response.json();
  const phones = await fetch('http://localhost:3000/phones');
  const phonesdata = await phones.json();
  const cosmetics = await fetch('http://localhost:3000/cosmetics');
  const cosmeticsdata = await cosmetics.json();
  
arr =  [...laptopsdata, ...phonesdata, ...cosmeticsdata];
  
} 




db();

let filterd;

var searchBarInput = document.getElementById("searchBar")

    searchBarInput.addEventListener("keyup", (e)=>{
      console.log( e.target.value);
    if(e.target.value === '') { suggestionsDiv.innerHTML =''; return};
       filterd = arr.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()));
      let str = '';
      filterd.forEach((el,i )=> {
        str += `<p onclick="getElement(${i})" style='padding:1vw' >${el.name}</p>` 
      })
      suggestionsDiv.innerHTML = str;
    }) 

function getElement(index){
localStorage.setItem('product', JSON.stringify( filterd[index]));
const url =location.href.replace('HomePage','product');
location.href = url;
}




