"use strict";// let header__subtitle = document.querySelector('.header__text');
// let h1Text = header__subtitle.innerHTML
// header__subtitle.innerHTML = ''
// let i = 0;
// function txt() {
//     if (i < h1Text.length) {
//         header__subtitle.innerHTML += h1Text[i]
//         i++
//         setTimeout(() => {
//             txt()
//         }, 20);
//     }
// }
// txt()
var swiperPopular=new Swiper(".popular__container",{spaceBetween:30,loop:!0,effect:"fade",pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});function updateClock(){var a=document.querySelector(".brand__title span"),b=a.innerHTML++;if(100>=b)setTimeout(function(){updateClock()},50);else if(130>=b)var c=setTimeout(function(){updateClock()},100);else if(149>b)var c=setTimeout(function(){updateClock()},300);else clearTimeout(c)}updateClock();var sections=document.querySelectorAll("section[id]");function scrollActive(){var a=window.pageYOffset;sections.forEach(function(b){var c=b.offsetHeight,d=b.offsetTop-58,e=b.getAttribute("id");a>d&&a<=d+c?document.querySelector(".nav__menu a[href*="+e+"]").classList.add("active-link"):document.querySelector(".nav__menu a[href*="+e+"]").classList.remove("active-link")})}function scrollUp(){var a=document.getElementById("scroll-up");500<=this.scrollY&&a.classList.add("show-scroll")}window.addEventListener("scroll",scrollUp);var sr=ScrollReveal({origin:"top",distance:"60px",duration:2500,delay:400,reset:!0});sr.reveal(".header__subtitle"),sr.reveal(".header__text",{delay:500}),sr.reveal(".header__forms",{delay:600}),sr.reveal(".header__icons",{delay:700}),sr.reveal(".header__right",{delay:800,origin:"bottom"}),sr.reveal(".tools__subtitle",{interval:100}),sr.reveal(".tools__txt",{delay:500,origin:"bottom"}),sr.reveal(".tools__wrap",{interval: 100}), sr.reveal(".footer__box",{interval: 100}),sr.reveal(".footer__cont",{interval: 100}),sr.reveal(".tools__bottom",{interval:100}),sr.reveal(".brand__boxxer",{origin:"top"}),sr.reveal(".newcomer__left",{origin:"left"}),sr.reveal(".newcomer__right",{origin:"right"}),sr.reveal(".swiper-wrapper",{delay:800,origin:"bottom"}),sr.reveal(".cont__boxxer",{delay:900});