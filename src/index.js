import "./style.css";

// window.addEventListener("load", () => {

// })

const form = document.querySelector("#browser-form");
form.addEventListener("submit", (event) => {
  if (email.value.length === 0) {
    email.className = "invalid";
    emailError.className = "error";
    emailError.textContent = "This field is required";
    event.preventDefault();
  } else if (!emailRegExp.test(email.value)) {
    email.className = "invalid";
    emailError.className = "error";
    emailError.textContent = "Please fill in a valid E-Mail Address";
    event.preventDefault();
  } else {
    email.className = "valid";
    emailError.className = "";
    emailError.textContent = "";
  }

  const constraint = new RegExp(constraints[country.value][0], "");
  if (zip.value.length === 0) {
    zip.className = "invalid";
    zipError.className = "error";
    zipError.textContent = "This field is required";
    event.preventDefault();
  } else if (!constraint.test(zip.value)) {
    zip.className = "invalid";
    zipError.className = "error";
    zipError.textContent = constraints[country.value][1];
    event.preventDefault();
  } else {
    zip.className = "valid";
    zipError.className = "";
    zipError.textContent = "";
  }

  if (password.value.length === 0) {
    password.className = "invalid";
    passwordError.className = "error";
    passwordError.textContent = "This field is required";
    event.preventDefault();
  } else if (!passwordRegExp.test(password.value)) {
    password.className = "invalid";
    passwordError.className = "error";
    passwordError.textContent =
      "Your password has to contain at least 12 characters, 1 lowercase letter, 1 uppercase letter and 1 number";
    event.preventDefault();
  } else {
    password.className = "valid";
    passwordError.className = "";
    passwordError.textContent = "";
  }

  if (confirmPassword.value.length === 0) {
    confirmPassword.className = "invalid";
    confirmPasswordError.className = "error";
    confirmPasswordError.textContent = "This field is required";
    event.preventDefault();
  } else if (password.value !== confirmPassword.value) {
    confirmPassword.className = "invalid";
    confirmPasswordError.className = "error";
    confirmPasswordError.textContent =
      "Your password and your confirmation password do not match";
    event.preventDefault();
  } else {
    confirmPassword.className = "valid";
    confirmPasswordError.className = "";
    confirmPasswordError.textContent = "";
  }
});

//Email
const email = document.querySelector("#email");
const emailError = email.nextElementSibling;
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

email.addEventListener("input", () => {
  if (emailRegExp.test(email.value)) {
    email.className = "valid";
    emailError.className = "";
    emailError.textContent = "";
  } else if (email.value.length === 0) {
    email.className = "";
    emailError.className = "";
    emailError.textContent = "";
  } else {
    email.className = "invalid";
    emailError.className = "error";
    emailError.textContent = "Please fill in a valid E-Mail Address";
  }
});

// ZIP
const country = document.querySelector("#country");
const zip = document.querySelector("#zip");
const zipError = zip.nextElementSibling;

const constraints = {
  at: [
    "^(A-)?\\d{4}$",
    "Austrian ZIPs must have exactly 4 digits: e.g. A-1234 or 1234",
  ],
  de: [
    "^(D-)?\\d{5}$",
    "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
  ],
  ch: [
    "^(CH-)?\\d{4}$",
    "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
  ],
  fr: [
    "^(F-)?\\d{5}$",
    "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
  ],
};

zip.addEventListener("input", () => {
  checkZip();
});

country.addEventListener("input", () => {
  checkZip();
});

function checkZip() {
  const constraint = new RegExp(constraints[country.value][0], "");
  if (constraint.test(zip.value)) {
    zip.className = "valid";
    zipError.className = "";
    zipError.textContent = "";
  } else if (zip.value.length === 0) {
    zip.className = "";
    zipError.className = "";
    zipError.textContent = "";
  } else {
    zip.className = "invalid";
    zipError.className = "error";
    zipError.textContent = constraints[country.value][1];
  }
}

// Password
const password = document.querySelector("#password");
const passwordError = password.nextElementSibling;
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{12,}$/;

password.addEventListener("input", () => {
  if (passwordRegExp.test(password.value)) {
    password.className = "valid";
    passwordError.className = "";
    passwordError.textContent = "";
  } else if (password.value.length === 0) {
    password.className = "";
    passwordError.className = "";
    passwordError.textContent = "";
  } else {
    password.className = "invalid";
    passwordError.className = "error";
    passwordError.textContent =
      "Your password has to contain at least 12 characters, 1 lowercase letter, 1 uppercase letter and 1 number";
  }

  checkPasswords();
});

// Confirm Password
const confirmPassword = document.querySelector("#confirm-password");
const confirmPasswordError = confirmPassword.nextElementSibling;

confirmPassword.addEventListener("input", () => {
  checkPasswords();
});

function checkPasswords() {
  if (confirmPassword.value.length === 0) {
    confirmPassword.className = "";
    confirmPasswordError.className = "";
    confirmPasswordError.textContent = "";
  } else if (password.value === confirmPassword.value) {
    confirmPassword.className = "valid";
    confirmPasswordError.className = "";
    confirmPasswordError.textContent = "";
  } else {
    confirmPassword.className = "invalid";
    confirmPasswordError.className = "error";
    confirmPasswordError.textContent =
      "Your password and your confirmation password do not match";
  }
}
