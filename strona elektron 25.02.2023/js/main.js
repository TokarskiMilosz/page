window.addEventListener("scroll", function (event) {
    let scroll = this.scrollY;
    if (scroll > 500) {
        this.document.getElementById("header").style.backgroundColor = "#2299d3"
        this.document.querySelector(".logo").style.visibility = "visible";
        this.document.querySelector(".logo").style.opacity = "1";
        this.document.querySelector(".logo-link").innerHTML = "<img src='zdj/logo/logo.png' class='logo-img'>";
    } else {
        this.document.getElementById("header").style.backgroundColor = "transparent"
        this.document.querySelector(".logo").style.visibility = "hidden";
        this.document.querySelector(".logo").style.opacity = "0";
        this.document.querySelector(".logo-link").innerHTML = "<img src='zdj/logo/elektron-bailelogobezobamowki.png' class='logo-img'>";
    }
});