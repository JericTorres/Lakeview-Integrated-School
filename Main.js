const chatbotIcon = document.getElementById("chatbot-icon");
const chatbotWindow = document.getElementById("chatbot-window");
const closeChatBtn = document.getElementById("close-chat");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatContent = document.getElementById("chat-content");

// Open the chatbot window
chatbotIcon.addEventListener("click", () => {
    chatbotWindow.style.display = "block";
});

// Close the chatbot window
closeChatBtn.addEventListener("click", () => {
    chatbotWindow.style.display = "none";
});

// Send a message
sendBtn.addEventListener("click", async () => {
    const userMessage = userInput.value;
    if (userMessage.trim() !== "") {
        // Display user message
        const userMessageDiv = document.createElement("div");
        userMessageDiv.classList.add("user-message");
        userMessageDiv.textContent = userMessage;
        chatContent.appendChild(userMessageDiv);

        // Clear input field
        userInput.value = "";

        // Send message to PHP backend (which calls OpenAI)
        const aiResponse = await getAIResponse(userMessage);

        // Display AI response
        const aiMessageDiv = document.createElement("div");
        aiMessageDiv.classList.add("ai-message");
        aiMessageDiv.textContent = aiResponse;
        chatContent.appendChild(aiMessageDiv);

        // Scroll to the bottom
        chatContent.scrollTop = chatContent.scrollHeight;
    }
});

// Function to get AI response from PHP backend
async function getAIResponse(userMessage) {
    const response = await fetch('chatbot.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: userMessage })
    });
    const data = await response.json();
    return data.output_text; // Make sure to adjust this key based on your PHP response
}
