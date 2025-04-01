document.getElementById("asyncBtn").addEventListener("click", async function() {
    async function fetchDataAsync() {
        try {
            document.getElementById("asyncDiv").innerText = "Loading...";
            let response = await fetch("https://dummyjson.com/posts");
            if (!response.ok) throw new Error("Failed to fetch data");
            let data = await response.json();
            document.getElementById("asyncDiv").innerText = data.posts.map(post => post.title).join("\n");
        } catch (error) {
            document.getElementById("asyncDiv").innerText = "Error: " + error.message;
        }
    }
    fetchDataAsync();
});
