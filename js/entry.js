window.onload = function(){
  const navIcons = document.querySelectorAll('.nav__icon, .navM__icon');
  const mobileMenu = document.querySelector('.navM');
  const navLinksWide = document.querySelectorAll('.nav__link a');
  const navMLinks = document.querySelectorAll('.navM__link, .infoIcon--nav');
  const titleWrapper = document.querySelector('.headline__wrapper');
  const titleTop =  parseInt(window.getComputedStyle(titleWrapper, null).top, 10);
  const tastyRow = document.querySelector('.tastyRow');
  const navFullWidth = document.querySelector('.navFull');


  // toggle mobile nav
  navIcons.forEach(function(icon){
    icon.addEventListener('click', function(){
      mobileMenu.classList.toggle('showNavM');
      navMLinks.forEach(function(link){
        link.classList.toggle('showNavMLinks');
      })
    })
  })

  // slow / delayed parallax-style scroll for site title
   document.addEventListener('scroll', function(){
     parllaxHeadlineControl();
     navBgControl();
   })

   function parllaxHeadlineControl(){
     const scrollDistance = window.scrollY;
     const topSet = (titleTop + (scrollDistance / 2));
     titleWrapper.style.top = topSet + 'px';
   }

  function navBgControl(){
    const tastyRowTop = tastyRow.getBoundingClientRect().top;
    let linkColor;
    function linkColorSwitch(link){
        link.style.color = linkColor;
    }
    if (window.innerWidth > 640){
      if(tastyRowTop < 200){
        navFullWidth.style.backgroundColor = 'white';
        linkColor = 'black';
        navLinksWide.forEach(linkColorSwitch)
      } else if(tastyRowTop > 200){
        navFullWidth.style.backgroundColor = 'transparent';
        linkColor = 'white';
        navLinksWide.forEach(linkColorSwitch)
      }
    }

  }



}
