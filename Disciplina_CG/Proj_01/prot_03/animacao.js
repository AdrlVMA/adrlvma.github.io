var ultimo = 0;
function animar(){

    definindo_cores_triangulo();

    definido_cores_quadrado();

    definindo_cores_circulo();

    wait(900); 

}

/*Função que converte graus para radianos.
function degToRad(graus) {

    return graus * Math.PI / 180;

}*/

function tick(){

    requestAnimFrame(tick);
    desenharCena();
    animar();

}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

