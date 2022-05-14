function onScroll(){
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
}

function activateMenuAtCurrentSection(section){
  // linha alvo
  const targetLine = scrollY + innerHeight / 2;

  // verificar se a sessão passou da linha
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove('active');
  if(sectionBoundaries) {
    menuElement.classList.add('active')
  }
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
  body.classList.add('menu-expanded');
}

function closeMenu(){
  const body = document.querySelector('body');
  body.classList.remove('menu-expanded');
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
