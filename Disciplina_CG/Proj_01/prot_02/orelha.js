function desenhar_orelha(){

    //Aproveitando buffer 1 para criar o chapéu
    var translation = vec3.create();
    vec3.set (translation, -4.17, 13.0, -12.0); 
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