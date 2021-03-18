var pe_vertex_posicao_b;
var pe_vertex_cor_b_esquerdo;
var pe_vertex_cor_b_direito;


function iniciar_buffer_posicao_pe(){

    pe_vertex_posicao_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, pe_vertex_posicao_b);

    vertices = [
        // Frente
        -0.8, -0.3,  0.2,
        0.2, -0.3,  0.2,
        0.2,  0.3,  0.2,
        -0.8,  0.3,  0.2,

        // Trás
        -0.8, -0.3, -0.2,
        -0.8,  0.3, -0.2,
        0.2,  0.3, -0.2,
        0.2, -0.3, -0.2,

        // Topo
        -0.8,  0.3, -0.2,
        -0.8,  0.3,  0.2,
        0.2,  0.3,  0.2,
        0.2,  0.3, -0.2,

        // Base
        -0.8, -0.3, -0.2,
        0.2, -0.3, -0.2,
        0.2, -0.3,  0.2,
        -0.8, -0.3,  0.2,

        // Direita
        0.2, -0.3, -0.2,
        0.2,  0.3, -0.2,
        0.2,  0.3,  0.2,
        0.2, -0.3,  0.2,

        // Esquerda
        -0.8, -0.3, -0.2,
        -0.8, -0.3,  0.2,
        -0.8,  0.3,  0.2,
        -0.8,  0.3, -0.2,
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
    
    var cores = cor_random_n(24)

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    pe_vertex_cor_b_direito.itemSize = 4;
    pe_vertex_cor_b_direito.numItems = 24; // cores diferentes para cada lado do triangulo

}

function iniciar_buffer_cor_pe_esquerdo(){

    pe_vertex_cor_b_esquerdo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, pe_vertex_cor_b_esquerdo);
    
    var cores = cor_random_n(24)

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    pe_vertex_cor_b_esquerdo.itemSize = 4;
    pe_vertex_cor_b_esquerdo.numItems = 24; // cores diferentes para cada lado do triangulo

}

var deslocamento_direito = 0;
function desenhar_pe_direito(){

    var translation = vec3.create();
    vec3.set(translation, 1+  deslocamento_direito, -1.6, 1.0); 

    mPushMatrix();
    mat4.translate(mMatrix, mMatrix, translation);


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


var deslocamento_esquerdo = 0;
function desenhar_pe_esquerdo(){

    
    var translation = vec3.create();
    vec3.set (translation, -0.5-deslocamento_esquerdo, -1.6, 1.0); 
    
    mPushMatrix();
    
    mat4.translate(mMatrix, mMatrix, translation);
    gl.bindBuffer(gl.ARRAY_BUFFER, pe_vertex_posicao_b);
    gl.vertexAttribPointer(
        
        shaderProgram.vertexPositionAttribute, 
        pe_vertex_posicao_b.itemSize, 
        gl.FLOAT, false, 0, 0
        
    );

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
teste_pe_esquerdo = false;
function animar_pe_esquerdo(){


    var agora = new Date().getTime();
    if(ultimo_pe != 0){
    
        var diferenca = agora - ultimo_pe;
        if(teste_pe_esquerdo == false){
            deslocamento_esquerdo  += ((90*diferenca)/100000.0);
        }
        if(teste_pe_esquerdo == true){
            deslocamento_esquerdo  -= ((90*diferenca)/100000.0);
        }

        /*if(deslocamento_esquerdo>=0.4){
            teste_pe_esquerdo = true;
            iniciar_buffer_cor_pe_esquerdo();
        }
        if(deslocamento_esquerdo<=0.0){
            teste_pe_esquerdo = false;
            iniciar_buffer_cor_pe_esquerdo();
        }*/

        if(r_corpo>=40){
            teste_pe_esquerdo = true;
            iniciar_buffer_cor_pe_esquerdo();
        }
        if(r_corpo<=-10){
            teste_pe_esquerdo = false;
            iniciar_buffer_cor_pe_esquerdo();
        }

    }

    ultimo_pe = agora;

}

ultimo_pe_esq = 0;
teste_pe_direito = false;
function animar_pe_direito(){


    var agora = new Date().getTime();
    if(ultimo_pe_esq != 0){
    
        var diferenca = agora - ultimo_pe_esq;
        if(teste_pe_direito == false){
            deslocamento_direito  += ((90*diferenca)/100000.0);
        }
        if(teste_pe_direito == true){
            deslocamento_direito  -= ((90*diferenca)/100000.0);
        }

        /*if(deslocamento_direito>=0.4){
            teste_pe_direito = true;
            iniciar_buffer_cor_pe_esquerdo();
        }
        if(deslocamento_direito<=0){
            teste_pe_direito = false;
            iniciar_buffer_cor_pe_direito();
        }*/

        if(r_corpo>=40){
            teste_pe_direito = true;
            iniciar_buffer_cor_pe_direito();
        }
        if(r_corpo<=-10){
            teste_pe_direito = false;
            iniciar_buffer_cor_pe_direito();
        }


    }

    ultimo_pe_esq = agora;

}