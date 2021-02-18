//guardar o ângulo de rotação em uma variável
var rPiramide = 0;
var rCubo = 0;

var ultimo = 0;
function animar(){
    
    /*A cada chamada, guarde o tempo atual, compare-o 
    com o da última e o utiliza como peso para fazer
    experiencias iguais para um computador rápido e 
    um computador lento. Maior a diferença maior o 
    angulo de rotação, menor a diferença, menor o 
    angulo de rotação.*/

    var agora = new Date().getTime();
    if(ultimo != 0){
    
        var diferenca = agora - ultimo;
        rPiramide  += ((90*diferenca)/1000.0) % 360.0;
        rCubo += ((75*diferenca)/1000.0) % 360.0;
    
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