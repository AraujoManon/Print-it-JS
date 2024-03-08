const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let indexSlideCourant = 0;
let arrow_left = document.getElementById("arrow_left");
let arrow_right = document.getElementById("arrow_right");
const img = document.querySelector(".banner-img");
const tag = document.querySelector("#banner p");

// flèche droite

arrow_right.addEventListener("click", function () {
  console.log("j'ai cliqué sur la flèche droite");
  const dotSlide = document.querySelectorAll(".dot");
  dotSlide[indexSlideCourant].classList.remove("dot_selected");
  indexSlideCourant++;

  if (indexSlideCourant > slides.length - 1) {
    indexSlideCourant = 0;
  }
  dotSlide[indexSlideCourant].classList.add("dot_selected");
  img.src = slides[indexSlideCourant].image;
  tag.innerHtml = slides[indexSlideCourant].tagLine;
});
// fin

// flèche gauche

arrow_left.addEventListener("click", function () {
  console.log("j'ai cliqué sur la flèche gauche");
  const dotSlide = document.querySelectorAll(".dot");
  dotSlide[indexSlideCourant].classList.remove("dot_selected");
  indexSlideCourant--;
  if (indexSlideCourant < 0) {
    indexSlideCourant = slides.length - 1;
  }
  dotSlide[indexSlideCourant].classList.add("dot_selected");
  img.src = slides[indexSlideCourant].image;
  tag.innerHtml = slides[indexSlideCourant].tagLine;
});
// fin

// Ajout des points pour chaque slide
for (let i = 0; i < slides.length; i++) {
  let span = document.createElement("span");
  span.classList.add("dot");
  document.querySelector(".dots").appendChild(span);
  if (i === indexSlideCourant) {
    span.classList.add("dot_selected");
  }
}
// fin
