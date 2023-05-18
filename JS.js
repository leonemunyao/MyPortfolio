      // menu icon 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navabar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


//    sroll sections 
let sections = document.querySelectorAll('section');
let naclinks = document.querySelectorAll('header nav a');




// sticky navbar 
window.onscroll = () => {

    sections.forEach (sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
           navlinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a [href*= '+ id +']').classList.add('active');
           });
        };
    });
let header = document.querySelector('.header');

header.classList.toggle ('sticky', window.scrollY > 100);

  //  remove menu-icon 
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};


    //   swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });    