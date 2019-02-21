"use strict";
import { imgSlider } from './imageSlider.js';
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
    } else {
        //add image slider with smaller viewport size
        imgSlider();
        if (checkVideo[1].className == "video-wrap") {
            videoHeight = document.getElementsByClassName('video-wrap')[0].clientHeight - 80;
        }
    }
}


if (window.innerWidth < 939) {
    imgSlider();
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


/*****************lazy load nodes******/
var idleLoad = function() {
    function p(a, c) {
        var b, d;
        c || (c = 250);
        return function() {
            var f = this,
                e = +Date.now(),
                g = arguments;
            b && e < b + c ? (clearTimeout(d), d = setTimeout(function() {
                b = e;
                a.apply(f, g)
            }, c)) : (b = e, a.apply(f, g))
        }
    }

    function h() {
        var a, c;
        if (b)
            if (c = b.length)
                for (; c--;) {
                    if (a = b[c].getAttribute("data-" + k) || e, b[c] && document.documentElement.clientHeight * a >= b[c].parentNode.getBoundingClientRect().top) {
                        a = b[c];
                        var h = l,
                            d = document.createElement(m);
                        d.className = a.className.replace(f, f + n);
                        d.innerHTML = a.innerHTML.replace(/&lt;/g,
                            "<").replace(/&gt;/g, ">");
                        a.parentNode.replaceChild(d, a);
                        h && h(d)
                    }
                } else window.removeEventListener("scroll", g, !1)
    }
    var b, e, k, m, f, n, l, g;
    return {
        init: function(a) {
            document.addEventListener && document.getElementsByClassName && (f = a.elementClass || "idle-load", b = document.getElementsByClassName(f), n = a.onClass || "-ON", m = a.elementTo || "div", e = (e = 0 === a.offsetViewportBy ? 1E-4 : a.offsetViewportBy) || 1.5, k = a.idleAttribute || "idle", g = p(function() { h() }, a.pollDelay), l = a.callbackFunc || !1, window.addEventListener("scroll", g, !1),
                h())
        }
    }
}();
idleLoad.init({ // All options optional:
    elementClass: 'idle-load', // (default) Class of <noscript> tags to replace.
    onClass: '-ON', // (default) Added to the class name upon replacement.
    elementTo: 'div', // (default) Element to replace <noscript>.
    //           May be overridden by a data-idle value on a noscript tag: data-idle='1'.
    idleAttribute: 'idle', // (default) Data attribute to override offsetViewportBy, uses same values.
    pollDelay: 250, // (default) How often polling to throttle occurs.
    callbackFunc: function() {} // Call back function on noscript replacement.
});