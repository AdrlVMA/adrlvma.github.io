var ultimo = 0;
function animar(){


    var agora = new Date().getTime();
    if(ultimo != 0){
    
        var diferenca = agora - ultimo;
        rPiramide  += ((90*diferenca)/1000.0) % 360.0;
    
    }

    ultimo = agora;

}

/*Função que converte graus para radianos.*/
function degToRad(graus) {

    return graus * Math.PI / 180;

}

aux_cor = 0;
function tick(){

    requestAnimFrame(tick);
    desenharCena();
    animar();

    
    if(aux_cor == 10){
        iniciar_buffer_cor_piramide();
        console.log("Troca cor")
        aux_cor = 0;
    }
    aux_cor = aux_cor + 1;

}