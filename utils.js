export function renderPost(post) {
    const div = document.createElement('div');
    div.setAttribute('class', 'post-container');

    const h4 = document.createElement('h4');
    h4.textContent = `${post.title}`;

    const h5 = document.createElement('h5');
    h5.textContent = `${post.user}`;

    const p = document.createElement('p');
    p.textContent = `${post.post}`;

    div.append(h4, h5, p);
    return div;
}