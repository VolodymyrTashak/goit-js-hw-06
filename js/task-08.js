const loginFormEl = document.querySelector("form.login-form");

loginFormEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert;
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);

  event.currentTarget.reset();
}
