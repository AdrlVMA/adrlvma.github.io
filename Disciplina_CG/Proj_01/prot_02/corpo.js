function desenhar_corpo(){
                        
    // Desenhando Triangulo Central
    var translation = vec3.create();
    vec3.set (translation, 0, 0, -5.0); 
    mat4.translate(mMatrix, mMatrix, translation);
    gl.bindBuffer(gl.ARRAY_BUFFER, triangulo_01_vertex_position_b);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, triangulo_01_vertex_position_b.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, triangulo_vertex_color_b);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        triangulo_vertex_color_b.itemSize,
        gl.FLOAT, false, 0, 0

    );

    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLES, 0, triangulo_01_vertex_position_b.numItems);
    
}