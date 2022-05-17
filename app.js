// import functions and grab DOM elements
import { fetchPosts } from './fetch-utils.js';

async function loadData() {
    const posts = await fetchPosts();
    console.log(posts);
    const main = document.getElementById('show-posts');

// Need to Create For Loop
}

loadData();
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
