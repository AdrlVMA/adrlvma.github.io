var ultimo = 0;
var teste = false;
function animar(){


    var agora = new Date().getTime();
    if(ultimo != 0){
    
        var diferenca = agora - ultimo;
        if(teste == false){
            rPiramide  += ((90*diferenca)/1000.0) % 360.0;
        }
        if(teste == true){
            rPiramide  -= ((90*diferenca)/1000.0) % 360.0;
        }

        if(rPiramide>=180){
            teste = true;
            iniciar_buffer_cor_piramide();
        }
        if(rPiramide<=0){
            teste = false;
            iniciar_buffer_cor_piramide();
        }

    }

    ultimo = agora;

}

/*Função que converte graus para radianos.*/
function degToRad(graus) {

    return graus * Math.PI / 180;

}

function tick(){

    requestAnimFrame(tick);
    desenharCena();
    animar();

}