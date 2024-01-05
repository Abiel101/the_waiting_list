

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, push, ref} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { errorMessage, successMessage } from "../../animation.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  databaseURL: "https://upnext-debb0-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const waitingListInDB = ref(database, "waitingList");


/********************
Man & Woman selection 
********************/
const gentElButton = document.getElementById('gentelmen_Button');
const madamElButton = document.getElementById('madam_Button');
let gender = '';
let man = false;
let woman = false;

function selected(active, inactive){
  active.style.color = '#EDEDED';
  active.style.backgroundColor = '#347d64';
  inactive.style.color = '#222222';
  inactive.style.backgroundColor = '#EDEDED'
}
gentElButton.addEventListener('click', ()=>{
  selected(gentElButton, madamElButton)
  man = true; //might not need this
  woman = false; //might not need this
  gender = 'man';
})
madamElButton.addEventListener('click', ()=>{
  selected(madamElButton, gentElButton)
  man = false; //might not need this
  woman = true; //might not need this
  gender = 'woman';
})



/**********************************************
Form Name & Phone number Inputs with add button
**********************************************/
const nameInputEl = document.getElementById('enter_name');
const phoneInputEl = document.getElementById('phone_number');
const addButtonEl = document.getElementById('add_button');


/**************************************
Pushing up to the Waiting List Database 
**************************************/
addButtonEl.addEventListener('click', function(){
  let nameInputValue = nameInputEl.value;
  let phoneInputValue = phoneInputEl.value;
  
  let formInputs = {
    name: nameInputValue, 
    phone: phoneInputValue,
    status: 'waiting',
    gender: gender,
  };

  if (nameInputValue != '' && phoneInputValue != '' && gender != ''){
    push(waitingListInDB, formInputs);
    clearInputFieldEl();
    successMessage();
  }else{
    // alert('Please Input all fields');
    errorMessage();
    console.log(formInputs);
  }
})

/**********************
Clear Input Fields 
***********************/
function clearInputFieldEl() {
  nameInputEl.value = "";
  phoneInputEl.value = "";
  gentElButton.style.color = '#222222';
  madamElButton.style.color = '#222222';
  gentElButton.style.backgroundColor = '#EDEDED'
  madamElButton.style.backgroundColor = '#EDEDED'
}