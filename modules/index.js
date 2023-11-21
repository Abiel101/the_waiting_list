const waitListContainer = document.getElementById('waitingList');
const upnextDBContainer = document.getElementById('upNext');

let nameOfWaitlister = 'Abiel Ortega';
let phoneOfWaitlister = '9406129063';




for(i = 0; i < 10; i++){
  appendNewWaiter(nameOfWaitlister, phoneOfWaitlister);
}

function appendNewWaiter(fullName, phoneNumber){
  waitListContainer.innerHTML += `
    <div class="waitingContainer">
      <span class="waitingContainer_context">
        <h3>${fullName}</h3>
        <h4>${phoneNumber}</h4>
      </span>
      <span class="waitingContainer_btn">
        <button onclick="sendText()">Notify</button>
      </span>
    </div>
  `
}
appendNewUpNext(nameOfWaitlister, phoneOfWaitlister);
function appendNewUpNext(fullName, phoneNumber){
  upnextDBContainer.innerHTML += `
  <div class="waitingContainer upNext">
    <span class="waitingContainer_context">
      <h3>${fullName}</h3>
      <h4>${phoneNumber}</h4>
    </span>
    <span class="waitingContainer_btn">
      <button id="sendTextBtn" onclick="sendText()">
        <div class="buttonSpanContainer">
          <span id="notifyText" class="notifyText active">Notify</span>
          <span id="sendingText" class="notifyText">Sending</span>
          <span id="sentText" class="notifyText">Sent!</span>
        </div>
      </button>
    </span>
  </div>
  `
}

// sending text animation
const notifyText = document.getElementById('notifyText');
const sendingText = document.getElementById('sendingText');
const sentText = document.getElementById('sentText');
const notifyButton = document.getElementById('sendTextBtn')

function sendText(){
  notifyText.classList.remove('active');
  setTimeout(()=>{
    sendingText.classList.add('active');
    notifyButton.style.backgroundColor = '#C5A73F';
  }, 500)
  setTimeout(()=>{
    sendingText.classList.remove('active')
    setTimeout(()=>{
      sentText.classList.add('active')
      notifyButton.style.backgroundColor = '#3FBDC5';
    }, 500)
  }, 3000)
  setTimeout(()=>{
    sentText.classList.remove('active')
    setTimeout(()=>{
      notifyText.classList.add('active')
      notifyButton.style.backgroundColor = '#3FC595';
    }, 500)
  }, 6000)
}