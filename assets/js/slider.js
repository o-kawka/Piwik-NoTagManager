var btn = document.getElementsByClassName("btnn");
var slide = document.getElementById("slide");

btn[0].onclick = function() {
    slide.style.transform = "translateX(0%)";
    for (i=0; i<3; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function() {
    slide.style.transform = "translateX(-100%)";
    for (i=0; i<3; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick = function() {
    slide.style.transform = "translateX(-200%)";
    for (i=0; i<3; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
