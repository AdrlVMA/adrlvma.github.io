/*Função que converte graus para radianos.*/
function degToRad(graus) {

    return graus * Math.PI / 180;

}

var ultimo = new Date().getTime();
function tick(){
    var agora = new Date().getTime();

    requestAnimFrame(tick);

    if((agora-ultimo)<5000){
       definindo_cores_vermelho(true);
       definindo_cores_amarelo(false);
       definindo_cores_verde(false);
        //console.log("eu1");
    }else if((agora-ultimo)<8000){
        definindo_cores_vermelho(false);
        definindo_cores_amarelo(false)
        definindo_cores_verde(true);
        //console.log("eu2");
    }else if((agora-ultimo)<=10000){
        definindo_cores_vermelho(false);
        definindo_cores_amarelo(true);
        definindo_cores_verde(false);
        //console.log("eu3");
    }else {
        ultimo = agora;
    }
    
    
    desenharCena();

    //desenhar_corpo();

}