function criando_circulo(radius, qtd_vertices){
    
    
    qtd_vertices_fix =  qtd_vertices;


    // Definindo vértices e configurações do buffer - Olho e nariz
    circle_vertex_position_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, circle_vertex_position_b);

    var c_vertices = [];

    for (let i = 0; i < 2 * Math.PI; i += 2 * Math.PI / qtd_vertices) {
        c_vertices.push(Math.cos(i) * radius, Math.sin(i) * radius, 0);
    }

    gl.bufferData(
    
        gl.ARRAY_BUFFER, 
        new Float32Array(c_vertices),
        gl.STATIC_DRAW

    );

    circle_vertex_position_b.itemSize = 3;
    circle_vertex_position_b.numItems = qtd_vertices;

}

function definindo_cores_circulo(){

    circle_vertex_color_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, circle_vertex_color_b);

    cores = cor_random_n(qtd_vertices_fix);
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    
    circle_vertex_color_b.itemSize = 4;
    circle_vertex_color_b.numItems = qtd_vertices_fix;

}

function desenhar_olho_esq(){

    //Criando nariz
    var translation = vec3.create();
    vec3.set (translation, 0, 0, -2.0); 
    mat4.translate(mMatrix, mMatrix, translation);
    gl.bindBuffer(gl.ARRAY_BUFFER, circle_vertex_position_b);
    gl.vertexAttribPointer(
        
        shaderProgram.vertexPositionAttribute,
        circle_vertex_position_b.itemSize,
        gl.FLOAT, false, 0, 0
        
    );

    gl.bindBuffer(gl.ARRAY_BUFFER, circle_vertex_color_b);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        circle_vertex_color_b.itemSize,
        gl.FLOAT, false, 0, 0

    );

    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_FAN, 0, circle_vertex_position_b.numItems);

}

function desenhar_olho_dir(){

    //Criando nariz
    var translation = vec3.create();
    vec3.set (translation, 2, -2, 0.0); 
    mat4.translate(mMatrix, mMatrix, translation);
    gl.bindBuffer(gl.ARRAY_BUFFER, circle_vertex_position_b);
    gl.vertexAttribPointer(
        
        shaderProgram.vertexPositionAttribute,
        circle_vertex_position_b.itemSize,
        gl.FLOAT, false, 0, 0
        
    );

    gl.bindBuffer(gl.ARRAY_BUFFER, circle_vertex_color_b);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        circle_vertex_color_b.itemSize,
        gl.FLOAT, false, 0, 0

    );

    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_FAN, 0, circle_vertex_position_b.numItems);

}
