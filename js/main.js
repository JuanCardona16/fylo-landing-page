import User from "./components/User.js";

const form = document.getElementById('form'); 
const getEmail = document.getElementById('getEmail');
const messages = document.querySelector('.messages') 
let id = 1;
let listEmail = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let email = getEmail.value;
  
  if (!email.includes('@') || !email.includes('.com') || !email.endsWith('.com')) {
    messages.innerHTML = 'The email is invalid';
    messages.style.display = 'inline-block';
    messages.style.color = 'red';
  } else if (email.includes('@') && email.includes('.com') && email.endsWith('.com')){
    const user = new User(id++, email);
    listEmail.push(user);
    messages.style.display = 'none';
  }

  form.reset();
});

