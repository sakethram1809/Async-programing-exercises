document.getElementById("promiseBtn").addEventListener("click", function() {
    function fetchDataWithPromise() {
        return new Promise((resolve, reject) => {
            document.getElementById("promiseDiv").innerText = "Loading...";
            setTimeout(() => {
                fetch("https://dummyjson.com/posts")
                    .then(response => response.json())
                    .then(data => resolve(data.posts.map(post => post.title).join("\n")))
                    .catch(err => reject("Error fetching data"));
            }, 500);
        });
    }

    fetchDataWithPromise()
        .then(data => document.getElementById("promiseDiv").innerText = data)
        .catch(error => document.getElementById("promiseDiv").innerText = error);
});
