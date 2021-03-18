var nariz_vertex_position_b;
var nariz_vertex_cor_b;

r_nariz = 0;

function iniciar_buffer_posicao_nariz(){

    rabnariz_vertex_position_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, rabnariz_vertex_position_b);

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
    rabnariz_vertex_position_b.itemSize = 3;
    rabnariz_vertex_position_b.numItems = 12;

}


function iniciar_buffer_cor_nariz(){

    rabnariz_vertex_cor_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, rabnariz_vertex_cor_b);
    
    var cores = cores = cor_random_vertice(12)

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    rabnariz_vertex_cor_b.itemSize = 4;
    rabnariz_vertex_cor_b.numItems = 12; // cores diferentes para cada lado do triangulo

}

function desenha_nariz(){

    // Desenhando Triângulo
    var translation = vec3.create();
    vec3.set (translation, -5.4, 6.8, -20.0); 
    
    mPushMatrix();

    mat4.translate(mMatrix, mMatrix, translation);
    
    
    mat4.rotate(mMatrix, mMatrix, degToRad(r_nariz), [1, -1, -1]);   // Aplica rotação

    gl.bindBuffer(gl.ARRAY_BUFFER, rabnariz_vertex_position_b);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, rabnariz_vertex_position_b.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, rabnariz_vertex_cor_b);
    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, rabnariz_vertex_cor_b.itemSize, gl.FLOAT, false, 0, 0);
    
    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLES, 0, rabnariz_vertex_position_b.numItems);
    mPopMatrix();

}

var ultimo_nariz = 0;
var teste_nariz = false;
function animar_nariz(){


    var agora = new Date().getTime();
    if(ultimo_nariz != 0){
    
        var diferenca = agora - ultimo_nariz;
        if(teste_nariz == false){
            r_nariz  += ((90*diferenca)/100.0) % 360.0;
        }
        if(teste_nariz == true){
            r_nariz  -= ((90*diferenca)/1000.0) % 360.0;
        }

        /*if(r_rabo >= 180){
            teste_rabo = true;
            iniciar_buffer_cor_rabo();
        }
        if(r_rabo <= -10){
            teste_rabo = false;
            iniciar_buffer_cor_rabo();
        }*/

    }

    ultimo_nariz = agora;

}