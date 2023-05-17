let flyingMan = document.querySelector(".flying-man");
let clouds = document.querySelector(".clouds-img");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  clouds.style.top = value + "px";
});
