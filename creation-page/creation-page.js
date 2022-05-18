const creationForm = document.getElementById('creation-form');

creationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(creationForm);
    console.log({ title: data.get('post-title'), user: data.get('username'), post: data.get('post-contents') });
});