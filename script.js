"use strict";

import 'core.js/dist/core.js';

const container = document.querySelector(".container");

/* Start Page Overlay */

const startpageButton = document.querySelector("#start_button");
const navItems = document.querySelector(".nav-items");
const navigation = document.querySelector(".navigation");
const navImages = navItems.querySelectorAll("img");
const icecreamButton = document.querySelector(".ice-cream-card");
const teaButton = document.querySelector(".tea-card");
const shoppingBasket = document.querySelector(".shopping-basket");
const favouriteMeals = document.querySelector(".favourite-meals");
const confirmBasket = document.querySelector(".confirm-basket");
const cancelBasket = document.querySelector(".cancel-basket");
const confirmOrder = document.getElementById("confirm-order");
const addToBasket = document.querySelector('add_basket_icon');
const removeFromBasket = document.querySelector('remove_basket_icon');
const addPreviewToBasket = document.getElementById("add-to-basket");
const removeProductBasket = document.querySelectorAll("remove-product-basket")
const dialogBasketAdd = document.getElementById("dialog-basket-add");
const favMealDialogBasketAdd = document.getElementById("dialog-meal-basket-add");
const confirmBasketAdd = document.getElementById("confirm-basket-add");
const cancelBasketAdd = document.getElementById("cancel-basket-add");
const basketCounter = document.getElementById("basket-counter");
const favouriteCounter = document.getElementById("favourite-counter");
const favouriteCheckbox = document.querySelector("input[name=favourite]");
const mealNameDiv = document.querySelector(".meal-name");
const orderNumber = document.querySelector(".order-number");
const finishOrder = document.querySelector(".finish");
const orderPrint = document.querySelector(".print-order-number");

const showcaseOverlay = document.querySelector(".showcase_overlay");
const productModal = document.getElementById("product-modal");
const productModal3 = document.getElementById("product-modal3");
const productModal4 = document.getElementById("product-modal4");
const allProductModals = document.querySelectorAll("div[data-modal]");
const orderSummary = document.querySelector(".order-summary");
const mainContainer = document.querySelector('.main-container');
const closeModalXButtons = document.querySelectorAll('.close-icon-x');
const orderCompletion = document.getElementById("confirm-order-completion");
const modalContainer = document.querySelector(".modal-container");
const productContainer = document.querySelector(".product-container");
const previewContainer = document.querySelector(".basket-item-preview")

const basketProductContainer = productModal3.querySelector(".product-container");
const favouritesProductContainer = productModal4.querySelector(".product-container");

// const preVatTotal = document.getElementById("total-pre-vat");
// const incVatTotal = document.getElementById("total-inc-vat");
// const vatAmount = document.getElementById("vat-amount");

const state = {
  preview: [],
  basket: [],
  basketLimit: 10,
  favourites: [],
  orderNumber: 0,
};

const _resetOrder = function() {
  state.orderNumber = 0;
  state.favourites = [];
  state.basket = [];
  state.preview = [];
  localStorage.removeItem("favourites");
  localStorage.removeItem("orderNumber");
  updateBasketOverlay();
  updateFavouritesOverlay();
  console.log("Order Reset");
}

//Remove Duplicates from Array of Objects
function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
  })
}

const closeOtherModels = function() {
// Close Any Open Modals
allProductModals.forEach(el => {
  if(el.classList.contains("dialog-scale")) {
    el.classList.remove("dialog-scale")}
    // Clear Products HTML
  const productsContainer = el.querySelector(".product-container");
  productsContainer.innerHTML = ''
  //Empty Preview Array
  state.preview = [];

  //Empty Preview Container
  previewContainer.innerHTML = '';

  mainContainer.style.display = "none";

})};

