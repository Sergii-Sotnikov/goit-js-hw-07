const listElem = document.querySelector("#categories");
const itemsElem = listElem.querySelectorAll(".item");
console.log(`Number of categories: ${itemsElem.length}`);

itemsElem.forEach((item) => {
  const categoryElem = item.querySelector("h2").textContent;
  console.log(`Category: ${categoryElem}`);

  const numberElem = item.querySelectorAll("li").length;
  console.log(`Elements: ${numberElem}`);
});
