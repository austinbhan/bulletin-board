import { createNewPost } from '../fetch-utils.js';

const creationForm = document.getElementById('creation-form');
const backButton = document.getElementById('back-button');

backButton.addEventListener('click', () => {
    location.replace('/');
});

creationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(creationForm);
    const newPost = (
        { title: data.get('post-title'), 
            user: data.get('username'), 
            post: data.get('post-contents') 
        });
    const seeMe = await createNewPost(newPost);
    console.log(seeMe);
});