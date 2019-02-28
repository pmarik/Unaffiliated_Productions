"use strict";
import { imgSliderInit } from './imageSlider.js';
import { lazyLoader } from './lazyLoad.js';



/**********************************
 * Nav resize on scroll
 * 
 * 
 * *******************************/
//toggle animated nav when scrolling vertically
let scrollHeight;
let animatedHeader = document.getElementsByTagName('header')[0];
const checkVideo = document.getElementsByClassName('wrapper')[0].childNodes;
let videoHeight = 0;
if (checkVideo[1].className == "video-wrap") {
    videoHeight = document.getElementsByClassName('video-wrap')[0].clientHeight;

}

videoHeight -= 70;
//readjust scroll measurement when resizing window for nav bar

/**************************************
 * Navigation animations for full 
 * screen and mobile with burger menu
 * 
 **************************************/
// burger animation toggle
const burger = document.getElementsByTagName('nav')[0];
document.querySelector("#nav-toggle")
    .addEventListener("click", function() {
        this.classList.toggle("active");
        burger.classList.toggle('visibleNav');
    });

/* ALL ON WINDOW RESIZE EVENTS *****************
 *
 ***********************************************/

let width;
window.onresize = window.onload = function() {
    width = this.innerWidth;
    if (width > 939) {
        //reset the burger menu to default when open and resizing window
        document.querySelector("#nav-toggle").classList.remove("active");
        burger.classList.add('visibleNav');

        //remove image slider with larger viewport size
        let slider = document.querySelectorAll('.slide');
        for (let i = 0; i < slider.length; i++) {
            slider[i].style.display = 'block';

        }

        if (checkVideo[1].className == "video-wrap") {
            videoHeight = document.getElementsByClassName('video-wrap')[0].clientHeight - 80;
        }
    } else {
        //add image slider with smaller viewport size
        imgSliderInit();

        if (checkVideo[1].className == "video-wrap") {
            videoHeight = document.getElementsByClassName('video-wrap')[0].clientHeight - 80;
        }
    }
}


if (window.innerWidth < 939) {
    imgSliderInit();
}



/* ALL ON SCROLL EVENTS ************************
 *
 ***********************************************/

window.onscroll = window.onload = function() {
    scrollHeight = this.scrollY;

    if (scrollHeight > videoHeight) {
        animatedHeader.classList.add('verticalAnimate');
    }
    if (scrollHeight < videoHeight) {
        animatedHeader.classList.remove('verticalAnimate');
    }

}



//Lazy load images
lazyLoader();