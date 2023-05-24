const submit = document.getElementById('submit');
const info = document.getElementById('form-info');
const main = document.getElementById('main');
let fullName = document.getElementById('fname').value;
let email = document.getElementById('email').value;
let message = document.getElementById('msg').value;

info.addEventListener('keyup', (e) => {
    fullName = document.getElementById('fname').value;
    email = document.getElementById('email').value;
    message = document.getElementById('msg').value;
    console.log(email);
});
main.addEventListener('click', (e) => {
    fullName = document.getElementById('fname').value;
    email = document.getElementById('email').value;
    message = document.getElementById('msg').value;
    console.log(email);
});


let emailCheck = email.includes('@');

submit.addEventListener('click', (e) => {
    if (fullName != '' && emailCheck === true && message != '') {
        window.alert('Your message has been sent');
    } else if (fullName === '' || email === '' || message === '') {
        window.alert('Please fill out all required fields');
    } else if (emailCheck === false) {
        window.alert('Please provide a real email address');
    };
});