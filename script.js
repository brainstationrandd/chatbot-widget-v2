document.addEventListener("DOMContentLoaded", function () {
  const introductoryMessage = document.createElement("li");
  introductoryMessage.classList.add("chat", "incoming");
  introductoryMessage.innerHTML = `
      <div class="message" style>
        <img src="./nikles-image.png" style="width: 60%; display: block; margin: 40px auto " alt="logo">
        <h3 class="chat__title" style="color: #302F2E; display: block; margin: 5px auto 0;  text-align: center;">Welcome to Nikles Chat Bot</h3>
        <p class="chat__title" style="background-color: #fff; color: #585979; display: block; margin: 20px auto 5px;  text-align: center; padding: 6px 10px;">Please ask anything about the company and products.</p>
      </div>
    `;
  const chatbox = document.querySelector(".chatbox");
  chatbox.appendChild(introductoryMessage);
});

const chatInput = document.querySelector(".chat-input input");
const sendChatBtn = document.getElementById("send-btn");
const chatbox = document.querySelector(".chatbox");
const chatbotToggle = document.querySelector(".chatbot-toggler");

let userMessage;
const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  if (className === "outgoing") {
    chatLi.innerHTML = `<p>${message}</p>`;
  } else {
    chatLi.innerHTML = `
      <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 8C15.1046 8 16 8.89543 16 10V14C16 15.1046 15.1046 16 14 16H10C8.89543 16 8 15.1046 8 14V10C8 8.89543 8.89543 8 10 8H14ZM13 10C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11C10 10.4477 10.4477 10 11 10H13Z" fill="#0F0F0F"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2V4H15V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V4C18.6569 4 20 5.34315 20 7H22C22.5523 7 23 7.44771 23 8C23 8.55229 22.5523 9 22 9H20V11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H20V15H22C22.5523 15 23 15.4477 23 16C23 16.5523 22.5523 17 22 17H20C20 18.6569 18.6569 20 17 20V22C17 22.5523 16.5523 23 16 23C15.4477 23 15 22.5523 15 22V20H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20H9V22C9 22.5523 8.55229 23 8 23C7.44771 23 7 22.5523 7 22V20C5.34315 20 4 18.6569 4 17H2C1.44772 17 1 16.5523 1 16C1 15.4477 1.44772 15 2 15H4V13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H4V9H2C1.44772 9 1 8.55229 1 8C1 7.44771 1.44772 7 2 7H4C4 5.34315 5.34315 4 7 4V2C7 1.44772 7.44771 1 8 1C8.55229 1 9 1.44772 9 2V4H11V2ZM17 6C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18H7C6.44771 18 6 17.5523 6 17V7C6 6.44771 6.44772 6 7 6H17Z" fill="#5F5A5A"/>
      </svg><p><span>Generating...</span></p>`;
  }
  return chatLi;
};

const generateResponse = async (callback) => {
  const API_URL = "https://nikles-ml-service.sense-23.com/chatfromlocalpdf";
  const requestBody = {
    question: userMessage,
    num_results: 1,
  };
  console.log(userMessage);
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(requestBody),
  };
  const response = await fetch(API_URL, requestOptions);
  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  let chatLi = createChatLi("", "incoming"); // Create an empty incoming chat li

  let chatMessage = ``;
  while (true) {
    const { value, done } = await reader.read();

    if (done) {
      break;
    }
    let decodedChunk = decoder.decode(value, { stream: true });
    let chunkData = decodedChunk
      .trim()
      .replace(/data: /g, "")
      .replace(/"/g, "")
      .replace(/^"/, "")
      .replace(/"$/, "")
      .replace(/\\u/g, "");
    // .replace(/\\n\\n/g, " ");
    // .replace(/\\n/g, "\n")
    // .replace("/n", " ");
    chatMessage += chunkData;

    // const test = document.getElementById("siam");
    // test.innerHTML = chatMessage;

    callback(chatMessage);
  }
};

const handleChat = async (event) => {
  event.preventDefault();
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  const introductoryMessage = document.querySelector(".chat.incoming");
  if (introductoryMessage) {
    introductoryMessage.style.display = "none";
  }

  chatbox.appendChild(createChatLi(userMessage, "outgoing"));

  chatInput.value = "";

  let chatLi = createChatLi("", "incoming"); // Create an empty incoming chat li
  chatLi.cloneNode(true);
  chatbox.appendChild(chatLi);
  chatbox.scrollTo(0, chatbox.scrollHeight);

  // Call generateResponse and pass a callback function to handle the received data
  generateResponse((chunk) => {
    // chatLi.innerHTML = chunk;
    // console.log(chunk.replace(/\n/g, " "));
    chatLi.querySelector("p").innerText = chunk
      .replace(/\n/g, "")
      .replace(/\n\n/g, "");
    chatbox.scrollTo(0, chatbox.scrollHeight);
  });

  return false;
};

sendChatBtn.addEventListener("click", handleChat);
// Event listener for Enter key press in the chat input field
chatInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    var clickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    sendChatBtn.dispatchEvent(clickEvent);
  }
});

chatbotToggle.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
