import validator from "email-validator";

const form = document.querySelector("form");
const dismissButton = document.querySelector(".success-message button");

dismissButton.addEventListener("click", () => {
  document.querySelector(".form-wrapper").classList.remove("hidden");
  document.querySelector(".success-message").classList.add("hidden");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  SubmitEmail();
});

function SubmitEmail() {
  const email = document.querySelector("input").value;
  console.log(email);

  if (validator.validate(email)) {
    document.querySelector("input").classList.remove("error");
    document.querySelector(".error-message").classList.remove("visible");
    document.querySelector(".error-message").classList.add("hidden");
    document.querySelector(".form-wrapper").classList.add("hidden");
    document.querySelector(".success-message").classList.remove("hidden");
    document.querySelector(
      ".success-message p"
    ).innerHTML = `A confirmation email has been sent to <strong>${email}</strong>. Please open it and click the button inside to confirm your subscription.`;
  } else {
    document.querySelector("input").classList.add("error");
    document.querySelector(".error-message").classList.add("visible");
    document.querySelector(".error-message").classList.remove("hidden");
  }
}
