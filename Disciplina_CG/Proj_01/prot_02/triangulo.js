function criar_triangulo(){
    
    // Definindo vértices e configurações do buffer - Triangulo 01 Corpo e Chapéu
    triangulo_01_vertex_position_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangulo_01_vertex_position_b);

    var t_01_vertices = [
        
         0.0,  1.0, 0.0,
        -1.0, -1.0, 0.0, 
         1.0, -1.0, 0.0, 

    ];

    gl.bufferData(

        gl.ARRAY_BUFFER, 
        new Float32Array(t_01_vertices),
        gl.STATIC_DRAW

    );

    triangulo_01_vertex_position_b.itemSize = 3;
    triangulo_01_vertex_position_b.numItems = 3;

}


function criar_triangulo_invertido(){

    // Definindo vértices e configurações do buffer - Triangulo 02 Rabo
    triangulo_02_vertex_position_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangulo_02_vertex_position_b);

    var t_02_vertices = [
        
        0.0, -1.0, 0.0,
        1.0, 1.0, 0.0, 
        -1.0, 1.0, 0.0, 

    ];

    gl.bufferData(

        gl.ARRAY_BUFFER, 
        new Float32Array(t_02_vertices),
        gl.STATIC_DRAW

    );

    triangulo_02_vertex_position_b.itemSize = 3;
    triangulo_02_vertex_position_b.numItems = 3;

}

function definindo_cores_triangulo(){

    triangulo_vertex_color_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangulo_vertex_color_b);
    
    a1 = Math.random()
    a2 = Math.random()
    a3 = Math.random()

    cores = []
    for (var i=0; i < 3; i++) {
        //cores = cores.concat([0.9, 0.7, 0.2, 1.0]);
        cores = cores.concat([a1, a2, a3, 1.0]);
    }
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    
    triangulo_vertex_color_b.itemSize = 4;
    triangulo_vertex_color_b.numItems = 3;

}