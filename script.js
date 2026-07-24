// Navbar Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (menuToggle.innerHTML === "☰") {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }
});
