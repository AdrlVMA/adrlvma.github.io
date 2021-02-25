var corpo_vertex_position_b;
var corpo_vertex_cor_b;


function criando_corpo(){

    // Definindo vértices e configurações do buffer - Quadrado 01 Cabeça
    corpo_vertex_position_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, corpo_vertex_position_b);

    var q_01_vertices = [
        
        3.0,  12.0, 0.0,
        -3.0,  12.0, 0.0, 
        3.0, -6.0, 0.0, 
        -3.0, -6.0, 0.0 

    ];

    gl.bufferData(

        gl.ARRAY_BUFFER, 
        new Float32Array(q_01_vertices),
        gl.STATIC_DRAW

    );

    corpo_vertex_position_b.itemSize = 3;
    corpo_vertex_position_b.numItems = 4;

}


function definido_cores_corpo(){

    corpo_vertex_cor_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, corpo_vertex_cor_b);

    a1 = 0
    a2 = 0
    a3 = 0

    cores = []
    for (var i=0; i < 4; i++) {
        cores = cores.concat([a1, a2, a3, 1.0]);
    }
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    
    corpo_vertex_cor_b.itemSize = 4;
    corpo_vertex_cor_b.numItems = 4;

}

function desenhar_corpo(){

    // Criando a cabeça 
    var translation = vec3.create();
    vec3.set (translation, 0.0, 0, -35.0); 
    mat4.translate(mMatrix, mMatrix, translation);
    gl.bindBuffer(gl.ARRAY_BUFFER, corpo_vertex_position_b);
    gl.vertexAttribPointer(
        
        shaderProgram.vertexPositionAttribute, 
        corpo_vertex_position_b.itemSize, 
        gl.FLOAT, false, 0, 0
        
    );

    gl.bindBuffer(gl.ARRAY_BUFFER, corpo_vertex_cor_b);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        corpo_vertex_cor_b.itemSize,
        gl.FLOAT, false, 0, 0

    );

    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, corpo_vertex_position_b.numItems);

}