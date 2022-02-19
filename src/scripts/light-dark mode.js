const firstHero = document.querySelector(".hero1");
const headerIcon = document.querySelectorAll(".header-container span");
const headerIconJoseph = document.querySelector(".Joseph");
const headerIconSerghaoui = document.querySelector(".serghaoui");

const mainTitle = document.querySelector(".main-title");

let whiteArrow = document.querySelector(".scroll-arrow");
const scrollDesc = document.querySelector(".scroll-desc");

const darkLightToggler = document.querySelector(".dark-light-toggler");

console.log(headerIcon);

const changeArrowColor = () => {

    if (whiteArrow.getAttribute('src') === 'src/icons/Line 11 - white.svg') {
      whiteArrow.src= "src/icons/Line 11.svg";
      console.log("hey");
    } else {
        whiteArrow.src= "src/icons/Line 11 - white.svg";
    };

};

darkLightToggler.addEventListener("click", () => {
  firstHero.classList.toggle("hero-white");
  changeArrowColor();

  headerIcon.forEach((element) => {
    element.classList.toggle("icon-dark");
  });

  //   whiteArrow.src = "src/icons/Line 11.svg";
  //   console.log(whiteArrow);

  mainTitle.classList.toggle("main-title-black");
  scrollDesc.classList.toggle("scroll-desc-black");
});
