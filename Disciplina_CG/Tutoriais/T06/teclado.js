
function tratarTeclado() {

    if (teclasPressionadas[33]) {
      // Page Up
      z -= 0.05;
    }
    if (teclasPressionadas[34]) {
      // Page Down
      z += 0.05;
    }
    if (teclasPressionadas[37]) {
      // Esquerda
      yVelo -= 1;
    }
    if (teclasPressionadas[39]) {
      // Direita
      yVelo += 1;
    }
    if (teclasPressionadas[38]) {
      // Cima
      xVelo -= 1;
    }
    if (teclasPressionadas[40]) {
      // Baixo
      xVelo += 1;
    }

  }

var teclasPressionadas = {};

function eventoTeclaPress(evento) {
  teclasPressionadas[evento.keyCode] = true;

  if (String.fromCharCode(evento.keyCode) == "F")
    filtro = (filtro+1) % 3;
}

function eventoTeclaSolta(evento) {
  teclasPressionadas[evento.keyCode] = false;
}