const getLocalStorage = () => {
  let favourites = JSON.parse(localStorage.getItem('favourites'));
  const orderNumber = JSON.parse(localStorage.getItem('orderNumber'));

  if(orderNumber) {
    state.orderNumber = orderNumber;
  }

  if (!favourites) {
    return state.favourites = [];
  }

  // Filter Favourites Array without duplicate items
  const filteredFavourites = favourites.map( arr => removeDuplicates(arr, "id"));

  filteredFavourites.forEach((arr,_,array) => {
    
    arr.forEach(function(cur) {
      if(typeof cur === "object") {
      let countValue = cur.quantity - 1;
        while(countValue > 0){
          arr.push(cur)
          --countValue;
        }
      } else {console.log("not object")}
    })
  })

  //Moving Meal Name to end of array
  filteredFavourites.forEach((arr) => {
    arr.forEach((el, i) => {
      if(typeof el === "string") {
        const mealName = el;
        arr.splice(i, 1);
        arr.push(mealName);
      }
    })
  })

  favourites = filteredFavourites;

  if(favourites && orderNumber) {
    state.favourites = favourites;
    state.orderNumber = orderNumber;
  }
};


const setLocalStorage = function() {
  localStorage.setItem('favourites', JSON.stringify(state.favourites));
  localStorage.setItem('orderNumber', JSON.stringify(state.orderNumber));
};

const renderError = (error, domElement = mainContainer) => {
  //create new div
  const errorDiv = document.createElement("div");

  errorDiv.className = "_error";

  // and give it some content
  const errorMessage = document.createTextNode(` ${error}`);

  errorDiv.appendChild(errorMessage);

  //insert into DOM
  domElement.before(errorDiv);

  //setTimeout to delete Node from DOM after 3 seconds
  setTimeout(() => {
    errorDiv.remove();
  }, 5000);
}

const renderSpinner = (element) => {
  const markup = `
    <div class="spinner">
      <svg>
        <use href="/logo/icons.svg#icon-loader"></use>
      </svg>
    </div>
  `;

  element.insertAdjacentHTML('afterend', markup);
};

const generateH2 = (string) => {
  const header = modalContainer.firstElementChild;

  header.innerHTML = '';
  header.insertAdjacentHTML('afterbegin', string);
}

const generateProducts = (products) => {

  products.forEach( function (object, index, arr) {
    const markup = 
    `<div class="product-line" data-id="${object.id}">
        <img src=${object.img} alt=${object.alt} />
        <div>
          <h3>${object.icecream || object.tea} ${Object.hasOwn(object, 'icecream')? "Cone" : "Tea"}</h3>
          <h6>Calories: ${object.calories}kcal</h6>
          <h3>£${(object.price).toFixed(2)}</h3>
        </div>
        <div class="quantity-counter">
          <img
            src="/minus-sign.169ef0fc.svg"
            alt="Remove from basket"
            class="remove_basket_icon"
          />
          <span class="product-quantity">0</span>
          <img
            src="/plus-sign.11eec5fe.svg"
            alt="Add to basket"
            class="add_basket_icon"
          />
        </div>
      </div>`

    productContainer.insertAdjacentHTML('afterbegin', markup);
})};

const generatePreview = function(preview) {
  previewContainer.innerHTML = '';

  const uniqueItems = [...new Set(preview)];
  
  uniqueItems.forEach(function(object, index, arr) { 
    const markup = `
        <div>
          <img src=${object.img} alt=${object.alt} />
          <div>
            <h3>${object.icecream || object.tea} x${object.quantity}</h3>
            <h4>£${(object.price).toFixed(2)}</h4>
          </div>
        </div>`

      previewContainer.insertAdjacentHTML('afterbegin', markup);

  })
};

