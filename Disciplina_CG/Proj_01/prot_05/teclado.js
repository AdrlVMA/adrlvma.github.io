
x_desloc_rabo_p = 0;
y_desloc_rabo_p = 0;
z_desloc_rabo_p = 0;

x_desloc_rabo_n = 0;
y_desloc_rabo_n = 0;
z_desloc_rabo_n = 0;

x_desloc_nariz = 0;
y_desloc_nariz = 0;
z_desloc_nariz = 0;

x_desloc_boca = 0;
y_desloc_boca = 0;
z_desloc_nariz = 0;

velo_rabo = 1;
x = 45;

function tratarTeclado() {

    if (teclasPressionadas[33]) {
      // Page Up
      z_desloc_rabo_p += 10;

    }
    if (teclasPressionadas[34]) {
      // Page Down
      z_desloc_rabo_n += 1;

    }
    if (teclasPressionadas[37]) {
      // Esquerda
      x_desloc_rabo_n += 1;
    }
    if (teclasPressionadas[39]) {
      // Direita
      x_desloc_rabo_p += 1;
    }
    if (teclasPressionadas[38]) {
      // Cima
      y_desloc_rabo_p += 1;
    }
    if (teclasPressionadas[40]) {
      // Baixo
      y_desloc_rabo_n += 1;
    }
    if (teclasPressionadas[87]) {
        // W
        y_desloc_boca += 0.005;
    }
    if (teclasPressionadas[65]) {
        // A
        definindo_cores_circulo_2();
    }
    if (teclasPressionadas[83]) {
        // S
        y_desloc_boca -= 0.005;
    }
    if (teclasPressionadas[68]) {
        // D
        definindo_cores_circulo();
    }
    if (teclasPressionadas[66]) {
        // B
        definido_cores_quadrado();
    }
    if (teclasPressionadas[67]) {
        // c
        x -= 1;
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