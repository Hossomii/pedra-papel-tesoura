// Em options.js

// --- CONTROLE DE VOLUME ---
const btnMudo = document.getElementById('btnMudo');
const btnMedio = document.getElementById('btnMedio');
const btnAlto = document.getElementById('btnAlto');

btnMudo.addEventListener('click', () => {
  localStorage.setItem('volumeLevel', '0');
  alert('Volume desativado!');
});

btnMedio.addEventListener('click', () => {
  localStorage.setItem('volumeLevel', '0.3');
  alert('Volume em 30%.');
});

btnAlto.addEventListener('click', () => {
  localStorage.setItem('volumeLevel', '1');
  alert('Volume em 100%');
});


// --- CONTROLE DE TEMA ---
const btnLight = document.getElementById('btnLight');
const btnDark = document.getElementById('btnDark');

btnLight.addEventListener('click', () => {
  localStorage.setItem('theme', 'soft');
  document.documentElement.classList.remove('light-mode'); 
  document.documentElement.classList.add('soft-mode'); 
  alert('Tema Suave ativado!');
});

btnDark.addEventListener('click', () => {
  localStorage.setItem('theme', 'dark');
  document.documentElement.classList.remove('soft-mode');
  document.documentElement.classList.remove('light-mode'); 
  alert('Tema Dark ativado!');
});