const generateFavs = function() {
  //Clear Fav Container
  favouritesProductContainer.innerHTML = '';

  // Create Favourites Array without duplicate items
  const newFavourites = state.favourites.map( arr => removeDuplicates(arr, "id"));

  //Generate Meal Div and Meal Header and Contents for each index in favourites
  newFavourites.forEach((arr, i, favArr) => {
    const mealPrice = arr.reduce((acc, cur) => {
      typeof cur === "object"? acc += (cur.price * cur.quantity) : acc;
      return acc;
    }, 0)
    
    arr.push(mealPrice);

    const markup = 
        `<div data-index="${i}"> <!-- Meal Div-->
          <div><!--Meal Header -->
            <div>
              <div>
                <h2>${arr[arr.length - 2]}</h2>
                <h1>£${(arr[arr.length - 1]).toFixed(2)}</h1>
              </div>
              <button type="button" id="add-to-basket">Add Basket</button>
                <dialog id="dialog-meal-basket-add">
                    <p>Add Meal to Basket?</p>
                    <div>
                      <button type="button" id="confirm-basket-add" class="confirm-button">Confirm</button>
                      <button type="button" id="cancel-basket-add" class="cancel-button">Cancel</button>
                    </div>
                </dialog>
              <button type="button" id="remove-favs">Remove</button>
            </div>
          </div>
            <div class="favourites-products"><!--Products in Meal Div-->
              <!--Product Lines Generated in Here-->
            </div>
        </div>`;

    favouritesProductContainer.insertAdjacentHTML('afterbegin', markup);

    // Generate Second HTML for product lines
    const favouritesProducts = favouritesProductContainer.querySelector(".favourites-products");

    arr.forEach(obj => {
      if(typeof obj === "object") {
        const markup = 
        `<div class="product-line" data-id="${obj.id}">
          <img src=${obj.img} alt=${obj.alt}/>
          <div>
            <h3>${obj.icecream || obj.tea} ${Object.hasOwn(obj, 'icecream')? "Cone" : "Tea"}</h3>
            <h3>x ${obj.quantity}</h3>
          </div>
        </div>`

        favouritesProducts.insertAdjacentHTML('afterbegin', markup);
      } else return;
    })
  })
}

const generateBasket = function(basket) {
  basketProductContainer.innerHTML = '';

  const basketCounts = basket.reduce(
    (countobj, curobj) => {
      countobj[curobj.id]? countobj[curobj.id] += 1 : countobj[curobj.id] = 1;
      return countobj;
    },
    { }
  );

  // Loop through basket and set quantity to match basketCounts
  basket.forEach(function (obj)
    {
    obj.quantity = basketCounts[String(obj.id)];
  })

  // Reset Adapted Favourites Array to source
  getLocalStorage();

  // Create set from basket
  const newBasket = removeDuplicates(basket, "id");

  // Generate HTML
  newBasket.forEach( function (object, index, arr) {
    const markup = `<div class="product-line" data-id="${object.id}">
        <img src=${object.img} alt=${object.alt} />
        <div>
          <h3>${object.icecream || object.tea} ${Object.hasOwn(object, 'icecream')? "Cone" : "Tea"}</h3>
          <h3>x ${object.quantity}</h3>
          <h6>Calories: ${object.calories * object.quantity}kcal</h6>
          <h6>£${(object.price * object.quantity).toFixed(2)}</h6>
        </div>
        <button type="button" class="remove-product-basket">Remove</button>
      </div>`
    
  
  basketProductContainer.insertAdjacentHTML('afterbegin', markup);
})
};

const generateBasketTotals = function () {
  const basketPreviewContainer = productModal3.querySelector(".basket-item-preview")
  basketPreviewContainer.innerHTML = '';

  if(state.basket.length === 0) return; //guard clause if basket clicked on empty
 
  const preVatTotal = state.basket.map(obj => obj.price).reduce(function (acc, cur) { return acc += cur});

  const vatAmount = preVatTotal * .20;

  basketPreviewContainer.insertAdjacentHTML('afterbegin', 
  `<table>
    <tr>
      <th scope="row">Total pre-tax:</th>
      <td>£${preVatTotal.toFixed(2)}</td>
    </tr>
    <tr>
      <th scope="row">+ VAT 20%:</th>
      <td>£${vatAmount.toFixed(2)}</td>
    </tr>
    <tfoot>
      <th scope="row">Total</th>
      <td>£${(preVatTotal + vatAmount).toFixed(2)}</td>
    </tfoot>
  </table>`);
}

