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

const productModal = document.getElementById("product-modal");
const productModal2 = document.getElementById("product-modal2");
const productModal3 = document.getElementById("product-modal3");
const productModal4 = document.getElementById("product-modal4");
const orderSummary = document.querySelector(".order-summary");
const mainContainer = document.querySelector('.main-container');
const closeModalXButtons = document.querySelectorAll('.close-icon-x');
const orderCompletion = document.getElementById("confirm-order-completion");
const productContainer = document.querySelector(".product-container");

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

const generateProducts = (products) => {

  products.forEach( function (object, index, arr) {
    const markup = 
    `<div class="product-line" data-id="${object.id}">
        <img src=${object.img} alt=${object.alt} />
        <div>
          <h3>${object.icecream || object.tea} ${Object.hasOwn(object, 'icecream')? "Cone" : "Tea"}</h3>
          <h6>Calories: ${object.calories}kcal</h6>
          <h6>£${object.price}</h6>
        </div>
        <div class="quantity-counter">
          <img
            src="/logo/minus-sign.svg"
            alt="Remove from basket"
            class="remove_basket_icon"
          />
          <span>0</span>
          <img
            src="/logo/plus-sign.svg"
            alt="Add to basket"
            class="add_basket_icon"
          />
        </div>
      </div>`

    productContainer.insertAdjacentHTML('afterbegin', markup);
  })};

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

  // Generate the HTML for the Ice Creams
  generateProducts(iceCreams);
});

//Tea Card Clicked

teaButton.addEventListener("click", (e) => {
  mainContainer.style.display = "none";
  console.log(teaButton);

  productModal2.classList.add("dialog-scale");

  // Generate the HTML for the Teas
  generateProducts(teas);
});

shoppingBasket.addEventListener("click", (e) => {
  mainContainer.style.display = "none";
  console.log(shoppingBasket);

  productModal3.classList.add("dialog-scale")
});

favouriteMeals.addEventListener("click", (e) => {
  mainContainer.style.display = "none";
  console.log(favouriteMeals);

  productModal4.classList.add("dialog-scale")
});

// Event Listener for X Button in Modal for Products

closeModalXButtons.forEach(function(btn) { btn.addEventListener("click", (e) => {
  mainContainer.style.display = "block";

  // Remove Modal Visibility
  const modal = e.target.closest('[data-modal]')
  console.log(modal)

  modal.classList.remove("dialog-scale")

  // Clear Products HTML
  const productsbox = modal.querySelector(".product-container");
  productsbox.innerHTML = '';
})});

// Show Order Confirmation Dialog - Basket
confirmOrder.addEventListener('click', () => {
  orderCompletion.showModal();
})

// Order Summary Show upon Basket Confirmation
confirmBasket.addEventListener('click', () => {
  productModal3.classList.remove("dialog-scale");
  orderSummary.classList.add("dialog-scale");
} )