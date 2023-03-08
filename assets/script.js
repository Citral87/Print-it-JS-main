/*array src*/


const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

/*myconstances*/

const banner = document.querySelector("#banner");
const bannerImages = banner.querySelector(".banner-img");
const bannerText = banner.querySelector("#banner-txt");
const dots = banner.querySelectorAll(".dot");
const arrowLeft = banner.querySelector(".arrow_left");
const arrowRight = banner.querySelector(".arrow_right");
/* index var*/
let currentSlideIndex = 0;
/*arrow*/
arrowLeft.addEventListener("click", function (e) {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  console.log(e.target);
  console.log("click a gauche");
  updateBanner();
});

arrowRight.addEventListener("click", function (e) {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  console.log(e.target);
  console.log("click a droite");

  updateBanner();
});

/*fonction img change*/
function updateBanner() {
  bannerImages.src =
    "./assets/images/slideshow/" + slides[currentSlideIndex].image;

  /*text change*/

  bannerText.innerHTML = slides[currentSlideIndex].tagLine;

 /* dot change*/
  dots.forEach((dot, index) => { 
    if (index === currentSlideIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}
