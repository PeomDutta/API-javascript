function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data));
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json));
}


function displayUser(data) {
    const ul = document.getElementById('users');
    for (const users of data) {
        console.log(users.name);
        const li = document.createElement('li');
        li.innerText = `name: ${users.name}
        email: ${users.email}
        
        `
        ul.appendChild(li);
    }


}