"use strict";
import greet from "./testScript-1";


console.log(greet);


/**************************************
 * Navigation animations for full screen and mobile
 * 
 * 
 */

// burger animation toggle
const burger = document.getElementsByTagName('nav')[0];
document.querySelector("#nav-toggle")
    .addEventListener("click", function() {
        this.classList.toggle("active");
        burger.classList.toggle('visibleNav');
    });

//reset the burger menu to default when open and resizing window
let width;
window.onresize = window.onload = function() {
    width = this.innerWidth;
    if (width > 939) {
        document.querySelector("#nav-toggle").classList.remove("active");
        burger.classList.add('visibleNav');
    }
}

//toggle animated nav when scrolling vertically
let scrollHeight;
let animatedHeader = document.getElementsByTagName('header')[0];
window.onscroll = window.onload = function() {
    scrollHeight = this.scrollY;
    if (scrollHeight > 100) {
        animatedHeader.classList.add('verticalAnimate');
    }
    if (scrollHeight > 900 || scrollHeight < 100) {
        animatedHeader.classList.remove('verticalAnimate');
    }
    console.log(scrollHeight);
}