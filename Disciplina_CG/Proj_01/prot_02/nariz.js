function desenhar_nariz(){

    //Criando nariz
    var translation = vec3.create();
    vec3.set (translation, -16.35, 19.4, -6.0); 
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