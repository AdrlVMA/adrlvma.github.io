var cabeca_vertex_posicao_b;
var cabeca_vertex_cor_b;

var r_cabeca = 0;

function iniciar_buffer_posicao_cabeca(){

    cabeca_vertex_posicao_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cabeca_vertex_posicao_b);

    vertices = [
        // Frente
        -1.5, -1.0,  1.0,
        1.0, -1.0,  1.0,
        1.0,  1.0,  1.0,
        -1.5,  1.0,  1.0,

        // Trás
        -1.5, -1.0, -1.0,
        -1.5,  1.0, -1.0,
        1.0,  1.0, -1.0,
        1.0, -1.0, -1.0,

        // Topo
        -1.5,  1.0, -1.0,
        -1.5,  1.0,  1.0,
        1.0,  1.0,  1.0,
        1.0,  1.0, -1.0,

        // Base
        -1.5, -1.0, -1.0,
        1.0, -1.0, -1.0,
        1.0, -1.0,  1.0,
        -1.5, -1.0,  1.0,

        // Direita
        1.0, -1.0, -1.0,
        1.0,  1.0, -1.0,
        1.0,  1.0,  1.0,
        1.0, -1.0,  1.0,

        // Esquerda
        -1.5, -1.0, -1.0,
        -1.5, -1.0,  1.0,
        -1.5,  1.0,  1.0,
        -1.5,  1.0, -1.0,
    ];

    /* STATIC_DRAW significa que não iremos jogar
    os dados da GPU para a CPU, apenas da CPU para 
    a GPU.                                      */
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    cabeca_vertex_posicao_b.itemSize = 3;
    cabeca_vertex_posicao_b.numItems = 24; 

}

function iniciar_buffer_cor_cabeca(){

    cabeca_vertex_cor_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cabeca_vertex_cor_b);
    
    var cores = cor_random_n(24)

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    cabeca_vertex_cor_b.itemSize = 4;
    cabeca_vertex_cor_b.numItems = 24; // cores diferentes para cada lado do triangulo

}

function desenhar_cabeca(){

    var translation_cabeca = vec3.create();
    vec3.set (translation_cabeca, -1.2, 3.5, -8.0); 

    mPushMatrix();
    //vec3.set (translation, -1.0, 3.0, -8.0); 
    mat4.translate(mMatrix, mMatrix, translation_cabeca);
    gl.bindBuffer(gl.ARRAY_BUFFER, cabeca_vertex_posicao_b);
    gl.vertexAttribPointer(
        
        shaderProgram.vertexPositionAttribute, 
        cabeca_vertex_posicao_b.itemSize, 
        gl.FLOAT, false, 0, 0
        
    );

    mat4.rotate(mMatrix, mMatrix, degToRad(r_corpo), [1, 0, 0]);   // Aplica rotação

    gl.bindBuffer(gl.ARRAY_BUFFER, cabeca_vertex_cor_b);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        cabeca_vertex_cor_b.itemSize,
        gl.FLOAT, false, 0, 0

    );


    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, cabeca_vertex_posicao_b.numItems);

}

var ultimo = 0;
var teste = false;
function animar_cabeca(){


    var agora = new Date().getTime();
    if(ultimo != 0){
    
        var diferenca = agora - ultimo;
        if(teste == false){
            r_cabeca  += ((90*diferenca)/1000.0) % 360.0;
        }
        if(teste == true){
            r_cabeca  -= ((90*diferenca)/1000.0) % 360.0;
        }

        if(r_cabeca>=40){
            teste = true;
            iniciar_buffer_cor_piramide();
        }
        if(r_cabeca<=-10){
            teste = false;
            iniciar_buffer_cor_piramide();
        }

    }

    ultimo = agora;

}