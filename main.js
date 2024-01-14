const counter = document.querySelector(".counter");
const add = document.querySelector(".add");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");

let count = 0;

add.onclick = function () {
  count++;
  counter.textContent = count;
};

decrease.onclick = function () {
  if (count > 0) {
    count--;
    counter.textContent = count;
  }
};

reset.onclick = function () {
  count = 0;
  counter.textContent = count;
};
