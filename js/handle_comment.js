// :o - surprised: ngạc nhiên
// :) - smile: cười
// var chat = document.querySelector('#chat');
const LINE_NUMBER = 100;
const inp = document.querySelector("#inp");
const emojis = document.getElementsByClassName("emoji");
const bg_chat = document.querySelector("#bg-chat");
const bg = document.getElementById("back");

function getIndexSelect() {
  for (let i = 0; i < emojis.length; i++) {
    const e = emojis[i];
    if (e.checked) return i;
  }
  return -1;
}

function submitChat() {
  if (inp.value != "") {
    index = this.getIndexSelect();
    // str = inp.value.toLowerCase();
    switch (index) {
      case 0:
        // Fun
        break;
      case 1:
        // Cry
        break;
      case 2:
        // Joke
        sendContent("asset/images/logo.png", "Member", inp.value);
        break;
    }
  }
}

inp.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    submitChat();
  }
});

function sendContent(imgSrc, name, content) {
  addContent(imgSrc, name, content);
  removeTopContent();
  scrollBottomChat();
  handleJoke(content);
}

function addContent(imgSrc, name, content) {
  var chat_badge = `<div class="message">
    <img class="avatar" src="${imgSrc}" alt="avatar.png">
    <div class="content">
      <span class="name">${name}</span>
      <span class="chat">${content}</span>
    </div>
  </div>`;
  bg_chat.innerHTML += chat_badge;
}

function removeTopContent() {
  while (bg_chat.childElementCount > LINE_NUMBER) {
    bg_chat.firstChild.remove();
  }
}

function scrollBottomChat() {
  bg_chat.scrollTo(0, bg_chat.scrollHeight);
}
