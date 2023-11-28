// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { animation } from './animation.js'

// Your web app's Firebase configuration
const firebaseConfig = {
  databaseURL: "https://upnext-debb0-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const waitingListInDB = ref(database, "waitingList");

const waitListContainer = document.getElementById('waitingList');


onValue(waitingListInDB, function(snapshot){

  if(snapshot.exists()){
      //Grabs the entries and returns them as an array [0]Key/ID, [1]Value
      let waitingListPeople = Object.entries(snapshot.val());
      
      clearWaitingList();
  
      for(let i = 0; i < waitingListPeople.length; i++){
          let currentPerson = waitingListPeople[i]; 
          let currentPersonID = currentPerson[0];
          let currentPersonInfo = currentPerson[1]; //Here is the gender, name, number & status

          console.log(currentPerson);
          appendNewWaiter(currentPerson);
          
      }
  }else{
      waitListContainer.innerHTML = "No items here... yet"   ;
  }
  animation();
}) 


// Clears the shopping list to fully refresh list
function clearWaitingList(){
  waitListContainer.innerHTML = '';
}

function appendNewWaiter(person){
  let classes = 'waitingContainer upNext';
  let notificationBtnText = 'Notify';
  let personID = person[0];
  let personInfo = person[1];

  waitListContainer.innerHTML += `
    <div class="${classes}">
      <span class="waitingContainer_context">
        <h3>${personInfo.name}</h3>
        <h4>${personInfo.phone}</h4>
      </span>
      <span class="waitingContainer_btn">
        <button id="notificationBtn">${notificationBtnText}</button>
      </span>
    </div>
    `

    // !! Trying to figure this part out.
    const notifyBtn = document.getElementById('notificationBtn');
    
    notifyBtn.addEventListener('click', function(){
      removeItemFromDB();
    })

    function removeItemFromDB(){
      // let exactLocationOfItemInDB = ref(database, `waitingList/${personID}`);
      // remove(exactLocationOfItemInDB);
      console.log(personID);
    }
}

