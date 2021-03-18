function desenhar_boca(){

    //Aproveitando buffer 1 para criar o chapéu
    var translation = vec3.create();
    vec3.set (translation, -0.32, 0.6, 4.0); 
    
    
    mat4.translate(mMatrix, mMatrix, translation);
    gl.bindBuffer(gl.ARRAY_BUFFER, retangulo_02_vertex_position_b);
    gl.vertexAttribPointer(
        
        shaderProgram.vertexPositionAttribute, 
        retangulo_02_vertex_position_b.itemSize, 
        gl.FLOAT, false, 0, 0
        
    );

    mPushMatrix();
    gl.bindBuffer(gl.ARRAY_BUFFER, retangulo_02_vertex_color_b);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        retangulo_02_vertex_color_b.itemSize,
        gl.FLOAT, false, 0, 0

    );


    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, retangulo_02_vertex_position_b.numItems);

    mPopMatrix();

}

function criando_retangulo_esticado(){

    // Definindo vértices e configurações do buffer - Quadrado 02 Pés
    retangulo_02_vertex_position_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, retangulo_02_vertex_position_b);

    var q_02_vertices = [
        
        0.04,  0.04, 0.0,
        -0.24,  0.04, 0.0, 
        0.04, -0.0, 0.0, 
        -0.24, -0.0, 0.0 

    ];

    gl.bufferData(
    
        gl.ARRAY_BUFFER, 
        new Float32Array(q_02_vertices),
        gl.STATIC_DRAW

    );

    retangulo_02_vertex_position_b.itemSize = 3;
    retangulo_02_vertex_position_b.numItems = 4;

}

function definido_cores_quadrado(){

    retangulo_02_vertex_color_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, retangulo_02_vertex_color_b);

    cores = cor_random_n(4);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    
    retangulo_02_vertex_color_b.itemSize = 4;
    retangulo_02_vertex_color_b.numItems = 4;

}