// import functions and grab DOM elements
import { fetchPosts } from './fetch-utils.js';
import { renderPost } from './utils.js';




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
