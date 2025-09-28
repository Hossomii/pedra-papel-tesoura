function playSound(soundFile) {
  // Lê o volume salvo. Se não houver nada o padrão será '1' (100%)
  const volumeLevel = localStorage.getItem('volumeLevel') || '1';

  // Se o volume for '0' (Mudo), a função para aqui e não toca nada.
  if (volumeLevel === '0') {
    return;
  }

  // Cria o objeto de áudio com o arquivo de som pedido (ex: 'win.wav').
  const audio = new Audio(soundFile);

  audio.volume = parseFloat(volumeLevel);

  audio.play();
}