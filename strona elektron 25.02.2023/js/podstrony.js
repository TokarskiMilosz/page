window.addEventListener("scroll", function (event) {
    let scroll = this.scrollY;
    if (scroll > 10) {
        this.document.querySelector(".logo-container").style.visibility = "hidden"
        this.document.querySelector(".logo-container").style.boxshadow = "(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
        this.document.querySelector(".logo-img").style.boxshadow = "(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
        this.document.getElementById("header").style.backgroundColor = "transparent"
        this.document.querySelector(".menu-container").style.borderBottomLeftRadius = "1vw"
        this.document.querySelector(".logo-img").style.borderBottomRightRadius = "1vw"
    } else {
        this.document.querySelector(".logo-container").style.visibility = "visible"
        this.document.getElementById("header").style.backgroundColor = "#2299d3"
        this.document.querySelector(".logo-container").style.boxshadow = "none"
        this.document.querySelector(".logo-img").style.boxshadow = "none"
        this.document.querySelector(".menu-container").style.borderBottomLeftRadius = "0"
        this.document.querySelector(".logo-img").style.borderBottomRightRadius = "0"
    }
});