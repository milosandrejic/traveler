
const mobileNav = document.querySelector('.mobile-nav');
const hamburgerCheckbox = document.querySelector('.hamburger-checkbox');

mobileNav.addEventListener('click', () => {
  if(event.target.matches('.mobile-nav__link')){
    hamburgerCheckbox.checked=false;
  }
});
