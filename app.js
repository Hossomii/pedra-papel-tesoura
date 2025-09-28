// Variáveis Principais
let numeroDeVitorias = 0;
let empates = 0;

// Array de conquistas
let conquistas = [
  {
    vitorias: 3,
    desbloqueada: false,
    texto: "🥉 Conquista básica desbloqueada: Você venceu 3 vezes seguidas!",
  },
  {
    vitorias: 5,
    desbloqueada: false,
    texto:
      "🥈 Conquista intermediária desbloqueada: Você venceu 5 vezes seguidas!",
  },
  {
    vitorias: 10,
    desbloqueada: false,
    texto:
      "🏅 Conquista LENDÁRIA desbloqueada: Você venceu 10 vezes seguidas, parabéns!",
  },
];

// Referenciando o popup
let conquistaPopUp = document.querySelector(".conquistaPopUp");
conquistaPopUp.style.display = "none";

// Função principal do jogo
function escolhaPlayer(escolha) {
  const computerMove = escolhaComputador();

  let textNumVitorias = document.querySelector(".textNumVitorias");
  let textNumEmpates = document.querySelector(".textNumEmpates");
  let desbloqueouConquista = false;
  let resultado = "";

  // Lógica do Jogo
  if (escolha == "firewall") {
    if (computerMove == "firewall") {
      resultado = "empate";
    } else if (computerMove == "vírus") {
      resultado = "você ganhou";
    } else {
      resultado = "você perdeu";
    }
  }

  if (escolha == "vírus") {
    if (computerMove == "firewall") {
      resultado = "você perdeu";
    } else if (computerMove == "vírus") {
      resultado = "empate";
    } else {
      resultado = "você ganhou";
    }
  }

  if (escolha == "código") {
    if (computerMove == "firewall") {
      resultado = "você ganhou";
    } else if (computerMove == "vírus") {
      resultado = "você perdeu";
    } else {
      resultado = "empate";
    }
  }

  // Atualiza o número de vitórias consecutivas
  if (resultado === "você ganhou") {
    numeroDeVitorias++;
    textNumVitorias.innerHTML = `Vitórias: ${numeroDeVitorias}`;
  } 
  else if (resultado === "você perdeu") {
    numeroDeVitorias = 0; // Zera se perder
    textNumVitorias.innerHTML = `Vitórias: 0`;
  } 

  if (resultado === "empate") {
    empates++;
    textNumEmpates.innerHTML = `Empates: ${empates}`;
  }

  console.log("Vitorias: ", numeroDeVitorias);

  // Verifica conquistas
  desbloqueouConquista = verificarConquista(numeroDeVitorias);

  // Só toca o áudio normal se não houver conquista
  if (!desbloqueouConquista) {
    audio(resultado);
  }

  // Atualiza o resultado na tela
  let divResultado = document.querySelector(".resultado");
  divResultado.innerHTML = `O Computador escolheu: ${computerMove}<br>Você escolheu: ${escolha}<br>O resultado foi: <span class = 'textoResultado'>${resultado}</span>`;
  resultStyle();
}

// Função para escolha aleatória do computador 
function escolhaComputador() {
  const opcoes = ["firewall", "vírus", "código"];
  return opcoes[Math.floor(Math.random() * 3)];
}

function resultStyle() {
  const divTextResult = document.querySelector("div.resultado");
  divTextResult.style.color = "white";
  divTextResult.style.fontSize = "10pt";
  divTextResult.style.textTransform = "capitalize";
  divTextResult.style.fontFamily = "Bungee";
}

// Função de áudio
function audio(resultado) {
  (resultado === 'você perdeu' ? new Audio("gameover.wav") : new Audio("win.wav")).play(); // Operador ternário
}

function verificarConquista(vitorias) {
  let conquista = new Audio("conquista.wav");

  for (let item of conquistas) {
    if (vitorias === item.vitorias && !item.desbloqueada) {
      item.desbloqueada = true;
      exibirConquista(item.texto);
      conquista.play();
      return true;
    }
  }
  return false;
}

// Exibe a conquista para o usuário
function exibirConquista(texto) {
  conquistaPopUp.style.display = "flex";
  conquistaPopUp.style.color = "white";
  conquistaPopUp.innerHTML = ` ${texto} `;


  conquistaPopUp.classList.add("mostrar"); // Adiciona a classe que está ligada ao css de transição

  setTimeout(() => {
    conquistaPopUp.classList.remove("mostrar"); 
    setTimeout(() => {
      conquistaPopUp.style.display = "none";
    }, 500);
  }, 3000); 
}
