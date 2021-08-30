function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data));
}

loadPosts();

function displayPosts(post) {
    console.log(post);
    const section = document.getElementById('section');
    for (const data of post) {
        const div = document.createElement('div');
        div.classList.add('design');
        div.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.body}</p>
        `
        section.appendChild(div);
    }
}