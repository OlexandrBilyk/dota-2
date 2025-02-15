const signInModal = {
  modalOpen: document.querySelectorAll(".auth__btn--sign-in"),
  modalClose: document.querySelector(".modal__close--sign-in"),
  backdrop: document.querySelector(".backdrop-sign-in"),
  eye: document.querySelector(".modal__eye"),
  password: document.querySelector(".modal__input--password"),
};
const toggleSignInHidden = function () {
  signInModal.backdrop.classList.toggle("is-hidden");
};
// window.addEventListener("click", (event) => {
//   if (event.target === signInModal.backdrop) toggleSignInHidden();
// });
signInModal.modalOpen.forEach((el) => {
  el.addEventListener("click", toggleSignInHidden);
});
signInModal.modalClose.addEventListener("click", toggleSignInHidden);
signInModal.eye.addEventListener("click", () => {
  const password = signInModal.password;
  password.type = password.type === "password" ? "text" : "password";
});
