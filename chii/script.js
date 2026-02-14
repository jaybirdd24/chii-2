// Navigation toggle, smooth anchor scrolling, reveal animations, and page transitions.
(function(){
  'use strict';
  try {
  const MOBILE_BREAKPOINT = 900;
  document.documentElement.classList.add('js');

  // Page entrance animation
  document.body.classList.add('page-transition');

  const yearEl=document.querySelector('[data-year]');
  if(yearEl)yearEl.textContent=new Date().getFullYear();

  // Page exit animation for internal links
  const prefersReducedMotion=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  function isInternalLink(href,link){
    if(!href)return false;
    if(href.startsWith('#')||href.startsWith('tel:')||href.startsWith('mailto:'))return false;
    if(link.target==='_blank')return false;
    if(href.startsWith('http')&&!href.includes(window.location.hostname))return false;
    return true;
  }
  if(!prefersReducedMotion){
    document.addEventListener('click',e=>{
      const link=e.target.closest('a');
      if(!link)return;
      const href=link.getAttribute('href');
      if(!isInternalLink(href,link))return;
      e.preventDefault();
      document.body.classList.add('is-leaving');
      setTimeout(()=>window.location.href=href,250);
    });
  }
  // Fix for back/forward cache: restore page visibility when navigating back
  window.addEventListener('pageshow',e=>{
    if(e.persisted){
      document.body.classList.remove('is-leaving');
    }
  });

  const toggle=document.querySelector('[data-menu-toggle]');
  const nav=document.querySelector('[data-nav]');
  if(toggle&&nav){
    const setLabel=(expanded)=>toggle.setAttribute('aria-label',expanded?'Close main menu':'Open main menu');
    setLabel(false);
    toggle.addEventListener('click',()=>{
      const expanded=toggle.getAttribute('aria-expanded')==='true';
      const next=!expanded;
      toggle.setAttribute('aria-expanded',String(next));
      nav.classList.toggle('open',next);
      setLabel(next);
    });
    nav.addEventListener('click',event=>{
      const link=event.target.closest('a');
      if(!link||window.innerWidth>MOBILE_BREAKPOINT)return;
      toggle.setAttribute('aria-expanded','false');
      nav.classList.remove('open');
      setLabel(false);
    });
  }

  document.addEventListener('click',event=>{
    const link=event.target.closest('a[href^="#"]');
    if(!link)return;
    const id=link.getAttribute('href');
    if(!id||id.length<2)return;
    const target=document.querySelector(id);
    if(!target)return;
    event.preventDefault();
    target.scrollIntoView({behavior:'smooth'});
  });

  const reveal=document.querySelectorAll('[data-animate]');
  if(reveal.length){
    const show=el=>el.classList.add('is-visible');
    if('IntersectionObserver'in window){
      const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            show(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },{threshold:0.1});
      reveal.forEach(el=>observer.observe(el));
    }else{
      reveal.forEach(show);
    }
  }
  } catch (err) {
    console.error('Chii script error:', err);
  }
})();
