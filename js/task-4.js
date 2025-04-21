const userFormElem = document.querySelector(".login-form");

userFormElem.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const clearUserEmail = e.target.elements.email.value.trim();
  const clearUserPassword = e.target.elements.password.value.trim();
  if (clearUserEmail === "" || clearUserPassword === "") {
    alert("All form fields must be filled in");
    return;
  }

  const data = {
    userEmail: clearUserEmail,
    userPassword: clearUserPassword,
  };

  console.log(data);
  e.target.reset();
}
