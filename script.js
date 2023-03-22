"use strict";

/* Start Page Overlay */

const startpageButton = document.querySelector("#start_button");

// Event Listener to change display on parent container to none once button clicked

//.closest? to select parent up dom tree
startpageButton.addEventListener("click", (e) => {
  console.log("button clicked");
});
