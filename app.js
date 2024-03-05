const form = document.querySelector(".info-form");
const btn = document.querySelector(".btn");
const username = document.querySelector("#username");
const cardNumber = document.querySelector("#number");
const monthDate = document.querySelector("#exp-date1");
const yearDate = document.getElementById("exp-date2");
const cvc = document.querySelector("#cvc");
const errorMsg = document.querySelector("small");
const modal = document.querySelector(".modal");
const contBtn = document.querySelector(".continue-btn");
const numbers = document.querySelector(".numbers");
const usName = document.querySelector(".usname");
const cardDate = document.querySelector(".card-date");
const cvcNo = document.querySelector(".cvc-number");
const expireMonth = document.getElementById("exp-month");
const expireYear = document.getElementById("exp-year");

const isRequired = (value) => (value === "" ? false : true);

const showError = (input, message) => {
  const field = input.parentElement;
  field.classList.add("error");
  field.classList.remove("success");
  const error = field.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const field = input.parentElement;
  field.classList.add("success");
  field.classList.remove("error");
  const error = field.querySelector("small");
  error.textContent = "";
};

const checkUsername = () => {
  let userId = username.value.trim();
  if (!isRequired(userId)) {
    showError(username, "Can't be blank");
  } else {
    showSuccess(username);
    usName.textContent = userId;
  }
};

const checkCardNumber = () => {
  let cardNum = cardNumber.value.trim();
  if (!isRequired(cardNum)) {
    showError(cardNumber, "Can't be blank");
  } else {
    showSuccess(cardNumber);
    numbers.textContent = cardNum;
  }
};

const checkDate = () => {
  if (!isRequired(monthDate.value) && !isRequired(yearDate.value)) {
    showError(monthDate, "Can't be blank");
    showError(yearDate, "Can't be blank");
  } else {
    showSuccess(monthDate);
    showSuccess(yearDate);
    expireMonth.textContent = monthDate.value;
    expireYear.textContent = yearDate.value;
  }
};

const checkCVC = () => {
  if (!isRequired(cvc.value)) {
    showError(cvc, "Can't be blank");
  } else {
    showSuccess(cvc);
    cvcNo.textContent = cvc.value;
  }
};

const openModal = () => {
  form.classList.add("hidden");
  modal.classList.remove("hidden");
};

const closeModal = () => {
  form.classList.remove("hidden");
  modal.classList.add("hidden");
};

window.addEventListener("load", (e) => {
  form.classList.remove("hidden");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isUsernameValid = checkUsername(),
    iscardNumValid = checkCardNumber(),
    isDateValid = checkDate(),
    isCvcValid = checkCVC();
});

contBtn.addEventListener("click", closeModal);
