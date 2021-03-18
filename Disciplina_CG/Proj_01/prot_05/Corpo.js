
var piramideVertexPositionBuffer;   
var piramideVertexColorBuffer;

var r_corpo = 0;

function iniciar_buffer_posicao_piramide(){

    /*Para o triângulo, precisamos de 3 vértices 
    (guardado em numItems) de 3 dimensões (guardado 
    em itemSize).                               */
    piramideVertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, piramideVertexPositionBuffer);

    var vertices = [
        // Frente
         0.0,  1.0,  0.0,
        -1.0, -1.0,  1.0,
         1.0, -1.0,  1.0,
        // Direita
        0.0,  1.0,  0.0,
        1.0, -1.0,  1.0,
        1.0, -1.0, -1.0,
        // Trás
         0.0,  1.0,  0.0,
         1.0, -1.0, -1.0,
        -1.0, -1.0, -1.0,
        // Esquerda
         0.0,  1.0,  0.0,
        -1.0, -1.0, -1.0,
        -1.0, -1.0,  1.0
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    piramideVertexPositionBuffer.itemSize = 3;
    piramideVertexPositionBuffer.numItems = 12;

}

function iniciar_buffer_cor_piramide(){

    piramideVertexColorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, piramideVertexColorBuffer);
    
    var cores = cores = cor_random_vertice(12)

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    piramideVertexColorBuffer.itemSize = 4;
    piramideVertexColorBuffer.numItems = 12; // cores diferentes para cada lado do triangulo

}

function desenha_Piramide(){

    // Desenhando Triângulo
    var translation = vec3.create();
    vec3.set (translation, 0.0, 0.0, -7.0); 
    mat4.translate(mMatrix, mMatrix, translation);

    mPushMatrix();
    
    mat4.rotate(mMatrix, mMatrix, degToRad(r_corpo), [0, 1, 0]);   // Aplica rotação

    gl.bindBuffer(gl.ARRAY_BUFFER, piramideVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, piramideVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, piramideVertexColorBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, piramideVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
    
    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLES, 0, piramideVertexPositionBuffer.numItems);

    mPopMatrix();

}

var ultimo = 0;
var teste = false;
function animar_corpo(){


    var agora = new Date().getTime();
    if(ultimo != 0){
    
        var diferenca = agora - ultimo;
        if(teste == false){
            r_corpo  += ((90*diferenca)/1000.0) % 360.0;
        }
        
        if(teste == true){
            r_corpo  -= ((90*diferenca)/1000.0) % 360.0;
        }

        if(r_corpo>=40){
            teste = true;
            iniciar_buffer_cor_piramide();
        }
        if(r_corpo<=-10){
            teste = false;
            iniciar_buffer_cor_piramide();
        }

    }

    ultimo = agora;

}