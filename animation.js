setTimeout(() => {
  animation();
}, 350);

export function animation(){
    anime({
      targets: '.waitingContainer',
      // translateY: 10,
      opacity: 1,
      // easing: 'easeOutInExpo',
      delay: anime.stagger(200),
      duraction: 1000,   
    },)

}