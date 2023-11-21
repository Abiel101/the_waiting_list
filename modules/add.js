
const gentElButton = document.getElementById('gentelmen_Button');
const madamElButton = document.getElementById('madam_Button');

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
  man = true;
  woman = false;
})
madamElButton.addEventListener('click', ()=>{
  selected(madamElButton, gentElButton)
  man = false;
  woman = true;
})


// .active_button{
//   background-color: #347d64;
//   color: #EDEDED;
// }