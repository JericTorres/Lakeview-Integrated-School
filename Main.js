// Change header background color on scroll
window.onscroll = function() { changeHeaderBackground() };

// Get the header
var header = document.querySelector("nav.navbar");

// Function to change the header background
function changeHeaderBackground() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

// Detect scroll event and change header background color
$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('header').addClass('scrolled');
      } else {
        $('header').removeClass('scrolled');
      }
    });
  });

  // Chatbot functionality
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
  sendBtn.addEventListener("click", () => {
    const userMessage = userInput.value;
    if (userMessage.trim() !== "") {
      // Display user message
      const userMessageDiv = document.createElement("div");
      userMessageDiv.classList.add("user-message");
      userMessageDiv.textContent = userMessage;
      chatContent.appendChild(userMessageDiv);

      // Clear input field
      userInput.value = "";

      // Simulate AI response
      setTimeout(() => {
        const aiMessageDiv = document.createElement("div");
        aiMessageDiv.classList.add("ai-message");
        aiMessageDiv.textContent = "AI response to: " + userMessage;
        chatContent.appendChild(aiMessageDiv);

        // Scroll to the bottom
        chatContent.scrollTop = chatContent.scrollHeight;
      }, 1000);
    }
  });

  
