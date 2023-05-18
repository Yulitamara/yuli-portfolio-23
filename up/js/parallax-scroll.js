let heroGif = document.querySelector(".hero-gif");
let clouds = document.querySelector(".clouds-img");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  clouds.style.top = value + "px";
});
