/*Função que converte graus para radianos.*/
function degToRad(graus) {

    return graus * Math.PI / 180;

}

function tick(){

    requestAnimFrame(tick);

    tratarTeclado();

    desenharCena();

    animar_corpo();
    animar_rabo();
    animar_pe_direito();
    animar_pe_esquerdo();

    animar_nariz();
    

}