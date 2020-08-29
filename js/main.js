const mobileNav = document.querySelector(".mobile-nav");
const hamburgerCheckbox = document.querySelector(".hamburger-checkbox");
const headerHeight = document.querySelector(".header").scrollHeight;
const hamburger = document.querySelector(".hamburger-content");
const footer = document.querySelector("footer");
const docHeight = document.body.scrollHeight;
const footerHeightFromTop = docHeight - footer.scrollHeight;
const fadeInTopElements = document.querySelectorAll('.story__top');
const fadeInLeftElements = document.querySelectorAll('.story__bottom');
const fadeZoomElements = document.querySelectorAll('.team-member');


const animate = (classForAnimation, ...elementsForAnimation) => {
  elementsForAnimation.forEach(element => {
    if(element.getBoundingClientRect().bottom - window.innerHeight < 0){
      element.classList.add(classForAnimation);
      element.classList.remove('prepareForFade');
    }
  })
}

document.addEventListener("scroll", () => {

  animate('fadeInTop', ...fadeInTopElements);
  animate('fadeInLeft', ...fadeInLeftElements);
  animate('fadeAndZoom', ...fadeZoomElements);


  if (
    window.pageYOffset < headerHeight - 150 ||
    window.pageYOffset > footerHeightFromTop
  ) {
    hamburger.classList.add("color-white");
    hamburger.classList.remove("color-blue");
  } else {
    hamburger.classList.remove("color-white");
    hamburger.classList.add("color-blue");
  }
});

mobileNav.addEventListener("click", () => {
  if (event.target.matches(".mobile-nav__link")) {
    hamburgerCheckbox.checked = false;
  }
});

const initHamburgerColor = () => {
  if (
    window.pageYOffset < headerHeight - 150 ||
    window.pageYOffset > footerHeightFromTop
  ) {
    hamburger.classList.add("color-white");
    hamburger.classList.remove("color-blue");
  } else {
    hamburger.classList.remove("color-white");
    hamburger.classList.add("color-blue");
  }
};

const prepareForAnimation = (...elements) => {
  elements.forEach(element => {
    element.classList.add('prepareForFade');
  })
}

prepareForAnimation(...fadeInLeftElements, ...fadeInTopElements, ...fadeZoomElements)
initHamburgerColor();
