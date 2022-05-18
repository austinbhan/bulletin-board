`import { signUpUser } from '../fetch-utils.js';`

const signUpForm = document.getElementById('sign-up-form');

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    console.log({ email: data.get('email'), password: data.get('password') }); //Entries Showing Null?
});