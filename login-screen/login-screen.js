import { signUpUser } from '../fetch-utils.js';
import { signInUser } from '../fetch-utils.js';

const signUpForm = document.getElementById('sign-up-form');
const signInForm = document.getElementById('sign-in-form');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    console.log({ email: data.get('new-email'), password: data.get('new-password') });

    const user = await signUpUser(data.get('new-email'), data.get('new-password')); 
    if (user) {
        location.replace('../creation-page'); 
    }
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    console.log({ email: data.get('existing-email'), password: data.get('existing-password') });

    const user = await signInUser({ email: data.get('existing-email'), password: data.get('existing-password') });
    if (user) {
        location.replace('../creation-page');
    } else if (!user) {
        alert('Username does not exist');
    }
});