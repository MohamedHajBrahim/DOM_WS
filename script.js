
const btnPlus=document.querySelectorAll(".plus");
const checkbox=document.querySelectorAll("input");
const likebtn=document.querySelectorAll(".like");
const deletebtn=document.querySelectorAll(".delete");

for (var i=0;i<btnPlus.length;i++){
btnPlus[i].addEventListener("click",increment);
checkbox[i].addEventListener("click",total);
likebtn[i].addEventListener("click", like);
deletebtn[i].addEventListener("click", remove);
}
function increment(event){
const btnPlus=event.target
const divElt=btnPlus.parentElement
const quantitytag=divElt.querySelector("p") 
var quantityValue=parseInt(quantitytag.innerHTML)
quantityValue++
quantitytag.innerHTML=quantityValue
//console.log(quantityValue)
const trElt = divElt.parentElement.parentElement;
const unitePriceValue = Number(trElt.querySelector(".unitPrice").innerHTML);
var priceTag = trElt.querySelector(".price");
var priceValue = Number(priceTag.innerHTML);
priceValue = unitePriceValue * quantityValue;
priceTag.innerHTML = priceValue;
}
const btnMinus=document.querySelectorAll(".minus");
//console.log(btnMinus)
for (var i=0;i<btnPlus.length;i++){
btnMinus[i].addEventListener("click",decrement);}
function decrement(event) {
//console.log(decrement)
const btnMinus=event.target
//console.log(btnMinus)
const divElt=btnMinus.parentElement
const quantitytag=divElt.querySelector("p")
var quantityValue=parseInt(quantitytag.innerHTML)
//console.log(quantityValue)
quantityValue--
    if (quantityValue < 0) {
        quantityValue = 0;
    }
quantitytag.innerHTML=quantityValue
//console.log(quantitytag)
const trElt=divElt.parentElement.parentElement
//console.log (trElement)
const unitPriceValue=Number(trElt.querySelector(".unitPrice").innerHTML)
// console.log(unitPricevalue)
var priceTag = trElt.querySelector(".price");
var priceValue = Number(priceTag.innerHTML);
priceValue = unitPriceValue * quantityValue;
priceTag.innerHTML = priceValue;
}
function total(e) {
  const checkbox = e.target 
//   console.log(e) 
const trElt=checkbox.parentElement.parentElement;
const priceValue=Number(trElt.querySelector('.price').innerHTML);
var totalTag = document.getElementById("total");
var totalValue = Number(totalTag.innerHTML)
// console.log(totalValue)
const btnPlus = checkbox.parentElement.parentElement.querySelector(".plus");
const btnMinus = checkbox.parentElement.parentElement.querySelector(".minus");
if (checkbox.checked===true) {
    totalValue+=priceValue;
    btnPlus.setAttribute("disabled", true)
    btnMinus.setAttribute("disabled", true)
}
else {
totalValue-=priceValue
btnPlus.removeAttribute("disabled")
btnMinus.removeAttribute("disabled")
}
totalTag.innerHTML=totalValue
// console.log(totalValue)
}
function remove(e) {
    const del= e.target;
    // console.log(del);
    const trElt=del.parentElement.parentElement.parentElement.parentElement
    console.log(trElt)
    trElt.remove()
  }
  function like(e) {
    const btn = e.target;
    if (btn.style.color == "red"){
        btn.style.color = "grey"
    }
    else {btn.style.color = "red"
    }
}
