'use strict'

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function(e){
    section1.scrollIntoView({behavior:'smooth'});
});

document.querySelector('.nav__links').addEventListener('click',function(e){
    if(e.target.classList.contains('nav__link')){
        e.preventDefault();
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
});