const closeClearProductModal = function (element) {
  mainContainer.style.display = "block";

  // Remove Modal Visibility
  const modal = element.closest('[data-modal]')

  modal.classList.remove("dialog-scale")

  // Clear Products HTML
  const productsContainer = modal.querySelector(".product-container");
  productsContainer.innerHTML = '';

  //Empty Preview Array
  state.preview = [];

  //Empty Preview Container
  previewContainer.innerHTML = '';

  // Remove Clicked Status from Nav Buttons
  navImages.forEach(img => img.classList.remove("clicked"));
};

// Basket Number Overlay
const updateBasketOverlay = function () {
  const basketTotal = state.basket.length;
  basketCounter.innerHTML = String(basketTotal);
}

//Favourites Number Overlay
const updateFavouritesOverlay = function () {
  const favouriteTotal = state.favourites.length;
  favouriteCounter.innerHTML = String(favouriteTotal);
}

// Start Page Overlay

startpageButton.addEventListener("click", (e) => {

  // RenderSpinner function
  const target = e.target;
  renderSpinner(target);

  //Retrieve LocalStorage Favourites and Order Number
  getLocalStorage();

  // Updates Favourites Overlay
  updateFavouritesOverlay();

  // Hide Start Overlay

  showcaseOverlay.style.display = "none";

  // Remove Spinner from DOM
  const spinner = document.querySelector(".spinner");
  spinner.remove();
});

//Ice Cream Card Clicked

icecreamButton.addEventListener("click", (e) => {
  mainContainer.style.display = "none";

  productModal.classList.add("dialog-scale")

  // Generate H2 in Modal Container (Ice Creams)
  generateH2('Ice-Creams');

  // Generate the HTML for the Ice Creams
  generateProducts(iceCreams);
});

//Tea Card Clicked

teaButton.addEventListener("click", (e) => {
  mainContainer.style.display = "none";

  productModal.classList.add("dialog-scale");

  // Generate H2 in Modal Container (Teas)
  generateH2('Teas');

  // Generate the HTML for the Teas
  generateProducts(teas);
});

// +- Basket icon

productContainer.addEventListener("click", (e) => {
  const clicked = e.target;
  const clickedClasses = Array.from(clicked.classList);

  let counter = clicked.previousElementSibling || clicked.nextElementSibling;
  
  if (clickedClasses[0] === "add_basket_icon") {
    // Conditional if Basket < basketLimit
    if(state.preview.length < state.basketLimit && state.preview.length + state.basket.length < state.basketLimit) {

    // Increase Counter
    let digit = +counter.innerText;
    digit++;

    counter.innerText = String(digit)

    // counter.innerText = String(digit);

    // Add Object to Preview Array

    const productLine = clicked.closest(".product-line");
    const dataID = +productLine.dataset.id;

    const combinedProductsArray = [...iceCreams, ...teas]
    const linkedProduct = combinedProductsArray.find(el => el.id === dataID);
    linkedProduct.quantity = digit;
    state.preview.push(linkedProduct);

    } else {renderError("Basket Limit Reached")}

    // Generate Previews
    generatePreview(state.preview);
  }

  if (clickedClasses[0] === "remove_basket_icon") {
    // Decrease Counter
    let digit = +counter.innerText;
    digit === 0 ? counter.innerText = String(digit) : counter.innerText = String(--digit);

    // Remove Object from Preview Array

    const productLine = clicked.closest(".product-line");
    const dataID = +productLine.dataset.id;

    const filteredMatching = state.preview.filter( el => el.id === dataID)
    const filteredNotMatching = state.preview.filter(el => el.id !== dataID)
    filteredMatching.pop();
    filteredMatching.forEach(obj => obj.quantity = digit);
    state.preview = [...filteredNotMatching, ...filteredMatching];

    // Generate Previews
    generatePreview(state.preview);
  }
})

