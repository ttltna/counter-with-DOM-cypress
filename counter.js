let num = document.querySelector(".number");
let plus = document.querySelector(".increase");
let minus = document.querySelector(".decrease");
console.log(num.innerText);
console.log(plus.innerText);
console.log(minus.innerText);

plus.addEventListener("click", () => {console.log("plus!!"); num.innerText = parseInt(num.innerText) + 1; }, false);
minus.addEventListener("click", () => {console.log("minus!!"); num.innerText-=1; }, false);