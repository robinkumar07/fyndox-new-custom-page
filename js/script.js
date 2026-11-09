const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("show");

    const isOpen = navMenu.classList.contains("show");
    menuToggle.setAttribute("aria-expanded", isOpen);
});