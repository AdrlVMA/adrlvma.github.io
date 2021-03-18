/*

Definição da textura e sua inicialização:

    1. Crie uma variável para guardar a textura:
        var predioTextura;

    2. Crie a Textura WebGl:
        predioTextura = gl.createTexture();

    3. Crie o objeto imagem que "carregará" uma imagem textura:
        predioTextura.image = new Image();

    4. Trate a textura apenas após seu completo carregamento:
        predioTextura.image.onload = function(){
          tratarTextura(predioTextura);
        }

    5. Defina a URL da imagem que se deseja carregar:
        predioTextura.image.src = "predio.jpg";

    6. Faça referência ao atributo uniform definido no shader de fragmento:
          shaderProgram.samplerUniform = gl.getUniformLocation(shaderProgram, 
        "uniform_texture_predio");

Tratamento da Textura:
    
    1. Faça a ligação da textura a uma textura bidimensional:
        gl.bindTexture(gl.TEXTURE_2D, textura);
    
    2. Defina o tipo de textura, o nível de detalhamento, o 
      espaço de cores do arquivo, o espaço de cores que que-
      remos mandar para o shader, o tamanho em bytes de cada 
      pixel e a referência para a matriz dos pixels (texels):
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, 
        gl.UNSIGNED_BYTE, textura.image);

    3. Configure o modo como será a visualização dos pixels 
      quando a camera estiver muito proxima a imagem:
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

      (borre a imagem com base nos pixels mais próximos - NEAREST, quando
       a imagem for vizualizada de perto - TEXTURE_MAG_FILTER.)

    4. Quando o poligono for visto de longe -TEXTURE_MIN_FILTER- reduza a 
    quantidade de pixels a serem mostrados:
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    
    5. Desvincule a textura:
        gl.bindTexture(gl.TEXTURE_2D, null);

*/


//-------------------------------------------------------------------------------------
// Inicialização de Textura
//-------------------------------------------------------------------------------------
var caixaTexturas = Array();

function iniciarTextura(){

     var imagemCaixa = new Image();
      for(var i = 0; i < 3; i++)
      {
        var textura = gl.createTexture();
        textura.image = imagemCaixa;
        caixaTexturas.push(textura);
      }
      imagemCaixa.onload = function()
      {
        tratarTextura(caixaTexturas);
      }
      imagemCaixa.src = "caixa.jpg";
      shaderProgram.samplerUniform = gl.getUniformLocation(shaderProgram, "uSampler");

}


//-------------------------------------------------------------------------------------
// Tratamento da Textura
//-------------------------------------------------------------------------------------
function tratarTextura(textura) {
    
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.bindTexture(gl.TEXTURE_2D, textura[0]);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textura[0].image);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);

  gl.bindTexture(gl.TEXTURE_2D, textura[1]);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textura[1].image);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

  gl.bindTexture(gl.TEXTURE_2D, textura[2]);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textura[2].image);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
  gl.generateMipmap(gl.TEXTURE_2D);

  gl.bindTexture(gl.TEXTURE_2D, null);

}

