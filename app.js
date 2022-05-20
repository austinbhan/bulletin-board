// import functions and grab DOM elements
import { fetchPosts, logOut } from './fetch-utils.js';
import { renderPost } from './utils.js';

const logOutButton = document.getElementById('logout-button'); // LogOut Functionality
logOutButton.addEventListener('click', () => {
    logOut();
});

async function loadData() { // Load Array Data
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