"use strict";

//Keydown Template (Escape)
// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

/* Start Page Overlay */

const startpageButton = document.querySelector("#start_button");
const icecreamButton = document.querySelector(".ice-cream-card");
const teaButton = document.querySelector(".tea-card");
const shoppingBasket = document.querySelector(".shopping-basket");
const favouriteMeals = document.querySelector(".favourite-meals");
const confirmBasket = document.querySelector(".confirm-basket")
const confirmOrder = document.getElementById("confirm-order");
const addToBasket = document.querySelector('add_basket_icon');
const removeFromBasket = document.querySelector('remove_basket_icon');
const addPreviewToBasket = document.getElementById("add-to-basket");
const removeProductBasket = document.querySelectorAll("remove-product-basket")
const dialogBasketAdd = document.getElementById("dialog-basket-add");
const confirmBasketAdd = document.getElementById("confirm-basket-add");
const cancelBasketAdd = document.getElementById("cancel-basket-add");
const basketCounter = document.getElementById("basket-counter");

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

// const preVatTotal = document.getElementById("total-pre-vat");
// const incVatTotal = document.getElementById("total-inc-vat");
// const vatAmount = document.getElementById("vat-amount");

const state = {
  preview: [],
  previewPage: 0,
  basket: [],
  basketLimit: 10,
  favourites: [],
  orderNumber: 1,
};

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
  console.log(header);

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

  console.log(preview, uniqueItems);
  })
};

const generateBasket = function(basket) {
  const basketProductContainer = productModal3.querySelector(".product-container");

  const basketCounts = basket.reduce(
    (countobj, curobj) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
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

  console.log(basketCounts, basket);

  // Create set from basket
  const newBasket = [...new Set(basket)];
  console.log(newBasket);

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
        <button type="button" class="remove-product-basket">Remove from Basket</button>
      </div>`
    
  
  basketProductContainer.insertAdjacentHTML('afterbegin', markup);
})
};

const closeClearProductModal = function (element) {
  mainContainer.style.display = "block";

  // Remove Modal Visibility
  const modal = element.closest('[data-modal]')
  console.log(modal)

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

// Start Page Overlay

startpageButton.addEventListener("click", (e) => {

// RenderSpinner function
const target = e.target;
renderSpinner(target);

// Fetch Favourite Meals from localStorage and store in state.favourites
state.favourites = [];

// _setLocalStorage() {
//   localStorage.setItem('workouts', JSON.stringify(this.#workouts));
// }

// _getLocalStorage() {
//   const data = JSON.parse(localStorage.getItem('workouts'));

//   if (!data) return;

//   this.#workouts = data;

//   this.#workouts.forEach(work => {
//     this._renderWorkout(work);
//   });
// }

// reset() {
//   localStorage.removeItem('workouts');
//   location.reload();
// }

// Store Order Number value from localStorage into state.orderNumber
state.orderNumber = 1;

// Hide Start Overlay
  const targetoverlay = e.target.closest(".showcase_overlay");

  setTimeout(() => {
    targetoverlay.style.display = "none";

    const spinner = document.querySelector(".spinner");
    spinner.remove();
  }, 1000);
  // targetoverlay.style.display = "none";

  //Remove Spinner
  // const spinner = document.querySelector(".spinner");
  // spinner.remove();
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
  console.log(teaButton);

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
  console.log(clicked, clickedClasses, counter);
  
  if (clickedClasses[0] === "add_basket_icon") {
    // Conditional if Basket < 10
    if(state.preview.length < 10 && state.preview.length + state.basket.length < 10) {

    // Increase Counter
    let digit = +counter.innerText;
    digit++;
    console.log(digit);

    counter.innerText = String(digit)

    // counter.innerText = String(digit);

    // Add Object to Preview Array

    const productLine = clicked.closest(".product-line");
    const dataID = +productLine.dataset.id;
    console.log(productLine, dataID);

    const combinedProductsArray = [...iceCreams, ...teas]
    const linkedProduct = combinedProductsArray.find(el => el.id === dataID);
    linkedProduct.quantity = digit;
    state.preview.push(linkedProduct);

    } else {alert("Basket Limit Reached")}

    // Generate Previews
    generatePreview(state.preview);
}

  if (clickedClasses[0] === "remove_basket_icon") {
    // Decrease Counter
    let digit = +counter.innerText;
    digit === 0 ? counter.innerText = String(digit) : counter.innerText = String(--digit);
    console.log(digit);

    // Remove Object from Preview Array

    const productLine = clicked.closest(".product-line");
    const dataID = +productLine.dataset.id;
    console.log(productLine, dataID);

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
  console.log(state.basket, state.preview);


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
  if(state.basket.length === 0) return; //guard clause if basket clicked on empty
 
  const preVatTotal = state.basket.map(obj => obj.price).reduce(function (acc, cur) { return acc += cur});
  console.log(preVatTotal);

  const vatAmount = preVatTotal * .20;

  const basketPreviewContainer = productModal3.querySelector(".basket-item-preview")
  basketPreviewContainer.innerHTML = '';
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

  console.log(state);
});

// Favourite Meals Icon Clicked

favouriteMeals.addEventListener("click", (e) => {
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

//update basket overlay
//clear products container before generateBasket happens again
// error if basket cleared completely?

// productModal3.addEventListener('click', (e) => {
// const clicked = e.target;
// const productLine = clicked.closest(".product-line");
// const dataID = +productLine.dataset.id;
// console.log(productLine, dataID);

// const filteredBasket = state.basket.filter( el => el.id !== dataID)
// state.basket = filteredBasket;

// generateBasket(state.basket);
// })

// Show Order Confirmation Dialog - Basket
confirmOrder.addEventListener('click', () => {
  orderCompletion.showModal();
})

// Order Summary Show upon Basket Confirmation
confirmBasket.addEventListener('click', () => {
  productModal3.classList.remove("dialog-scale");
  orderSummary.classList.add("dialog-scale");
} )