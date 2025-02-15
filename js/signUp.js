const signUpModal = {
  modalOpen: document.querySelectorAll(".auth__btn--sign-up"),
  modalClose: document.querySelector(".modal__close--sign-up"),
  backdrop: document.querySelector(".backdrop-sign-up"),
  eye: document.querySelector(".modal__eye--sign-up"),
  password: document.querySelector(".backdrop-sign-up .modal__input--password"),
};
const toggleSignUpHidden = function () {
  signUpModal.backdrop.classList.toggle("is-hidden");
};
// window.addEventListener("click", (event) => {
//   if (event.target === signUpModal.backdrop) toggleSignUpHidden();
// });

signUpModal.modalOpen.forEach((el) => {
  el.addEventListener("click", toggleSignUpHidden);
});
signUpModal.modalClose.addEventListener("click", toggleSignUpHidden);
signUpModal.eye.addEventListener("click", () => {
  const password = signUpModal.password;
  password.type = password.type === "password" ? "text" : "password";
});
