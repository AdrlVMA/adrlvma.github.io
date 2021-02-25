var vermelho_vertex_position_b;
var vermelho_vertex_cor_b;

function criando_vermelho(radius, qtd_vertices){
    
    
    qtd_vertices_fix =  qtd_vertices;


    // Definindo vértices e configurações do buffer - Olho e nariz
    vermelho_vertex_position_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vermelho_vertex_position_b);

    var c_vertices = [];

    for (let i = 0; i < 2 * Math.PI; i += 2 * Math.PI / qtd_vertices) {
        c_vertices.push(Math.cos(i) * radius, Math.sin(i) * radius, 0);
    }

    gl.bufferData(
    
        gl.ARRAY_BUFFER, 
        new Float32Array(c_vertices),
        gl.STATIC_DRAW

    );

    vermelho_vertex_position_b.itemSize = 3;
    vermelho_vertex_position_b.numItems = qtd_vertices;

}

function definindo_cores_vermelho(flag){

    circle_vertex_cor_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, circle_vertex_cor_b);

    if(flag==true)
        cores = colorir_definida(1,0,0, qtd_vertices_fix);

    if(flag==false)
        cores = colorir_definida(1,1,1, qtd_vertices_fix);
    //cores = colorir_definida(1,1,1  , qtd_vertices_fix);
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    
    circle_vertex_cor_b.itemSize = 4;
    circle_vertex_cor_b.numItems = qtd_vertices_fix;

}


function desenhar_vermelho_01(){

    //Criando nariz
    var translation = vec3.create();
    vec3.set (translation, 0, 8, 0.0); 
    mat4.translate(mMatrix, mMatrix, translation);
    gl.bindBuffer(gl.ARRAY_BUFFER, vermelho_vertex_position_b);
    gl.vertexAttribPointer(
        
        shaderProgram.vertexPositionAttribute,
        vermelho_vertex_position_b.itemSize,
        gl.FLOAT, false, 0, 0
        
    );

    gl.bindBuffer(gl.ARRAY_BUFFER, circle_vertex_cor_b);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        circle_vertex_cor_b.itemSize,
        gl.FLOAT, false, 0, 0

    );

    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_FAN, 0, vermelho_vertex_position_b.numItems);

}

function desenhar_Amarelo(){

    //Criando nariz
    var translation = vec3.create();
    vec3.set (translation, 0, -5, 0.0); 
    mat4.translate(mMatrix, mMatrix, translation);
    gl.bindBuffer(gl.ARRAY_BUFFER, vermelho_vertex_position_b);
    gl.vertexAttribPointer(
        
        shaderProgram.vertexPositionAttribute,
        vermelho_vertex_position_b.itemSize,
        gl.FLOAT, false, 0, 0
        
    );

    gl.bindBuffer(gl.ARRAY_BUFFER, circle_vertex_cor_amarelo_b);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        circle_vertex_cor_b.itemSize,
        gl.FLOAT, false, 0, 0

    );

    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_FAN, 0, vermelho_vertex_position_b.numItems);

}

var circle_vertex_cor_amarelo_b;
function definindo_cores_amarelo(flag){

    circle_vertex_cor_amarelo_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, circle_vertex_cor_amarelo_b);

    if(flag==true)
        cores = colorir_definida(1,1,0, qtd_vertices_fix);

    if(flag==false)
        cores = colorir_definida(1,1,1, qtd_vertices_fix);
    //cores = colorir_definida(1,1,1  , qtd_vertices_fix);
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    
    circle_vertex_cor_amarelo_b.itemSize = 4;
    circle_vertex_cor_amarelo_b.numItems = qtd_vertices_fix;

}

function desenhar_Verde(){

    //Criando nariz
    var translation = vec3.create();
    vec3.set (translation, 0, -5, 0.0); 
    mat4.translate(mMatrix, mMatrix, translation);
    gl.bindBuffer(gl.ARRAY_BUFFER, vermelho_vertex_position_b);
    gl.vertexAttribPointer(
        
        shaderProgram.vertexPositionAttribute,
        vermelho_vertex_position_b.itemSize,
        gl.FLOAT, false, 0, 0
        
    );

    gl.bindBuffer(gl.ARRAY_BUFFER, circle_vertex_cor_verde_b);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        circle_vertex_cor_b.itemSize,
        gl.FLOAT, false, 0, 0

    );

    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_FAN, 0, vermelho_vertex_position_b.numItems);

}

var circle_vertex_cor_verde_b;
function definindo_cores_verde(flag){

    circle_vertex_cor_verde_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, circle_vertex_cor_verde_b);

    if(flag==true)
        cores = colorir_definida(0,1,0, qtd_vertices_fix);

    if(flag==false)
        cores = colorir_definida(1,1,1, qtd_vertices_fix);
    //cores = colorir_definida(1,1,1  , qtd_vertices_fix);
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    
    circle_vertex_cor_verde_b.itemSize = 4;
    circle_vertex_cor_verde_b.numItems = qtd_vertices_fix;

}