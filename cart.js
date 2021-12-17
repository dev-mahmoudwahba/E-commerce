
const cart = localStorage.getItem("cart");
const cartProductsContainer = document.getElementById("cartProductsContainer");

 
const cartItems = JSON.parse(cart);

function displayElements()
{
    console.log(cartItems)


    for (const cartItem of cartItems) {
        console.log(cartItem)
         cartProductsContainer.innerHTML += `
    
                    <img src="${cartItem.image}">
                    <div class="inner-details-product">
                        <p class="name">${cartItem.name}</p>
                        <p class="company">${cartItem.company}</p>
                        <p class="oldprice">${cartItem.oldprice}</p>
                        <p class="status">${cartItem.status}</p>
                    </div>
                    <p class="innerprice">${cartItem.price}</p>`       
    }
} 
displayElements()

