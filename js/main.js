const mobileNav = document.querySelector('.mobile-nav');
const hamburgerCheckbox = document.querySelector('.hamburger-checkbox');
const headerHeight = document.querySelector('.header').scrollHeight;
const hamburger = document.querySelector('.hamburger-content');
const footer = document.querySelector('footer');
const docHeight = document.body.scrollHeight;
const footerHeightFromTop = docHeight - footer.scrollHeight;


mobileNav.addEventListener('click', () => {
  if(event.target.matches('.mobile-nav__link')){
    hamburgerCheckbox.checked=false;
  }
});



document.addEventListener('scroll', () => {
  if(window.pageYOffset < headerHeight - 150 || window.pageYOffset > footerHeightFromTop){
    hamburger.classList.add('color-white')
    hamburger.classList.remove('color-blue')
  }
  else {
    hamburger.classList.remove('color-white')
    hamburger.classList.add('color-blue')
  }
})

const setHamburgerColor = () => {
  if(window.pageYOffset < headerHeight - 150 || window.pageYOffset > footerHeightFromTop){
    hamburger.classList.add('color-white')
    hamburger.classList.remove('color-blue')
  }
  else {
    hamburger.classList.remove('color-white')
    hamburger.classList.add('color-blue')
  }
};

setHamburgerColor();