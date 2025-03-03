'use strict'

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

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

// Tabbed component
tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
  
    if (!clicked) return;
  
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  
    clicked.classList.add('operations__tab--active');
  
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
  });

  // fade animation
  const handleHover = function (e) {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');
  
      siblings.forEach(el => {
        if (el !== link) el.style.opacity = this;
      });
      logo.style.opacity = this;
    }
  };

  nav.addEventListener('mouseover', handleHover.bind(0.5));
  nav.addEventListener('mouseout', handleHover.bind(1));

  // sticky navigation
 const initialCoords= section1.getBoundingClientRect();
  window.addEventListener('scroll',function(){
    if(this.scrollY>initialCoords.top){
        nav.classList.add('sticky');
    } 
    else {
        nav.classList.remove('sticky');
    }
  });