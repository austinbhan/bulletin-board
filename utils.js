export function renderPost(post) {
    const div = document.createElement('div');
    div.setAttribute('class', 'post-container');

    const h4 = document.createElement('h4');
    h4.textContent = `${post.title}`;
    h4.setAttribute('class', 'post-title');

    const h5 = document.createElement('h5');
    h5.textContent = `${post.user}`;
    h5.setAttribute('class', 'user-name');

    const p = document.createElement('p');
    p.textContent = `${post.post}`;
    p.setAttribute('class', 'post-text');

    div.append(h4, h5, p);
    return div;
}