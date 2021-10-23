

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', submitedd);


function submitedd(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.password.value === '' ||
    event.currentTarget.elements.email.value === ''
  ) {
    alert('All form fields must be filled out!');
  } else {
    const userInfo = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    };
    console.log(userInfo);
    event.currentTarget.reset();
  }
}


//const loginForm = document.querySelector('.login-form');
//console.log(loginForm)
//loginForm.addEventListener('submit', submitedd);


//function OnFormSubmit(event) {
  //  event.preventDefault();
    //const loginFormEl = event.currentTarget.elements;
    //const email = loginFormEl.email.value;
    //const password = loginFormEl.password.value;
//}