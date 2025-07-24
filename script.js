function submitPrompt() {
    const prompt = document.getElementById("prompt").value.trim();
    const responseDiv = document.getElementById("response");
    const loader = document.getElementById("loader");

    if (!prompt) {
        responseDiv.innerText = "Please enter a question.";
        return;
    }

    // Clear previous results and show loader
    responseDiv.innerText = "";
    loader.style.display = "block";

    const url = "http://localhost:11434/api/generate";

    const payload = {
        model: "llama3.2:1b",
        prompt: prompt,
        stream: false
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
        .then(response => response.json())
        .then(data => {
            loader.style.display = "none";
            const answer = data.response || "No answer received.";
            responseDiv.innerText = answer;
        })
        .catch(error => {
            loader.style.display = "none";
            responseDiv.innerText = "Error: " + error.message;
        });
}
