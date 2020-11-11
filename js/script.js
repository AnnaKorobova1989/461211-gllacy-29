const siteWrapper = document.querySelector(".site-wrapper");
const sliderControls = document.querySelectorAll(".slider-control");


  for (let i = 0; i < sliderControls.length; i++) {
    sliderControls[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      siteWrapper.classList = "site-wrapper";
      siteWrapper.classList.add(`slide${i+1}`);
      const currentControl = document.querySelector(".current");
      currentControl.classList.remove("current");
      sliderControls[i].classList.add("current");
    });
  };

const contactsButton = document.querySelector(".contacts-button");
const popup = document.querySelector(".modal-feedback");
const close = document.querySelector(".modal-close");
const form = popup.querySelector("form");
const feedbackName = popup.querySelector("[name=feedback-name]");
const feedbackEmail = popup.querySelector("[name=feedback-email]");
const message = popup.querySelector("[name=message]");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("feedbackName");
  storageEmail = localStorage.getItem("feedbackEmail");
} catch (err) {
  isStorageSupport = false;
}

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storageEmail || storageName) {
    feedbackName.value = storageName;
    feedbackEmail.value = storageEmail;
    message.focus();
  } else {
    feedbackName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !message.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
} else {
  if (isStorageSupport) {
    localStorage.setItem("feedbackName", feedbackName.value);
    localStorage.setItem("feedbackEmail", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
