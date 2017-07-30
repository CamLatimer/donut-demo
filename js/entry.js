const go = `let's go...`
console.log(go);

const navIcons = document.querySelectorAll('.nav__icon, .navM__icon');
const mobileMenu = document.querySelector('.navM');
const navMLinks = document.querySelectorAll('.navM__link, .infoIcon--nav');
navIcons.forEach(function(icon){
  icon.addEventListener('click', function(){
    mobileMenu.classList.toggle('showNavM');
    navMLinks.forEach(function(link){
      link.classList.toggle('showNavMLinks');
    })
  })
})
