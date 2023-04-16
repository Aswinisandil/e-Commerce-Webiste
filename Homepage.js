const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
let subtotalEl = document.querySelector(".subtotal");
let cartEl = document.querySelector(".cart");
let cards = document.querySelectorAll(".product");




const product = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  for (let i = 0; i < data.length; i++) {
    

    productsEl.innerHTML += `
            <div class="product ${data[i].category}" id ="card">
                <div class = "product-image">
                <img src="${data[i].image}" alt="">
                </div>
                <h4 class="product-title ${data[i].title}">${data[i].title.toUpperCase()}</h4>
                <h5 class="product-category">${data[i].category}</h5>
                <p class="product-description"${data[i].description}></p>
                <div class="price-details">
                    <p class="price">$${data[i].price}</p>
                    <div onclick = "addToCart(${data[i].id})">
                    <ion-icon class="cart-icon"name="cart-outline"></ion-icon>
                    </div>
                </div>
            </div>
            `;
            
  }

  
}

product();

productsEl.addEventListener("DOMContentLoaded", product);






// Add to cart

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updatecart();

function addToCart(id) {
  const renderproducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    if (cart.some((item) => item.id === id)) {
      changeUnits("plus", id);
    } else {
      const item = products.find((product) => product.id === id);

      cart.push({
        ...item,
        numberofunits: 1,
      });
    }

    updatecart();
  };
  renderproducts();
}

// updating cart

function updatecart() {
  renderCartItems();
  renderSubtotal();

  localStorage.setItem("CART", JSON.stringify(cart));
}

// rendering Subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.numberofunits;
    totalItems += item.numberofunits;
  });
  subtotalEl.innerHTML = `Subtotal (${totalItems})items) : $${totalPrice.toFixed(
    2
  )}`;

  cartEl.innerHTML = `<ion-icon class = "cart-icon" name="cart-outline"></ion-icon><p id="count">${totalItems}</p>`;
}

// Rendering cart products

function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clearing the cart element duplicate

  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
                    <div class="cart-item">
                        <div class="item-info">
                            <img src="${item.image}" alt="${item.title}">
                            <h4>${item.title}</h4>
                        </div>
                        <div class="unit-price">
                        <small>$</small>${item.price}
                        </div>
                        <div class="unit-click">
                          <button class="button-minus" onclick = "changeUnits('minus', ${item.id})"> - </button>
                          <div class="number">${item.numberofunits}</div>
                          <button class="button-plus" onclick = "changeUnits('plus', ${item.id})"> + </button>
                        </div>
                        <div class="remove-item" onclick="removeItems(${item.id})"><ion-icon name="trash-outline"></ion-icon></div>
                        </div>
                            
                    `;
  });
}

//Removing Items

function removeItems(id) {
  cart = cart.filter((item) => item.id !== id);
  updatecart();
}

function changeUnits(action, id) {
  cart = cart.map((item) => {
    let numberofunits = item.numberofunits;

    if (item.id === id) {
      if (action === "minus" && numberofunits > 1) {
        numberofunits--;
      } else if (action === "plus" && numberofunits < 5) {
        numberofunits++;
      }
    }
    return {
      ...item,
      numberofunits,
    };
  });
  updatecart();
}


function openCartSide(){
  let a = document.getElementById("cart-right");
  if(a.className = "cart-container"){
    a.className += " responsive";
  }else {
    a.className += "close";
   
  }
}


function closeCart(){
  let x = document.getElementById("cart-right");

  if(x.className = "cart-container"){
    x.className += " close";
  } else {
    x.className += "remove";
  }
}

function userDown(){
  document.getElementById("userD").classList.toggle("show");
}

window.onclick = function(e){
  if(e.target.matches(".user-down")){
    let myDropDown = document.getElementById("userD");
    if(myDropDown.classList.contains("show")){
      myDropDown.classList.remove("show");
    }
  }
}

function logOut(){
  window.location.href = "http://127.0.0.1:5501/login.html";
}

let card = document.querySelectorAll("#card");


function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });


  //select all cards
  let elements = document.querySelectorAll(".product");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

// document.getElementById("search").addEventListener("click", () =>{
//   let elements = document.querySelectorAll(".product-title");
//   let searchInput = document.getElementById("search-input").value;
  
//       elements.forEach((element) =>{
//         if(element.innerText.includes(searchInput.toUpperCase())){
//           cards.classList.remove("visible");
//         }else{
//           cards.classList.add("visible");
//         }
//       })
//     }) 
  

    document.getElementById("search").addEventListener("click", () => {
      //initializations
      let searchInput = document.getElementById("search-input").value;
      let elements = document.querySelectorAll(".product-title");
      let cards = document.querySelectorAll("#card");
    
      //loop through all elements
      elements.forEach((element, index) => {
        //check if text includes the search value
        if (!element.innerText.includes(searchInput.toUpperCase())) {
          //display matching card
          cards[index].classList.add("hide");
        } else {
          //hide others
          cards[index].classList.remove("hide");
        }
        
      });
    });  
    
  //   let elements = document.querySelectorAll(".product-title");
  //   window.onload = () => {
  //     cards.forEach((index) => {
  //     cards[index].classList.remove("visible");
  //     filterProduct("all");

  //   })
  // }


