document.body.innerHTML += ` <button class="chatbot-toggler">
<svg
style="padding: 4px;"
  width="40px"
  height="40px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 12H8.01M12 12H12.01M16 12H16.01M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z"
    stroke="#fff"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
<svg
  width="30px"
  height="30px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
    fill="#fff"
  />
</svg>
</button>
<div class="chatbot">
<header>
  <h2>NIKLES Chat Bot</h2>
</header>
<ul class="chatbox"></ul>
<div class="chat-input">

  <form class="chat-input" action="">
    <input placeholder="Enter a message..."></input>
    <svg
      id="send-btn"
      class="material-symbols-rounded"
      xmlns="http://www.w3.org/2000/svg"
      width="60px"
      height="60px"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#585979"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#CCCCCC"
        stroke-width="0.24000000000000005"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
          stroke="#724ae8"
          stroke-width="1.296"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>
  </form>
</div>
</div>`;

const style = document.createElement("style");
style.innerHTML = `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  word-wrap: break-word;
  font: inherit;
}
.chatbot-toggler {
  position: fixed;
  bottom: 30px;
  right: 35px;
  outline: none;
  border: none;
  height: 50px;
  width: 50px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #585979;
  transition: all 0.2s ease;
}
.show-chatbot .chatbot-toggler {
  transform: rotate(90deg);
}
.chatbot-toggler svg {
  position: absolute;
}
.show-chatbot .chatbot-toggler svg:first-child,
.chatbot-toggler svg:last-child {
  opacity: 0;
}
.show-chatbot .chatbot-toggler svg:last-child {
  opacity: 1;
}
.chatbot {
  position: fixed;
  right: 35px;
  bottom: 90px;
  width: 380px;
  transform: scale(0.5);
  opacity: 0;
  pointer-events: none;
  overflow: hidden;
  background: #fff;
  border-radius: 15px;
  transform-origin: bottom right;
  box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
    0 32px 64px -48px rgba(0, 0, 0, 0.5);
  transition: all 0.1s ease;
}
.show-chatbot .chatbot {
  transform: scale(1);
  opacity: 1;
  pointer-events: auto;
}
.chatbot header {
  background: #585979;
  padding: 16px 0;
  text-align: center;
}
.chatbot header h2 {
  color: #fff;
  font-size: 1.4rem;
}
.chatbot .chatbox {
  height: 500px;
  overflow-y: auto;
  padding: 30px 20px 100px;
  border-radius: 15px 15px 0 0;
  /* margin-top: -15px; */
}
.chatbot .chat {
  display: flex;
}
.chatbot .incoming svg {
  height: 32px;
  width: 32px;
  color: #fff;
  align-self: flex-end;
  text-align: center;
  line-height: 32px;
  border-radius: 4px;
  margin: 0 10px 7px 0;
}
.chatbot .outgoing {
  margin: 20px 0;
  justify-content: flex-end;
}
.chatbot .chat p {
  color: #fff;
  max-width: 75%;
  white-space: pre-wrap;
  font-size: 0.95rem;
  padding: 12px 16px;
  border-radius: 10px 10px 0 10px;
  background: #ff7474;
}
.chatbot .incoming p {
  color: #000;
  background: #e5dede;
  border-radius: 10px 10px 10px 0;
}
.chatbot .chat-input {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  gap: 5px;
  background: #fff;
  /* padding: 5px 20px; */
  border-top: 1px solid #ccc;
}

.chat-input input {
  height: 55px;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  max-height: 180px;
  padding: 15px;
  font-size: 0.95rem;
  color: #000;
  background: #fff;
}
.chat-input svg {
  align-self: flex-end;
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1.35rem;
}

@media (max-width: 490px) {
  .chatbot {
    right: 0;
    bottom: 0;
    height: 100%;
    border-radius: 0;
    width: 100%;
  }
  .chatbot .chatbox {
    height: 90%;
  }
}

.loading__message {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 1.25rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  overflow-wrap: break-word;
  background: transparent;
  max-width: 80%;
}

.chat__title_p {
  max-width: 95%;
  margin-top: 10px;
}

#card {
  /* padding: 0 24px; */
  color: #dfcaca;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
#card_body {
  background: #eeeded;
  border-radius: 10px;
  height: auto;
  width: 250px;
  overflow: hidden;
}
#card_img {
  min-height: 120px;
  height: 135px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #b8b4b4;
  margin: 10px 10px 0px 10px;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
}
#product_img {
  max-width: auto;
  max-height: 100%;
}
#card_text {
  color: black;
  margin: 0px 10px 10px 10px;
  background: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  overflow: hidden;
  height: auto;
  border-radius: 0px 0px 10px 10px;
}
  a{
    color: #724ae8;
    text-decoration: none;
  }
  a:hover{
    color: #724ae8;
    text-decoration: underline;
  }
`;
document.head.appendChild(style);

