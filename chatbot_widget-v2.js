document.body.innerHTML +=
` <button class="chatbot-toggler">
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
</div>`

const style = document.createElement("style");
style.innerHTML =`@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  background: #e3f2fd;
  word-wrap: break-word
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
`
document.head.appendChild(style);