document.getElementById("callbackBtn").addEventListener("click", function() {
    function delayedCallback(callback) {
        setTimeout(() => {
            callback("Callback executed after 5 seconds");
        }, 5000);
    }
    delayedCallback(message => {
        document.getElementById("callbackDiv").innerText = message;
    });
});
