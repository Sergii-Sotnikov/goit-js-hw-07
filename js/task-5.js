const btnElem = document.querySelector(".change-color");
const colorElem = document.querySelector(".color");
const colorBodyElem = document.querySelector("body");

btnElem.addEventListener("click", (e) => {
  colorElem.textContent = getRandomHexColor();
  colorBodyElem.style.backgroundColor = `${getRandomHexColor()}`;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(colorBodyElem);
