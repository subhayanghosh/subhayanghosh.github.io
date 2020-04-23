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
function counter(){
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
function display1(){
    document.getElementById("review2").style.display = "none";
    document.getElementById("review3").style.display = "none";
}
function display2(){
    document.getElementById("review1").style.display = "none";
    document.getElementById("review3").style.display = "none";
}
function display3(){
    document.getElementById("review1").style.display = "none";
    document.getElementById("review2").style.display = "none";
}
var l;
function shiftX(l){
    l.style.left = "0.4vw";
}
function shiftBackX(l){
    l.style.left = "0vw";
}