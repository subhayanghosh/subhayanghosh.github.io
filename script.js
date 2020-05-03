var header = document.getElementById("header");
var register = document.getElementById("register");
window.addEventListener("scroll", e => {
    if(window.pageYOffset > 250){
        header.classList.add("fixedNavbar");
        document.body.querySelector(".fixedNavbar").style.animation = "fadeDown 0.3s ease forwards";
        register.classList.add("fixedRegister");
        header.classList.remove("header");
        toggledNavbar.style.position = "fixed";
    }
    if(window.pageYOffset < 251){
        header.classList.remove("fixedNavbar");
        register.classList.remove("fixedRegister");
        header.classList.add("header");
        document.body.querySelector(".header").style.animation = "none";
        toggledNavbar.style.position = "absolute";
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
    b[1].style.color = "#DA0000";
    if (window.matchMedia("(max-width: 1199px)").matches){
        c[1].style.left = "19vw";
        c[1].style.top = "15vw";
    }
    else {
        c[1].style.left = "18vw";
        c[1].style.top = "14.5vw";
    }
}
function changeBackColor(a){
    var b = a.children;
    var c = b[0].children;
    c[1].style.backgroundColor = "#FFFFFF";
    c[1].style.color = "#000000";
    b[1].style.color = "#000000";
    if(window.matchMedia("(max-width: 1199px)").matches){
        c[1].style.left = "19vw";
        c[1].style.top = "14vw";
    }
    else {
        c[1].style.left = "18vw";
        c[1].style.top = "14vw";
    }
}

var stop = 0;
window.addEventListener("scroll", e => {
    if(window.matchMedia("(max-width: 1199px)").matches){
        if(window.pageYOffset > 1300){
            if(stop == 0){
                var n = document.getElementById("clientNumber");
                var x = 0;
                var myCounter = setInterval(function(){if(x < 250){x++;n.innerHTML = x}},9);
                var n1 = document.getElementById("caseNumber");
                var y = 0;
                var myCounter = setInterval(function(){if(y < 920){y = y+2;n1.innerHTML = y}},5);
                stop = 1;
            }
        }
    }
    else{
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
        }
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

var flag = 0;
var hamburger = document.getElementById("hamburger");
var toggledNavbar = document.getElementById("toggledNavbar");
hamburger.addEventListener("click", e => {
    toggledNavbar.style.display = "unset";
    if(flag % 2 == 0){
        toggledNavbar.style.animation = "toggleDown 0.3s ease forwards";
        flag ++;
    }
    else{
        toggledNavbar.style.animation = "toggleUp 0.3s ease forwards";
        flag++;
    }
})