var header = document.getElementById("header-main");
var footer = document.getElementById("footer-main");

document.addEventListener("scroll", () => {
    if (window.scrollY < 80) {
        footer.setAttribute("style","bottom:0px;")
    } else {
        footer.setAttribute("style","bottom:-40px;")
    }
})