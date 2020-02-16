"use strict";
import { imgSlider } from './imageSlider.js';
import { lazyLoader } from './lazyLoad.js';




//Get the client's viewport height for home page header animation
let videoHeight = 0;
try {
    videoHeight = document.getElementsByClassName('video-wrap')[0].clientHeight;
} catch (err) {
    //not on home page
}
videoHeight -= 70;


/***** Navigation animations for full screen and mobile with burger menu *****/
// const burger = document.getElementsByTagName('nav')[0];
// document.querySelector("#nav-toggle")
//     .addEventListener("click", function() {
//         this.classList.toggle("active");
//         burger.classList.toggle('visibleNav');
//     });



/* ALL ON WINDOW RESIZE EVENTS *****************
 * Toggle Burger Nav
 * Toggle img slider on videos page
 * Toggle nav bar animation on home page
 ***********************************************/
let width;
window.onresize = window.onload = function() {
    width = this.innerWidth;
    if (width > 939) {
        //reset the burger menu to default when open and resizing window
        // document.querySelector("#nav-toggle").classList.remove("active");
        // burger.classList.add('visibleNav');

        //remove image slider with larger viewport size
        let slider = document.querySelectorAll('.slide');
        for (let i = 0; i < slider.length; i++) {
            slider[i].style.display = 'block';
        }

        try {
            videoHeight = document.getElementsByClassName('video-wrap')[0].clientHeight - 80;
        } catch (err) {
            //not on home page
        }
    } else {
        try {
            videoHeight = document.getElementsByClassName('video-wrap')[0].clientHeight - 80;
        } catch (err) {
            //not on home page
        }
        //add image slider with smaller viewport size
        try {
            imgSlider();
        } catch (err) {
            //slider not on page
        }
    }
}


/***** Add animation to sticky header when vertically scrolling *****/
let scrollHeight;
let animatedHeader = document.getElementsByTagName('header')[0];

window.onscroll = window.onload = function() {
    scrollHeight = this.scrollY;

    if (scrollHeight > videoHeight) {
        animatedHeader.classList.add('verticalAnimate');
    }
    if (scrollHeight < videoHeight) {
        animatedHeader.classList.remove('verticalAnimate');
    }
}


//reset the img slider when on smaller screen
if (window.innerWidth < 939) {
    try {
        imgSlider();
    } catch (err) {
        //slider not on page
    }
}


//Lazy load images
lazyLoader();

//remove home page video from view on loads
let navCollection = document.getElementsByTagName('li')
let vidWrap = document.getElementsByClassName('fullscreen-video-wrap')[0];
for (let i = 0; i < navCollection.length; i++) {
    navCollection[i].addEventListener('click', function() {
        vidWrap.style.display = "none";
    });
}

let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
this.classList.toggle("is-active");
}, false);