  // setTimeout(() => {
  //   animation();
  // }, 350);

// export function animation(){
//     gsap.to({
//       targets: '.waitingContainer',
//       translateY: 10,
//       stagger: 0.05,
//       duration: 1000,   
//     },)

// }
const notificationUpdater = document.getElementById('notificationUpdater')
const updaterMessage = document.getElementById('updaterText')
const checkMarkIcon = document.getElementById('checkMarkNotify');
const xMarkIcon = document.getElementById('xMarkNotify');

export function errorMessage(){
  console.log('Input All Fields');
  notificationUpdater.classList.add('redNotification');
  notificationUpdater.classList.remove('greenNotification');
  updaterMessage.innerText = 'Input All Fields';
  checkMarkIcon.style.display = 'none';
  xMarkIcon.style.display = 'inline';
  slideInAnimation();
}
export function successMessage(){
  console.log('Added To Queue');
  notificationUpdater.classList.add('greenNotification');
  notificationUpdater.classList.remove('redNotification');
  updaterMessage.innerText = 'Added To Queue';
  checkMarkIcon.style.display = 'inline';
  xMarkIcon.style.display = 'none';
  slideInAnimation();
}

function slideInAnimation(){
  gsap.to(notificationUpdater, {
    top: "5%", 
    duration: 0.5,
    ease: "power4.inOut",
  })
  gsap.to(notificationUpdater, {
    top: "-50%", 
    duration: 0.5,
    ease: "power4.inOut",
    delay: 3,
  })
}