// Add Preview to Basket within Modal SideBar

addPreviewToBasket.addEventListener('click', () => {
  if(!state.preview.length > 0) return;
  dialogBasketAdd.showModal();
});

// Confirm Send Items to Basket
confirmBasketAdd.addEventListener('click', (e) => {
  //Add Preview Array Items to Basket Array
  state.basket.push(state.preview);
  const basketFlat = state.basket.flat();
  state.basket = basketFlat;

  // Updates # in Basket
  updateBasketOverlay();
  
  // Empty and Close Modal
  closeClearProductModal(e.target);

  //Close Dialog Modal
  dialogBasketAdd.close()


})

// Cancel Send Items to Basket

cancelBasketAdd.addEventListener('click', function() {
  dialogBasketAdd.close();
});


// Basket icon Clicked

shoppingBasket.addEventListener("click", (e) => {

  // If Empty Basket
  if(state.basket.length === 0 && !e.target.classList.contains("clicked")) {
    return renderError('Basket is currently empty!');
  }

  navImages.forEach(img => img.classList.remove("clicked"))

  //Add Thick Underline When Active
  e.target.classList.add("clicked");

  closeOtherModels();

  productModal3.classList.add("dialog-scale");

  // Generate HTML for Basket Items
  generateBasket(state.basket);

  // Show £ Totals
  generateBasketTotals();

});

// Favourite Meals Icon Clicked

favouriteMeals.addEventListener("click", (e) => {

  // If Empty Favourites
  if(state.favourites.length === 0 && !e.target.classList.contains("clicked")) {
    return renderError('Favourites is currently empty!');
  }

  navImages.forEach(img => img.classList.remove("clicked"))

  //Add Thick Underline When Active
  e.target.classList.add("clicked");

  // Close all other open modals - same as when basket opened
  closeOtherModels();

  //Remove Display Main Container
  mainContainer.style.display = "none";

  //Show Favourite Meals Modal
  productModal4.classList.add("dialog-scale")

  // Generate Favs HTML
  generateFavs();
});

// Favourite Meals Add to Basket/Remove from Basket Buttons Clicked

favouritesProductContainer.addEventListener('click', function doit(e) {
e.stopPropagation();

favouritesProductContainer.removeEventListener('click', doit);
favouritesProductContainer.addEventListener('click', doit);

  //If Add Meal to Basket clicked then close modal and update Basket overlay and add items to state.basket.
  const clicked = e.target;

  if(clicked.id !== "add-to-basket" && clicked.id !== "remove-favs") return; //guard clause to isolate add/remove buttons

  const mealDiv = clicked.closest('[data-index]')

  const mealIndex = mealDiv.dataset.index;

  const mealCopy = state.favourites[mealIndex].slice(); /* issue here with duplicates on index??? */
  mealCopy.pop();


  if(clicked.id === "add-to-basket") {
    if(mealCopy.length <= state.basketLimit && mealCopy.length + state.basket.length <= state.basketLimit) {

      //Open Dialog Modal
      const favMealDialogBasketAdd = mealDiv.querySelector("#dialog-meal-basket-add");
      const confirmBasketAdd = mealDiv.querySelector("#confirm-basket-add");
      const cancelBasketAdd = mealDiv.querySelector("#cancel-basket-add");

      favMealDialogBasketAdd.showModal();
      
      confirmBasketAdd.addEventListener('click', function confirm(e){
      
        e.stopPropagation();
      
      state.basket.push(...mealCopy);
      
      // debugger;
      updateBasketOverlay();

      // // Close Dialog
      favMealDialogBasketAdd.close();

      return confirmBasketAdd.removeEventListener('click', confirm);

      });

      cancelBasketAdd.addEventListener('click', (e) => {
        e.stopPropagation();

      // Close Dialog
      favMealDialogBasketAdd.close();

      });
    } else (renderError("Basket Limit Reached"));
  }

  if(clicked.id === "remove-favs") {

    // Remove from Favourites
    state.favourites.splice(+[mealIndex], 1)

    // Regenerate Favourites
    generateFavs();

    // Update Fav Overlay
    updateFavouritesOverlay();

    // Update localStorage
    setLocalStorage();
  }
});

