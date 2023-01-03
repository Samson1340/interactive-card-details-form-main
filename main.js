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

// form.addEventListener("submit", e => {
//     e.preventDefault();

//     verification();
// });


function verification(){
  if(cardholderName.value.trim() == ""){
    cardholderName.add("class", "error");
    cardholderName.closest("p").innerHTML = "can't be empty";
    return false;
  }
}