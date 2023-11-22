
// variables for key HTML elements
const promptInput = document.getElementById("userInput");
const generateBtn = document.getElementById("submitBtn");
const resultText = document.getElementById("promptOutput");

const generate = async () => {
    try {
        // Sends the user's prompt to the serverless function in api/generate.js
        const response = await fetch('/api/generate', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: promptInput.value }),
        });

        const text = await response.text();
        resultText.innerText = text;
    } catch (error) {
        console.error("Error:", error);
        resultText.innerText = "Error occurred while generating.";
    }
};

// if the user presses enter, generate the prompt
promptInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        generate();
    }
});
// if the user clicks the submit button, generate the prompt
generateBtn.addEventListener("click", generate);
