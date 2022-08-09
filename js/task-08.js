const loginFormEl = document.querySelector("form.login-form");

loginFormEl.addEventListener("submit", onFormSubmit);
const infoRef = {};

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  const inputEmail = email.value;
  const inputPassword = password.value;

  if (inputEmail === "" || inputPassword === "") {
    return alert("Please, fill in all the fields");
  }

  infoRef[inputEmail] = inputEmail;
  infoRef[inputPassword] = inputPassword;

  console.log(infoRef);

  event.currentTarget.reset();
}
