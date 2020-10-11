function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNuber = parseInt(amountInput.value);

    amountNuber = isNaN(amountNuber) ? 0 : amountNuber;

    if (amountNuber > 10) {
        alert("Maximum 10 db terméket vásárolhat !");
        return;
    } else if (amountNuber < 1) {
        alert("Minimum egy terméket kell vásárolni !");
    } else {
        let amount = parseInt(amountInput.value) * price;
        showAmount.innerHTML = amount;

    }

};


let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction = function(ev){
    this.parentElement.style.display = "none";

};
for (let i=0; i< alertCloseButtons.length; i++) {
   alertCloseButtons[i].addEventListener("click", alertCloseEventHandlerFunction);
};


//select elem kitöltése
let toppings = [
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Libamáj",
    "Extra sonka"
];
let toppingSelect = document.querySelector("#topInput");
let index = 0;
while(index < toppings.length) {
    let option = document.createElement("option");
    option.value = toppings[index];
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
};

    let time = new Date();
    time.setUTCDate(15);
   
  
  
  //let time = getTime();
  document.getElementById("timeFor").innerHTML = time;
  console.log(time);
  

  

