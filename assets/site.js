(function(){
var h=document.getElementById('hdr');function s(){h.classList.toggle('scrolled',scrollY>8)}s();addEventListener('scroll',s,{passive:true});
var b=document.getElementById('burger'),n=document.getElementById('nav');
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)})}else{document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')})}
var m=document.getElementById('modal'),mb=document.getElementById('modal-body');
function close(){m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('.case').forEach(function(c){c.addEventListener('click',function(){mb.innerHTML=c.querySelector('.cs-src').innerHTML;m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'})});
m.addEventListener('click',function(e){if(e.target.hasAttribute('data-close'))close()});
addEventListener('keydown',function(e){if(e.key==='Escape')close()});
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href*="calendar"]');if(!a)return;try{if(window.fbq)fbq('track','Schedule');gtag('event','book_audit_click')}catch(x){}});
})();
