function ativarDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
}

function desativarDarkMode(){
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'disabled');
}

function aplicarDarkModeSalvo() {
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'enabled') {
    document.body.classList.add('dark-mode');
  }
}

window.addEventListener("load", () => {
    aplicarDarkModeSalvo(); // aplica o modo salvo em todas as páginas

    const btnAtivar = document.getElementById("ativar");
    const btnDesativar = document.getElementById("desativar");

    if(btnAtivar) btnAtivar.addEventListener("click", ativarDarkMode);
    if(btnDesativar) btnDesativar.addEventListener("click", desativarDarkMode);
});
