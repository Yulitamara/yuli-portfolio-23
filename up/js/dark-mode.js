//darkmode toggle
const sun = '<span class="material-symbols-outlined">light_mode</span>';
const moon = '<span class="material-symbols-outlined">dark_mode</span>';

const toggleSwitch = document.querySelector("#darkmodeToggle");
function switchTheme(e) {
  if (document.documentElement.getAttribute("data-theme") == "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    clouds.src = "/up/imgs/moon.png";
    flyingMan.src = "/up/imgs/flying-man-night.png";
    this.innerHTML = sun;
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    this.innerHTML = moon;
    clouds.src = "/up/imgs/clouds2.png";
    flyingMan.src = "/up/imgs/flying-man.png";
  }
}
toggleSwitch.addEventListener("click", switchTheme, false);
//initially apply user's preference from their system settings
if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  document.documentElement.setAttribute("data-theme", "light");
  toggleSwitch.innerHTML = moon;
}
