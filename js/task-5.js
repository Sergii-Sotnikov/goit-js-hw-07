const btnElem = document.querySelector(".change-color");
const colorElem = document.querySelector(".color");
const colorBodyElem = document.querySelector("body");

btnElem.addEventListener("click", (e) => {
  const color = getRandomHexColor();
  colorElem.textContent = color;
  colorBodyElem.style.backgroundColor = `${color}`;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(colorBodyElem);
