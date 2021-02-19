function desenhar_cabeca(){

    // Criando a cabeça 
    var translation = vec3.create();
    vec3.set (translation, -0.0, -2.2, 0.0); 
    mat4.translate(mMatrix, mMatrix, translation);
    gl.bindBuffer(gl.ARRAY_BUFFER, retangulo_01_vertex_position_b);
    gl.vertexAttribPointer(
        
        shaderProgram.vertexPositionAttribute, 
        retangulo_01_vertex_position_b.itemSize, 
        gl.FLOAT, false, 0, 0
        
    );

    gl.bindBuffer(gl.ARRAY_BUFFER, quadrado_vertex_color_b);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        quadrado_vertex_color_b.itemSize,
        gl.FLOAT, false, 0, 0

    );

    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, retangulo_01_vertex_position_b.numItems);

}

function mude_cor(){

    cores = cor_random_n(4)

}