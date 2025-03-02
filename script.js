function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

document.addEventListener("DOMContentLoaded", function () {
  var moreCerts = document.getElementById("moreCerts");
  var btn = document.getElementById("seeMoreBtn");

  if (btn) {
    btn.addEventListener("click", function () {
      if (moreCerts.style.display === "none" || moreCerts.style.display === "") {
        moreCerts.style.display = "block";
        btn.innerText = "See Less";
      } else {
        moreCerts.style.display = "none";
        btn.innerText = "See More";
      }
    });
  }
});
