// import functions and grab DOM elements
import { fetchPosts, checkAuth } from './fetch-utils.js';
import { renderPost } from './utils.js';

const createPostButton = document.getElementById('create-post-shortcut');


async function loadData() {
    const posts = await fetchPosts();
    console.log(posts);
    const main = document.getElementById('show-posts');

    for (let post of posts) {
        const postDiv = renderPost(post);
        main.append(postDiv);
    }
}
loadData();

const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', () => {
    location.replace('./login-screen');
});

const newUserButton = document.getElementById('new-user-button');
newUserButton.addEventListener('click', () => {
    location.replace('./login-screen');
});

 // // If New User or Not Logged In When Going to Creation Page, Move User to Login
createPostButton.addEventListener('click', () => {
    checkAuth();
});