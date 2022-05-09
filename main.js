function onScroll(){
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  const navigation = document.getElementById('navigation');
  if(scrollY > 0){
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}

function showBackToTopButtonOnScroll(){
  const backToTopButton = document.getElementById('backToTopButton');
  if(scrollY > 400){
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

function openMenu(){
  const body = document.querySelector('body');
  body.classList.add('menu-expanded')
}

function closeMenu(){
  const body = document.querySelector('body');
  body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800,
  reset: true
}).reveal(
  `#home,
   #home header,
   #home .content,
   #home img,
   #home .stats,
   #services,
   #services header,
   #services .cards,
   #about,
   #about header,
   #about .content,
   #contact,
   #contact header,
   #contact .content,
   footer`
);
