

//const loginForm = document.querySelector('.login-form');
//console.log(loginForm);
form.addEventListener('submit', OnFormSubmit);

function OnFormSubmit(event) {
   event.preventDefault();
    const loginFormEl = event.currentTarget.elements;
const email = loginFormEl.email.value;
const password = loginFormEl.password.value;
}

