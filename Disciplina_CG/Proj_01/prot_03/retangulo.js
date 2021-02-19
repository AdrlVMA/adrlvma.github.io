function criando_retangulo(){

    // Definindo vértices e configurações do buffer - Quadrado 01 Cabeça
    retangulo_01_vertex_position_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, retangulo_01_vertex_position_b);

    var q_01_vertices = [
        
        1.0,  1.0, 0.0,
        -5.0,  1.0, 0.0, 
        1.0, -3.0, 0.0, 
        -5.0, -3.0, 0.0 

    ];

    gl.bufferData(

        gl.ARRAY_BUFFER, 
        new Float32Array(q_01_vertices),
        gl.STATIC_DRAW

    );

    retangulo_01_vertex_position_b.itemSize = 3;
    retangulo_01_vertex_position_b.numItems = 4;

}


function criando_retangulo_esticado(){

    // Definindo vértices e configurações do buffer - Quadrado 02 Pés
    retangulo_02_vertex_position_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, retangulo_02_vertex_position_b);

    var q_02_vertices = [
        
        1.0,  1.0, 0.0,
        -8.0,  1.0, 0.0, 
        1.0, -0.0, 0.0, 
        -8.0, -0.0, 0.0 

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

    quadrado_vertex_color_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadrado_vertex_color_b);

    cores = cor_random_n(4);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    
    quadrado_vertex_color_b.itemSize = 4;
    quadrado_vertex_color_b.numItems = 4;

}