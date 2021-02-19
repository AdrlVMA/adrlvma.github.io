function desenhar_rabo(){

    // Desenhando Triangulo Invertido (rabo)
    var translation = vec3.create();
    vec3.set (translation, 3.2, -2, -10.0); 
    mat4.translate(mMatrix, mMatrix, translation);
    gl.bindBuffer(gl.ARRAY_BUFFER, triangulo_02_vertex_position_b);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, triangulo_02_vertex_position_b.itemSize, gl.FLOAT, false, 0, 0);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, triangulo_vertex_color_b);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        triangulo_vertex_color_b.itemSize,
        gl.FLOAT, false, 0, 0

    );
    
    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLES, 0, triangulo_02_vertex_position_b.numItems);
    
}

function mude_cor(){

    cores = cor_random_n(3)

}