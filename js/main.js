var swiper = new Swiper(".mySwiper", {
    speed: 500,
    spaceBetween: 30,
    autoplay:{
         delay: 3000,
         disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


const accordion = document.querySelectorAll('.js-accordion');
const heading = document.getElementById('js-header');

accordion.forEach(acc => {
    acc.addEventListener('click', () => {
        let pai =  acc.parentElement;
       pai.classList.toggle('active');
    })
})

document.addEventListener('scroll', () =>{
     if(scrollY >= 35 && !heading.classList.contains('fixed-menu')){
       heading.classList.add('fixed-menu');
     }
     else if(scrollY < 35 && heading.classList.contains('fixed-menu')){
       heading.classList.remove('fixed-menu');
     }
})