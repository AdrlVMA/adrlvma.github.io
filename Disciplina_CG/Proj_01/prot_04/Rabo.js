var rabo_vertex_position_b;
var rabo_vertex_cor_b;

r_rabo = 0;

function iniciar_buffer_posicao_rabo(){

    rabo_vertex_position_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, rabo_vertex_position_b);

    var vertices = [
        // Frente
        0.0,  -1.0,  0.0,
        -1.0, 1.0,  1.0,
        1.0, 1.0,  1.0,
        // Direita
        0.0,  -1.0,  0.0,
        1.0, 1.0,  1.0,
        1.0, 1.0, -1.0,
        // Trás
        0.0,  -1.0,  0.0,
        1.0, 1.0, -1.0,
        -1.0, 1.0, -1.0,
        // Esquerda
        0.0,  -1.0,  0.0,
        -1.0, 1.0, -1.0,
        -1.0, 1.0,  1.0
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    rabo_vertex_position_b.itemSize = 3;
    rabo_vertex_position_b.numItems = 12;

}


function iniciar_buffer_cor_rabo(){

    rabo_vertex_cor_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, rabo_vertex_cor_b);
    
    var cores = cores = cor_random_vertice(12)

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    rabo_vertex_cor_b.itemSize = 4;
    rabo_vertex_cor_b.numItems = 12; // cores diferentes para cada lado do triangulo

}

function desenha_rabo(){

    // Desenhando Triângulo
    var translation = vec3.create();
    vec3.set (translation, 4, -1.5, -10.0); 
    mat4.translate(mMatrix, mMatrix, translation);
    
    mPushMatrix();
    mat4.rotate(mMatrix, mMatrix, degToRad(r_rabo), [0, 1, 0]);   // Aplica rotação

    gl.bindBuffer(gl.ARRAY_BUFFER, rabo_vertex_position_b);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, rabo_vertex_position_b.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, rabo_vertex_cor_b);
    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, rabo_vertex_cor_b.itemSize, gl.FLOAT, false, 0, 0);
    
    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLES, 0, rabo_vertex_position_b.numItems);
    mPopMatrix();

}

var ultimo_rabo = 0;
var teste_rabo = false;
function animar_rabo(){


    var agora = new Date().getTime();
    if(ultimo_rabo != 0){
    
        var diferenca = agora - ultimo_rabo;
        if(teste_rabo == false){
            r_rabo  += ((90*diferenca)/1000.0) % 360.0;
        }
        if(teste_rabo == true){
            r_rabo  -= ((90*diferenca)/1000.0) % 360.0;
        }

        if(r_rabo >= 180){
            teste_rabo = true;
            iniciar_buffer_cor_rabo();
        }
        if(r_rabo <= 0){
            teste_rabo = false;
            iniciar_buffer_cor_rabo();
        }

    }

    ultimo_rabo = agora;

}