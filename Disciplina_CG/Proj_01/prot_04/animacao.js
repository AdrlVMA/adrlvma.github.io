/*Função que converte graus para radianos.*/
function degToRad(graus) {

    return graus * Math.PI / 180;

}

function tick(){

    requestAnimFrame(tick);
    desenharCena();

    animar_corpo();
    animar_rabo();
    animar_pe();
    

}