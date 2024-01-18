var postAPI = 'https://jsonplaceholder.typicode.com/posts'

fetch(postAPI)
    .then(function (response) {
        return response.json();
        // JSON.parse: JSON -> Javascript
    })
    .then(function (posts) {
        var html = posts.map(function (post) {
            return `<li>
            <h2>${post.title}</h2>
            <p>${post.title}</p>
            </li>`
        })
        html = html.join('');
        document.getElementById('post-block').innerHTML = html;
    })