// Event Listener for X Button in Modal for Products

closeModalXButtons.forEach(function(btn) { btn.addEventListener("click", (e) => {
  const element = e.target;
  closeClearProductModal(element);
})});

// Remove Item from Basket

basketProductContainer.addEventListener('click', (e) => {
const clicked = e.target;

const clickedClasses = Array.from(clicked.classList);

  
if (clickedClasses[0] !== "remove-product-basket") return; //guard clause

const productLine = clicked.closest(".product-line");
const dataID = +productLine.dataset.id;

const filteredBasket = state.basket.filter( el => el.id !== dataID)
state.basket = filteredBasket;

generateBasket(state.basket);

generateBasketTotals();

updateBasketOverlay();
})

// Show Order Confirmation Dialog - Basket
confirmOrder.addEventListener('click', () => {

  if(state.basket.length === 0) return; //guard clause

  orderCompletion.showModal();
})

// Favourite Meal not Checked
favouriteCheckbox.addEventListener('change', function() {
  if (this.checked) {
    mealNameDiv.style.display = "block";
  } else {
    mealNameDiv.style.display = "none";
  }
});

// Order Summary Show upon Basket Confirmation
confirmBasket.addEventListener('click', (e) => {

  //Validation of Inputs
  const dialogCommit = orderCompletion.children;
  const checkedValue = dialogCommit[0].children.favourite.checked;
  const mealNameValue = dialogCommit[1].children.mealname.value;

  let storedMealNames;
  state.favourites.length > 0 ? storedMealNames = state.favourites.map(arr => arr[arr.length-1]) : storedMealNames = [];

  if(checkedValue && storedMealNames.includes(mealNameValue)) {
    return renderError("Meal Name Unavailable", favouriteCheckbox); //guard clause to produce alert
  }

  if(checkedValue && mealNameValue === '') {
    return renderError("Meal Name Required", favouriteCheckbox); //guard clause to produce alert
  }
  
  orderCompletion.returnValue = "Confirm";

  // if favourite input checked? 
  if(orderCompletion.returnValue === "Confirm" && checkedValue) {

    state.favourites.push(state.basket);

    state.favourites[state.favourites.length-1].push(mealNameValue);
  }

  //Empty Basket
  state.basket = [];

  // Close Dialog Window
  orderCompletion.close();

  // Increase Order Number
  state.orderNumber++

  // Basket Overlay = 0
  updateBasketOverlay()

  productModal3.classList.remove("dialog-scale");
  orderSummary.classList.add("dialog-scale");

  // Remove Clicked Status from Basket Icon
  navImages.forEach(img => img.classList.remove("clicked"));

  // Navigation Display None
  navigation.style.display = "none";

  //generate HTML for orderSummary including state.orderNumber.
  orderNumber.innerText = String(state.orderNumber);

} )

cancelBasket.addEventListener('click', function(e) {orderCompletion.close()});


//Finish Button Clicked
finishOrder.addEventListener('click', function(e) {

setLocalStorage();
// Empty Favourites Array
state.favourites = [];

showcaseOverlay.style.display = "flex";

updateFavouritesOverlay();

orderSummary.classList.remove("dialog-scale");

// Navigation Display
navigation.style.display = "flex";

mainContainer.style.display = "block";

});

// Finish Button Clicked with Print
orderPrint.addEventListener('click', function(e) {

  //Open Print Window
  window.print();

  window.addEventListener("afterprint", (event) => {
    console.log("After print");
  });
})