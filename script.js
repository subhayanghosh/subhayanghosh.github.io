var header = document.getElementById("header");
var register = document.getElementById("register");
window.addEventListener("scroll", e => {
    if(window.pageYOffset > 200){
        header.classList.add("fixedNavbar");
        register.classList.add("fixedRegister");
        header.classList.remove("header");
    }
    if(window.pageYOffset < 251){
        header.classList.remove("fixedNavbar");
        register.classList.remove("fixedRegister");
        header.classList.add("header1");
    }
})

var pageTop = document.getElementById("pageTop");
window.addEventListener("scroll", e => {
    if(window.pageYOffset > 300){
        pageTop.style.display = "flex";
    }
    if(window.pageYOffset < 301){
        pageTop.style.display = "none";
    }
})

var a;
function changeColor(a){
    var b = a.children;
    var c = b[0].children;
    c[1].style.backgroundColor = "#DA0000";
    c[1].style.color = "#FFFFFF";
    c[1].style.left = "18vw";
    c[1].style.top = "14.5vw";
    b[1].style.color = "#DA0000";
}
function changeBackColor(a){
    var b = a.children;
    var c = b[0].children;
    c[1].style.backgroundColor = "#FFFFFF";
    c[1].style.color = "#000000";
    c[1].style.left = "18vw";
    c[1].style.top = "14vw";
    b[1].style.color = "#000000";
}

var stop = 0;
window.addEventListener("scroll", e => {
    if(window.pageYOffset > 1700){
        if(stop == 0){
            var n = document.getElementById("clientNumber");
            var x = 0;
            var myCounter = setInterval(function(){if(x < 250){x++;n.innerHTML = x}},9);
            var n1 = document.getElementById("caseNumber");
            var y = 0;
            var myCounter = setInterval(function(){if(y < 920){y = y+2;n1.innerHTML = y}},5);
            stop = 1;
        }
        console.log(window.pageYOffset);
    }
})

var track = document.getElementById("carouselTrack");
var slide = Array.from(track.children);
var nav = document.getElementById("carouselNav");
var navButton = Array.from(nav.children);
nav.addEventListener("click", e => {
    var clickedButton = e.target.closest("button");
    if (!clickedButton) return;
    var currentSlide = track.querySelector(".currentSlide");
    var currentButton = nav.querySelector(".currentSlide");
    if (clickedButton == currentButton) return;
    var targetIndex = navButton.findIndex(navButton => navButton == clickedButton);
    var targetSlide = slide[targetIndex];
    track.style.transform = "translateX(-" + targetSlide.offsetWidth*targetIndex + "px)";
    currentSlide.classList.remove("currentSlide");
    targetSlide.classList.add("currentSlide");
    currentButton.classList.remove("currentSlide");
    clickedButton.classList.add("currentSlide");
})

var l;
function shiftX(l){
    l.style.left = "0.4vw";
}
function shiftBackX(l){
    l.style.left = "0vw";
}