let session_id = null;
// document.addEventListener("DOMContentLoaded", function () {
//   const introductoryMessage = document.createElement("li");
//   introductoryMessage.classList.add("chat", "incoming");
//   introductoryMessage.innerHTML = `
//       <div class="message" style>
//         <img src="./nikles-image.png" style="width: 60%; display: block; margin: 40px auto " alt="logo">
//         <h3 class="chat__title" style="color: #302F2E; display: block; margin: 5px auto 0;  text-align: center;">Welcome to Nikles Chat Bot</h3>
//         <p class="chat__title" style="background-color: #fff; color: #585979; display: block; margin: 20px auto 5px;  text-align: center; padding: 6px 10px;">Please ask anything about the company and products.</p>
//       </div>
//     `;
//   const chatbox = document.querySelector(".chatbox");
//   chatbox.appendChild(introductoryMessage);
// });

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
    if (session_id == null) {
      session_id = crypto.randomUUID();
    }
  } else {
    chatLi.innerHTML = `
      <div style="
      display: flex;
      
  ">  <svg  width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 8C15.1046 8 16 8.89543 16 10V14C16 15.1046 15.1046 16 14 16H10C8.89543 16 8 15.1046 8 14V10C8 8.89543 8.89543 8 10 8H14ZM13 10C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11C10 10.4477 10.4477 10 11 10H13Z" fill="#0F0F0F"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2V4H15V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V4C18.6569 4 20 5.34315 20 7H22C22.5523 7 23 7.44771 23 8C23 8.55229 22.5523 9 22 9H20V11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H20V15H22C22.5523 15 23 15.4477 23 16C23 16.5523 22.5523 17 22 17H20C20 18.6569 18.6569 20 17 20V22C17 22.5523 16.5523 23 16 23C15.4477 23 15 22.5523 15 22V20H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20H9V22C9 22.5523 8.55229 23 8 23C7.44771 23 7 22.5523 7 22V20C5.34315 20 4 18.6569 4 17H2C1.44772 17 1 16.5523 1 16C1 15.4477 1.44772 15 2 15H4V13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H4V9H2C1.44772 9 1 8.55229 1 8C1 7.44771 1.44772 7 2 7H4C4 5.34315 5.34315 4 7 4V2C7 1.44772 7.44771 1 8 1C8.55229 1 9 1.44772 9 2V4H11V2ZM17 6C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18H7C6.44771 18 6 17.5523 6 17V7C6 6.44771 6.44772 6 7 6H17Z" fill="#5F5A5A"/>
</svg><p ><span>Generating..</span></p></div>`;
    chatLi.classList.add("generating_message");
  }
  return chatLi;
};

const generateResponse = async (callback) => {
  const API_URL = "https://nikles-ml-service.sense-23.com/chat";
  const requestBody = {
    question: userMessage,
    session_id: session_id,
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(requestBody),
  };
  const response = await fetch(API_URL, requestOptions);
  const contentType = response.headers.get("Content-Type");
  if (contentType && contentType.includes("application/json")) {
    const responseData = await response.json();
    callback(responseData);
  } else {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
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
      chatMessage += chunkData;
      callback(chatMessage);
    }
  }
};

