/*Show Menu*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    toggleCloseButton(true);
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    toggleCloseButton(false);
  });
}

/*Remove menu mobile*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove("show-menu");
  toggleCloseButton(false); // Menyembunyikan tombol close saat menu disembunyikan
};

navLinks.forEach((link) => {
  link.addEventListener("click", linkAction);
});

// Fungsi untuk menampilkan atau menyembunyikan tombol close berdasarkan status menu
function toggleCloseButton(show) {
  if (navClose) {
    navClose.style.display = show ? "block" : "none";
  }
}
/*Add blur */
const blurHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);
