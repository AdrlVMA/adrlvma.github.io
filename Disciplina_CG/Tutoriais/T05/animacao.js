/*

     Para mudar animação para o novo padrão de 3 eixos, retire as variáveis 
    relacionadas ao cubo e pirâmidee adicione às variáveis relacionadas aos 
    eixos xRot, yRot e zRot. 

*/

var ultimo = 0;
function animar(){


  var agora = new Date().getTime();
  if(ultimo != 0){

    var diferenca = agora-ultimo;

    xRot  += ((90*diferenca)/1000.0) % 360.0;
    yRot  += ((75*diferenca)/1000.0) % 360.0;
    zRot  += ((50*diferenca)/1000.0) % 360.0;

  }

  ultimo = agora;


}


function degToRad(graus) {

    return graus * Math.PI / 180;

}

function tick(){

    requestAnimFrame(tick);
    desenharCena();
    animar();

}