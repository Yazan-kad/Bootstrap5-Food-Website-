// Header Scroll 
let nav = document.querySelector(".navbar");
Window.onscroll = () => {
    if(document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.add("header-scrolled");
    }
}
// Nav Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach((e) => {
    e.addEventListener("click", () => {
        navCollapse.classList.remove("show");
    })
});