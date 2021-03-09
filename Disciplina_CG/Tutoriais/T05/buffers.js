/*

Definição das coordenadas relcionadas a textura:

    1. Crie um buffer para guardar as coordenadas de textura:
        cuboVertexTextureCoordBuffer = gl.createBuffer();

    2. Defina esse buffer como um ARRAY_BUFFER como cor e posição:
        gl.bindBuffer(gl.ARRAY_BUFFER, cuboVertexTextureCoordBuffer);

    3. Defina o vetor de coordenadas de textura:
        var coordTextura = [...];

        0.0 - Lado esquerdo da Textura
        1.0 - Lado direito da Textura

    4. Defina a dimensão e o número de ítens do vetor:
        cuboVertexTextureCoordBuffer.itemSize = 2;
        cuboVertexTextureCoordBuffer.numItems = 24;

*/

// Triângulo
var piramideVertexPositionBuffer;   
var piramideVertexColorBuffer;

// Quadrado            
var cuboVertexPositionBuffer;
var cuboVertexColorBuffer;

// Buffer de índices
var cuboVertexIndexBuffer;

var cuboVertexTextureCoordBuffer;



//-------------------------------------------------------------------------------------
// Métodos de definição da Piramide
//-------------------------------------------------------------------------------------
function iniciar_buffer_textura_cubo(){


    cuboVertexTextureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cuboVertexTextureCoordBuffer);

    var coordTextura = [

        // Frente
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        // Trás
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,

        // Topo
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,

        // Base
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,

        // Direita
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,

        // Esquerda
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(coordTextura), gl.STATIC_DRAW);
    cuboVertexTextureCoordBuffer.itemSize = 2;
    cuboVertexTextureCoordBuffer.numItems = 24;


}

//-------------------------------------------------------------------------------------
// Fluxo de chamada dos métodos
//-------------------------------------------------------------------------------------
function iniciarBuffers(){

    iniciar_buffer_posicao_piramide();
    iniciar_buffer_cor_piramide();

    iniciar_buffer_posicao_cubo();
    iniciar_buffer_cor_cubo();

    iniciar_buffer_index_piramide();

    iniciar_buffer_textura_cubo();
}

//-------------------------------------------------------------------------------------
// Métodos de definição do Cubo
//-------------------------------------------------------------------------------------
function iniciar_buffer_cor_cubo(){

    cuboVertexColorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cuboVertexColorBuffer);

    cores = [
        [1.0, 0.0, 0.0, 1.0],     // Frente
        [1.0, 1.0, 0.0, 1.0],     // Trás
        [0.0, 1.0, 0.0, 1.0],     // Topo
        [1.0, 0.5, 0.5, 1.0],     // Base
        [1.0, 0.0, 1.0, 1.0],     // Direita
        [0.0, 0.0, 1.0, 1.0],     // Esquerda
    ];

    var coresReplicadas = [];
    for (var i in cores) {
        var cor = cores[i];
        for (var j=0; j < 4; j++) {
            coresReplicadas = coresReplicadas.concat(cor);
        }
    }

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(coresReplicadas), gl.STATIC_DRAW);
    cuboVertexColorBuffer.itemSize = 4;
    cuboVertexColorBuffer.numItems = 24;

}

function iniciar_buffer_posicao_cubo(){
    cuboVertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cuboVertexPositionBuffer);
    vertices = [
        // Frente
        -1.0, -1.0,  1.0,
        1.0, -1.0,  1.0,
        1.0,  1.0,  1.0,
        -1.0,  1.0,  1.0,

        // Trás
        -1.0, -1.0, -1.0,
        -1.0,  1.0, -1.0,
        1.0,  1.0, -1.0,
        1.0, -1.0, -1.0,

        // Topo
        -1.0,  1.0, -1.0,
        -1.0,  1.0,  1.0,
        1.0,  1.0,  1.0,
        1.0,  1.0, -1.0,

        // Base
        -1.0, -1.0, -1.0,
        1.0, -1.0, -1.0,
        1.0, -1.0,  1.0,
        -1.0, -1.0,  1.0,

        // Direita
        1.0, -1.0, -1.0,
        1.0,  1.0, -1.0,
        1.0,  1.0,  1.0,
        1.0, -1.0,  1.0,

        // Esquerda
        -1.0, -1.0, -1.0,
        -1.0, -1.0,  1.0,
        -1.0,  1.0,  1.0,
        -1.0,  1.0, -1.0,
    ];

    /* STATIC_DRAW significa que não iremos jogar
    os dados da GPU para a CPU, apenas da CPU para 
    a GPU.                                      */
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    cuboVertexPositionBuffer.itemSize = 3;
    cuboVertexPositionBuffer.numItems = 24; 

}

//-------------------------------------------------------------------------------------
// Métodos de definição da Piramide
//-------------------------------------------------------------------------------------
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
    var cores = [
        // Frente
        1.0, 0.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        // Direita
        1.0, 0.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        // Trás
        1.0, 0.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        // Esquerda
        1.0, 0.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        0.0, 1.0, 0.0, 1.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    piramideVertexColorBuffer.itemSize = 4;
    piramideVertexColorBuffer.numItems = 12; // cores diferentes para cada lado do triangulo

}

function iniciar_buffer_index_piramide(){

    cuboVertexIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cuboVertexIndexBuffer);
    var indices = [
        0, 1, 2,      0, 2, 3,    // Frente
        4, 5, 6,      4, 6, 7,    // Trás
        8, 9, 10,     8, 10, 11,  // Topo
        12, 13, 14,   12, 14, 15, // Base
        16, 17, 18,   16, 18, 19, // Direita
        20, 21, 22,   20, 22, 23  // Esquerda
    ];


    /*os índices geralmente são guardados como 
    inteiros não-negativos de 1 byte - UNSIGNED_BYTE - 
    ou
    2 bytes - UNSIGNED_SHORT                        */

    /*Lembra do UNSIGNED_SHORT? Ele usa 2 bytes 
    (16 bits), por isso estamos usando Uint16Array.*/
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    cuboVertexIndexBuffer.itemSize = 1;
    cuboVertexIndexBuffer.numItems = 36;
}