function onScroll(){
  const navigation = document.getElementById('navigation');
  if(scrollY > 0){
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll')
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