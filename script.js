"use strict";

const container = document.querySelector(".container");

/* Start Page Overlay */

const startpageButton = document.querySelector("#start_button");
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

// const preVatTotal = document.getElementById("total-pre-vat");
// const incVatTotal = document.getElementById("total-inc-vat");
// const vatAmount = document.getElementById("vat-amount");

const state = {
  preview: [],
  basket: [],
  basketLimit: 10,
  favourites: [[{},{},{}, "test"]],
  orderNumber: 0,
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
          <h6>£${(object.price).toFixed(2)}</h6>
        </div>
        <div class="quantity-counter">
          <img
            src="/logo/minus-sign.svg"
            alt="Remove from basket"
            class="remove_basket_icon"
          />
          <span class="product-quantity">0</span>
          <img
            src="/logo/plus-sign.svg"
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
            <h6>£${(object.price).toFixed(2)}</h6>
          </div>
        </div>`

      previewContainer.insertAdjacentHTML('afterbegin', markup);

  })
};

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

  // Create set from basket
  const newBasket = [...new Set(basket)];
  console.log(basket, newBasket);

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
  const getLocalStorage = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites'));
    const orderNumber = JSON.parse(localStorage.getItem('orderNumber'));

    if (!favourites) {
      console.log("no favourites")
      state.favourites = [];
    }
    console.log(favourites, orderNumber)
    if(favourites && orderNumber) {
      state.favourites = favourites;
      state.orderNumber = orderNumber;
    }
    if(orderNumber) {
      state.orderNumber = orderNumber;
    }
  };

  getLocalStorage();

  // Updates Favourites Overlay
  updateFavouritesOverlay();

  console.log(state);

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
    // Conditional if Basket < 10
    if(state.preview.length < 10 && state.preview.length + state.basket.length < 10) {

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

    console.log(state.preview);

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
    
    console.log(state.preview);

    // Generate Previews
    generatePreview(state.preview);
  }
})

// Add Preview to Basket within Modal SideBar

addPreviewToBasket.addEventListener('click', () => {
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
  // Warning

  // Close Any Open Modals
  allProductModals.forEach(el => {
    if(el.classList.contains("dialog-scale")) {
      el.classList.remove("dialog-scale")
      // Clear Products HTML
    const productsContainer = el.querySelector(".product-container");
    productsContainer.innerHTML = '';

  //Empty Preview Array
  state.preview = [];

  //Empty Preview Container
  previewContainer.innerHTML = '';
    }
  });

  mainContainer.style.display = "none";

  productModal3.classList.add("dialog-scale");

  console.log(state.basket);

  // Generate HTML for Basket Items
  generateBasket(state.basket);

  // Show £ Totals
  generateBasketTotals();

  console.log("After Basket generated:", state);
});

// Favourite Meals Icon Clicked

favouriteMeals.addEventListener("click", (e) => {

  // Close all other open modals - same as when basket opened

  // Generate Meals from Favourites array
    //Generate Meal Div and Meal Header and Contents for each index in favourites
    //Then for each meal need secondary html generation for each item within the meal - following similar similar quantity numeration as per generateBasket
    //For each Meal need to account for number already in basket as !> 10 in basket with meal items added
    //If Add Meal to Basket clicked then close modal and update Basket overlay and add items to state.basket.

    // markup = 
    // `<div> <!-- Meal Div-->
    //     <div><!--Meal Header -->
    //       <h2>Meal Name 1</h2>
    //       <div>£All Meal Items: ${(preVatTotal).toFixed(2)}</div>
    //       <button type="button" id="confirm-order">Add Meal Items to Basket</button>
    //         <dialog id="confirm-basket-add">
    //             <p>Add Meal to Basket?</p>
    //             <div>
    //               <button type="button" class="confirm-button">Confirm</button>
    //               <button type="button" class="cancel-button">Cancel</button>
    //             </div>
    //         </dialog>
    //     </div>
    //     <div><!--Products in Meal Div--></div>
    //       <div class="product-line" data-id="${object.id}">
    //         <img/>
    //         <div>
    //           <h3>${object.icecream || object.tea} ${Object.hasOwn(object, 'icecream')? "Cone" : "Tea"}</h3>
    //           <h3>x ${object.quantity}</h3>
    //           <h6>Calories: ${object.calories * object.quantity}kcal</h6>
    //           <h6>£${(object.price * object.quantity).toFixed(2)}</h6>
    //         </div>
    //       </div>
    //     </div>
    //   </div>`


  mainContainer.style.display = "none";
  console.log(favouriteMeals);

  productModal4.classList.add("dialog-scale")
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
    console.log("Checkbox is checked..");
    mealNameDiv.style.display = "block";
  } else {
    console.log("Checkbox is not checked..");
    mealNameDiv.style.display = "none";
  }
});

// Order Summary Show upon Basket Confirmation
confirmBasket.addEventListener('click', (e) => {

  //Validation of Inputs
  const dialogCommit = orderCompletion.children;
  console.log(dialogCommit);
  const checkedValue = dialogCommit[0].children.favourite.checked;
  const mealNameValue = dialogCommit[1].children.mealname.value;
  console.log(checkedValue, mealNameValue);

  let storedMealNames;
  state.favourites.length > 0 ? storedMealNames = state.favourites.map(arr => arr[arr.length-1]) : storedMealNames = [];
  console.log(storedMealNames);

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

  //generate HTML for orderSummary including state.orderNumber.
  orderNumber.innerText = String(state.orderNumber);

  console.log(state);
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

mainContainer.style.display = "block";

console.log(state);

});

// Finish Button Clicked with Print
orderPrint.addEventListener('click', function(e) {

  //Open Print Window
  window.print();

  window.addEventListener("afterprint", (event) => {
    console.log("After print");
  });

  console.log(state);
})