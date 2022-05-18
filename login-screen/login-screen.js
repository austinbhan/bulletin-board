import { signUpUser } from '../fetch-utils.js';

const signUpForm = document.getElementById('sign-up-form');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    console.log({ email: data.get('new-email'), password: data.get('new-password') });

    const user = await signUpUser(data.get('new-email'), data.get('new-password')); 
    if (user) {
        location.replace('../creation-page'); // Placeholder, Functioning Sign Up Button
    }
});