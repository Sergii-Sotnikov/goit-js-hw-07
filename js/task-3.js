const formElem = document.querySelector("#name-input");
console.log(formElem);

const textElem = document.querySelector("#name-output");
console.log(textElem);

formElem.addEventListener("input", () => {
  const userValue = formElem.value.trim();
  console.log(userValue);
  if (userValue !== "") {
    return (textElem.textContent = `${userValue}`);
  } else return (textElem.textContent = `Anonymous`);
});
