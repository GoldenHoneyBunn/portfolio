const menuButton=document.getElementById('menuButton');
const navLinks=document.getElementById('navLinks');
menuButton?.addEventListener('click',()=>{const opened=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(opened));});
navLinks?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
