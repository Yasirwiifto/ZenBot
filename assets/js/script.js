
// variables for key HTML elements
const promptInput = document.getElementById("userInput");
const generateBtn = document.getElementById("submitBtn");
const resultText = document.getElementById("promptOutput");
const spinner = document.getElementById("spinner");

const generate = async () => {

    // if the user doesn't enter a prompt (e.g empty), alert them and return
    if (!promptInput.value) {
        alert("Please enter a valid prompt.");
        return;
    }

    const cleanedInput = promptInput.value;

    // Prompt loading dynamic changes
    resultText.innerText = "Generating...";
    resultText.classList.add("font-weight-bold");
    spinner.classList.remove("d-none");
    generateBtn.disabled = true;

    try {
        // Sends the user's prompt to the serverless function in api/generate.js
        const response = await fetch('/api/generate', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: cleanedInput }),
        });

        const text = await response.text();
        // post-prompt-load dynamic changes
        resultText.innerText = "";
        resultText.classList.remove("font-weight-bold");
        resultText.innerHTML = text.replace(/\n/g, "<br>");
        promptInput.value = '';
        spinner.classList.add("d-none");
        generateBtn.disabled = false;

    } catch (error) {
        console.error("Error:", error);
        resultText.innerText = "Error occurred while generating.";
        promptInput.value = '';
    }
};

// if the user presses enter, generate the prompt
promptInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        generate();
    }
});
// if the user clicks the submit button, generate the prompt
generateBtn.addEventListener("click", generate);
