const contactsButton = document.querySelector(".contacts-button");
const popup = document.querySelector(".modal-feedback");
const close = document.querySelector(".modal-close");
const form = popup.querySelector("form");
const feedbackName = popup.querySelector("[name=feedback-name]");
const feedbackEmail = popup.querySelector("[name=feedback-email]");
const message = popup.querySelector("[name=message]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("feedbackEmail");
} catch (err) {
  isStorageSupport = false;
}

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    feedbackEmail.value = storage;
  }

  feedbackName.focus();
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
