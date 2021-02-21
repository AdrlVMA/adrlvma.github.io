var pe_vertex_posicao_b;
var pe_vertex_cor_b_esquerdo;
var pe_vertex_cor_b_direito;


function iniciar_buffer_posicao_pe(){

    pe_vertex_posicao_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, pe_vertex_posicao_b);

    vertices = [
        // Frente
        -2.0, -1.0,  1.0,
        1.0, -1.0,  1.0,
        1.0,  1.0,  1.0,
        -2.0,  1.0,  1.0,

        // Trás
        -2.0, -1.0, -1.0,
        -2.0,  1.0, -1.0,
        1.0,  1.0, -1.0,
        1.0, -1.0, -1.0,

        // Topo
        -2.0,  1.0, -1.0,
        -2.0,  1.0,  1.0,
        1.0,  1.0,  1.0,
        1.0,  1.0, -1.0,

        // Base
        -2.0, -1.0, -1.0,
        1.0, -1.0, -1.0,
        1.0, -1.0,  1.0,
        -2.0, -1.0,  1.0,

        // Direita
        1.0, -1.0, -1.0,
        1.0,  1.0, -1.0,
        1.0,  1.0,  1.0,
        1.0, -1.0,  1.0,

        // Esquerda
        -2.0, -1.0, -1.0,
        -2.0, -1.0,  1.0,
        -2.0,  1.0,  1.0,
        -2.0,  1.0, -1.0,
    ];

    /* STATIC_DRAW significa que não iremos jogar
    os dados da GPU para a CPU, apenas da CPU para 
    a GPU.                                      */
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    pe_vertex_posicao_b.itemSize = 3;
    pe_vertex_posicao_b.numItems = 24; 

}

function iniciar_buffer_cor_pe_direito(){

    pe_vertex_cor_b_direito = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, pe_vertex_cor_b_direito);
    
    var cores = cor_random_fixa(24)

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    pe_vertex_cor_b_direito.itemSize = 4;
    pe_vertex_cor_b_direito.numItems = 24; // cores diferentes para cada lado do triangulo

}

function iniciar_buffer_cor_pe_esquerdo(){

    pe_vertex_cor_b_esquerdo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, pe_vertex_cor_b_esquerdo);
    
    var cores = cor_random_fixa(24)

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    pe_vertex_cor_b_esquerdo.itemSize = 4;
    pe_vertex_cor_b_esquerdo.numItems = 24; // cores diferentes para cada lado do triangulo

}

var deslocamento = 0;
function desenhar_pe_direito(){

    var translation = vec3.create();
    vec3.set(translation, 4.0+2*deslocamento, 0.0, 0.0); 
    mat4.translate(mMatrix, mMatrix, translation);

    mPushMatrix();

    gl.bindBuffer(gl.ARRAY_BUFFER, pe_vertex_posicao_b);
    gl.vertexAttribPointer(
        
        shaderProgram.vertexPositionAttribute, 
        pe_vertex_posicao_b.itemSize, 
        gl.FLOAT, false, 0, 0
        
    );


    gl.bindBuffer(gl.ARRAY_BUFFER, pe_vertex_cor_b_direito);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        pe_vertex_cor_b_direito.itemSize,
        gl.FLOAT, false, 0, 0

    );


    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, pe_vertex_posicao_b.numItems);
    mPopMatrix();
}

function desenhar_pe_esquerdo(){

    
    var translation = vec3.create();
    vec3.set (translation, -5.0-deslocamento, -3, 0.0); 
    mat4.translate(mMatrix, mMatrix, translation);
    gl.bindBuffer(gl.ARRAY_BUFFER, pe_vertex_posicao_b);
    gl.vertexAttribPointer(
        
        shaderProgram.vertexPositionAttribute, 
        pe_vertex_posicao_b.itemSize, 
        gl.FLOAT, false, 0, 0
        
    );
    mPushMatrix();

    gl.bindBuffer(gl.ARRAY_BUFFER, pe_vertex_cor_b_esquerdo);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        pe_vertex_cor_b_esquerdo.itemSize,
        gl.FLOAT, false, 0, 0

    );

    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, pe_vertex_posicao_b.numItems);
    mPopMatrix();

}

ultimo_pe = 0;
teste_pe = false;
function animar_pe(){


    var agora = new Date().getTime();
    if(ultimo_pe != 0){
    
        var diferenca = agora - ultimo_pe;
        if(teste_pe == false){
            deslocamento  += ((90*diferenca)/10000.0); //% 360.0;
        }
        if(teste_pe == true){
            deslocamento  -= ((90*diferenca)/10000.0); //% 360.0;
        }

        if(deslocamento>=4){
            teste_pe = true;
            iniciar_buffer_cor_pe_esquerdo();
        }
        if(deslocamento<=-1){
            teste_pe = false;
            iniciar_buffer_cor_pe_direito();
        }

    }

    ultimo_pe = agora;

}