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
  if (escolha == "pedra") {
    if (computerMove == "pedra") {
      resultado = "empate";
    } else if (computerMove == "papel") {
      resultado = "você perdeu";
    } else {
      resultado = "você ganhou";
    }
  }

  if (escolha == "papel") {
    if (computerMove == "pedra") {
      resultado = "você ganhou";
    } else if (computerMove == "papel") {
      resultado = "empate";
    } else {
      resultado = "você perdeu";
    }
  }

  if (escolha == "tesoura") {
    if (computerMove == "pedra") {
      resultado = "você perdeu";
    } else if (computerMove == "papel") {
      resultado = "você ganhou";
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
  const opcoes = ["pedra", "papel", "tesoura"];
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
  const soundToPlay = resultado === 'você perdeu' ? "gameover.wav" : "win.wav";
  playSound(soundToPlay); // Chama a função e usa o resultado como parametro para tocar o áudio correto
}

function verificarConquista(vitorias) {

  for (let item of conquistas) {
    if (vitorias === item.vitorias && !item.desbloqueada) {
      item.desbloqueada = true;
      exibirConquista(item.texto);
      playSound("conquista.wav");
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
