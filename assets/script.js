
document.getElementById('year').textContent=new Date().getFullYear();
// Theme
const t=document.getElementById('themeToggle'),html=document.documentElement;
const saved=localStorage.getItem('theme');if(saved)html.dataset.theme=saved;
t&&t.addEventListener('click',()=>{const n=html.dataset.theme==='dark'?'light':'dark';html.dataset.theme=n;localStorage.setItem('theme',n);});
// Search panel
const st=document.getElementById('searchToggle'),sp=document.getElementById('searchPanel');
st&&st.addEventListener('click',()=>{sp.hidden=!sp.hidden;if(!sp.hidden)document.getElementById('searchInput').focus();});
// Mobile menu
const mt=document.getElementById('menuToggle'),nm=document.getElementById('navMobile');
mt&&mt.addEventListener('click',()=>nm.hidden=!nm.hidden);
// Progress bar
const pb=document.getElementById('progressBar');
window.addEventListener('scroll',()=>{const h=document.documentElement,p=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;pb.style.width=p+'%';});
// Back to top
const bt=document.getElementById('backToTop');
window.addEventListener('scroll',()=>{bt.classList.toggle('show',window.scrollY>500);});
bt&&bt.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
// Reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
