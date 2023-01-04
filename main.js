const formShow = document.querySelector("#data-input");
const dataInputOk = document.querySelector("#data-input-ok");
const cardNo= document.querySelector("#card-no");
const cardName = document.querySelector("#card-name");
const cardExp = document.querySelector("#card-exp");
const cvcNo = document.querySelector("#cvc-no");
const cardholderName = document.querySelector(".cardholder-name");
const cardNumber = document.querySelector(".card-number");
const month = document.querySelector("#card-exp-date");
const year = document.querySelector("#card-exp-date1");
const cvc = document.querySelector("#cvc");
const submitBtn = document.querySelector("#submit-btn");
const continueBtn = document.querySelector("#continue-btn");
const form = document.querySelector("#user-data-form");


cardNumber.addEventListener("input", function(){ 
    cardNo.innerHTML = cardNumber.value.toUpperCase();
});

cardholderName.addEventListener("input", function(){
    cardName.innerHTML = cardholderName.value.toUpperCase();
});
month.addEventListener("input", function(){
    cardExp.innerHTML = month.value;
});

cvc.addEventListener("input", function(){
    cvcNo.innerHTML = cvc.value;
});

// ############################

const isRequired = (value) => value === '' ? false : true;
const isBetween = (length, max, min) => length < min || length > max ? false : true;

const isNumber = (value) => isNaN(value) ? false : true;

const showError = (input, message) => {

  const formField = input.parentElement;

  formField.classList.remove('success');
  formField.classList.add('error');

  const error = formField.querySelector('p');
  error.textContent = message;

}

const showSuccess = (input) =>{

  const formField = input.parentElement;
  formField.classList.remove('error');
  formField.classList.add('success');

  const error = formField.querySelector('p');
  error.textContent = '';

}

const checkCardHolder = () => {

  let valid = false;

  const cardHolder = cardholderName.value.trim();
  if(!isRequired(cardHolder)){
    showError(cardholderName, "Can't be empty");
  }
  else{
    showSuccess(cardholderName);
    valid = true;
  }
  return valid;
}

const checkCardNumber = () => {
  let valid = false;

  const cardNumber1 = cardNumber.value.trim();
  if(!isRequired(cardNumber1)){
    showError(cardNumber, "Can't be empty");
  }
  else if(!isNumber(cardNumber1)){
    showError(cardNumber, "It must be number");
  }
  else{
    showSuccess(cardNumber);
    valid = true;
  }
  return valid;
}

const checkMonth = () => {
  let valid = false;

  const expMonth = month.value.trim();
  if(!isRequired(expMonth)){
    showError(month, "Can't be empty");
  }
  else if(!isNumber(expMonth)){
    showError(month, "It must be number");
  }
  else{
    showSuccess(month);
    valid = true;
  }
  return valid;
}

const checkYear = () => {
  let valid = false;

  const expYear = year.value.trim();
  if(!isRequired(expYear)){
    showError(year, "Can't be empty");
  }
  else if(!isNumber(expYear)){
    showError(year, "It must be number");
  }
  else{
    showSuccess(year);
    valid = true;
  }
  return valid;
}

const checkCvc = () => {
  let valid = false;

  const cvcNum = cvc.value.trim();
  if(!isRequired(cvcNum)){
    showError(cvc, "Can't be empty");
  }
  else if(!isNumber(cvcNum)){
    showError(cvc, "It must be number");
  }
  else{
    showSuccess(cvc);
    valid = true;
  }
  return valid;
}
form.addEventListener('submit', function(e) {
  e.preventDefault();

  let isCardHolderValid = checkCardHolder(),
      isCardNumberValid = checkCardNumber(),
      isMonthValid = checkMonth(),
      isYearValid = checkYear(),
      isCvcValid = checkCvc();

      let isFormValid = isCardHolderValid && isCardNumberValid && isMonthValid && isYearValid && isCvcValid;

      if (isFormValid){

        form.parentElement.style.display = "none";
        dataInputOk.style.display = "block";
}
});

continueBtn.addEventListener("click", function(e) {
  e.preventDefault();

  form.parentElement.style.display = "block";
  dataInputOk.style.display = "none";
  form.reload();

});
