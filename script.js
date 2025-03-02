function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function toggleCertifications() {
    var moreCerts = document.getElementById("moreCerts");
    var btn = document.getElementById("seeMoreBtn");
    if (moreCerts.style.display === "none") {
      moreCerts.style.display = "block";
      btn.innerText = "See Less";
    } else {
      moreCerts.style.display = "none";
      btn.innerText = "See More";
    }
  }
