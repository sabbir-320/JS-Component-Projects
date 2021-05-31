
let defaultQuantity = 1;
let defaultPrice = 40;

const quantity = document.querySelector(".quantity");
const price = document.querySelector('.price');

function plusBtn(n) {
  quantityMaintain(n);
  priceIncrease ()
}
function minusBtn(n) {
  quantityMaintain(n);
  priceDecrease()
}

function quantityMaintain(num) {
  defaultQuantity += num;
  if (defaultQuantity < 1) {
    defaultQuantity = 1;
  }
  quantity.textContent = defaultQuantity;
}

function priceIncrease (){
  defaultPrice+= 40
  price.textContent = defaultPrice
}

function priceDecrease(){
  defaultPrice-= 40
  if(defaultPrice < 40){
    defaultPrice = 40
  }
  price.textContent = defaultPrice
}