const handleJsonResponse = (jsonData) => {
  // const { image_url, name, code, description, url } = jsonData[0];
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");
  // console.log(jsonData);

  cardContainer.innerHTML = `
  <div style="display: flex;">
  <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 8C15.1046 8 16 8.89543 16 10V14C16 15.1046 15.1046 16 14 16H10C8.89543 16 8 15.1046 8 14V10C8 8.89543 8.89543 8 10 8H14ZM13 10C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11C10 10.4477 10.4477 10 11 10H13Z" fill="#0F0F0F"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2V4H15V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V4C18.6569 4 20 5.34315 20 7H22C22.5523 7 23 7.44771 23 8C23 8.55229 22.5523 9 22 9H20V11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H20V15H22C22.5523 15 23 15.4477 23 16C23 16.5523 22.5523 17 22 17H20C20 18.6569 18.6569 20 17 20V22C17 22.5523 16.5523 23 16 23C15.4477 23 15 22.5523 15 22V20H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20H9V22C9 22.5523 8.55229 23 8 23C7.44771 23 7 22.5523 7 22V20C5.34315 20 4 18.6569 4 17H2C1.44772 17 1 16.5523 1 16C1 15.4477 1.44772 15 2 15H4V13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H4V9H2C1.44772 9 1 8.55229 1 8C1 7.44771 1.44772 7 2 7H4C4 5.34315 5.34315 4 7 4V2C7 1.44772 7.44771 1 8 1C8.55229 1 9 1.44772 9 2V4H11V2ZM17 6C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18H7C6.44771 18 6 17.5523 6 17V7C6 6.44771 6.44772 6 7 6H17Z" fill="#5F5A5A"/>
</svg>
    <div>
    ${jsonData?.map((data) => {
      return `<div id="card">
      <div id="card_body">
        <div id="card_img">
          <img id="product_img" src="${data.image_url}" alt="image" />
        </div>
        <div id="card_text">
          <div>
            <b><a href="${data.url}">${data.name}</a></b><br>
            ${data.code}
          </div>
          <div style="margin-top: 10px">
            ${data.description}
          </div>
        </div>
      </div>
    </div>`;
    })}
    
  `;
  // chatLi.querySelector("p").innerText = "";
  // const chatLi = createChatLi("", "incoming");
  // chatLi.appendChild(cardContainer);
  // chatbox.appendChild(chatLi);

  // document.querySelector(".generating_message").style.display = "none";

  var lastElement = document.querySelector(".generating_message:last-child");
  lastElement.style.display = "none";

  // Removing the last element with class 'generating_message' from the DOM
  lastElement.parentNode.removeChild(lastElement);

  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", "incoming");
  chatLi.appendChild(cardContainer);
  if (session_id == null) {
    session_id = crypto.randomUUID();
  }
  chatbox.appendChild(chatLi);
  chatbox.scrollTo(0, chatbox.scrollHeight);
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

  function isStringArray(str) {
    return /^\[.*\]$/.test(str);
  }

  const replaceURLsWithLinks = (text) => {
    // Regular expression to match URLs and email addresses
    const urlAndEmailRegex =
      /(?:https?|ftp):\/\/[\n\S]+|\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return text.replace(urlAndEmailRegex, (match) => {
      // Check if the match is an email address
      if (match.includes("@")) {
        // If it's an email, format with mailto:
        return `<a href="mailto:${match}">${match}</a>`;
      } else {
        // If it's a URL, format as usual
        return `<a href="${match}" target="_blank">${match}</a>`;
      }
    });
  };

  generateResponse((responseData) => {
    if (isStringArray(responseData)) {
      responseData = JSON.parse(responseData);
      handleJsonResponse(responseData);
    } else {
      responseData = responseData.replace(/\\n/g, "<br>");
      chatLi.querySelector("p").style.maxWidth = "65%";
      chatLi.querySelector("p").innerHTML = replaceURLsWithLinks(
        responseData.replace(/\n/g, "").replace(/\n\n/g, "")
      );
      // style="word-break: 'break-word'; overflow: 'hidden'; textOverflow: 'ellipsis';"

      chatbox.scrollTo(0, chatbox.scrollHeight);
    }
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

chatbotToggle.addEventListener("click", () => {
  const chatbot = document.querySelector(".chatbot");
  const chatbox = document.querySelector(".chatbox");

  if (document.body.classList.contains("show-chatbot")) {
    session_id = null;
    chatbox.innerHTML = "";
    document.body.classList.remove("show-chatbot");
  } else {
    document.body.classList.add("show-chatbot");

    const messages = chatbox.querySelectorAll(".chat");
    if (messages.length === 0) {
      // If no messages, add introductory message
      const introductoryMessage = document.createElement("li");
      introductoryMessage.classList.add("chat", "incoming");
      introductoryMessage.innerHTML = `
          <div class="message">
            <img src="https://raw.githubusercontent.com/brainstationrandd/chatbot-widget-v2/main/nikles-image.png" style="width: 60%; display: block; margin: 40px auto " alt="logo">
            <h3 class="chat__title" style="color: #302F2E; font-weight: bold; display: block; margin: 5px auto 0;  text-align: center;">Welcome to Nikles Chat Bot</h3>
            <p class="chat__title" style="background-color: #fff; color: #585979; display: block; margin: 20px auto 5px;  text-align: center; padding: 6px 10px;">Please ask anything about the company and products.</p>
          </div>
        `;
      chatbox.appendChild(introductoryMessage);
    }
  }
});

// chatbotToggle.addEventListener("click", () =>{
//     document.body.classList.toggle("show-chatbot");
//     if(session_id != null){
//       session_id = null;
//     }
//   }
// );
