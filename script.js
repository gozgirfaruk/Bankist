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

  // Sticky nagivation: Intercestion Observer API
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;


const stickyNav = function(entries){
  const [ entry]=entries;
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
 
 const headObserver = new IntersectionObserver(stickyNav,{
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
 });
 headObserver.observe(header);

// Reveal Sections
const allSections  = document.querySelectorAll('.section');

const revealSection= function(entries,observer){
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const ssectionObserver = new IntersectionObserver(revealSection,{
  root:null,
  threshold:0.15
});

allSections.forEach(function(section){
  ssectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function(entries,observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  // Raplace src with data-src
  entry.target.src=entry.target.dataset.src;
  entry.target.addEventListener('load',function(){
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg,{
  root:null,
  threshold:0,
  rootMargin:'-200px'
});

imgTargets.forEach(img=>imgObserver.observe(img));

// Sliders
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

let curSlide = 0 ;
const maxSlide = slides.length;

const goToSlide=function(slide){
  slides.forEach((s,i)=>s.style.transform =`translateX(${100*(i-slide)}%)`);
};

goToSlide(0);
const nextSlide = function(){
  if(curSlide ===maxSlide-1){
    curSlide=0;
  }else{
    curSlide++;
  }
  goToSlide(curSlide);
  activeDot(curSlide);
};

const prevSlide= function(){
  if(curSlide===0){
    curSlide=maxSlide-1;
  }
  else{
  curSlide--;
  }
  goToSlide(curSlide);
  activeDot(curSlide);
};

btnRight.addEventListener('click',nextSlide);
btnLeft.addEventListener('click',prevSlide);

document.addEventListener('keydown',function(e){
  if(e.key ==='ArrowLeft') prevSlide();
  e.key==='ArrowRight' && nextSlide();
});

// Dots for Sliders
const createDots = function(){
  slides.forEach(function(_,i){
    dotContainer.insertAdjacentHTML('beforeend',`<button class="dots__dot" data-slide="${i}"></button>`);
  });
};
createDots();

const activeDot = function(slide){
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
};
activeDot(0);
dotContainer.addEventListener('click',function(e){
  if(e.target.classList.contains('dots__dot')){
    const {slide} = e.target.dataset.slide;
    goToSlide(slide);
    activeDot(slide);
  }
});


document.addEventListener('DOMContentLoaded',function(e){
console.log('HTML parsed and DOM tree built',e);
});
window.addEventListener('load',function(e){
  console.log('Page fully loaded',e);
});

// window.addEventListener('beforeunload',function(e){
//   e.preventDefault();
//   console.log(e);
//   e.returnValue='message';
// });

