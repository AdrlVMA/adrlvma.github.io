function desenhar_boca(){

    //Aproveitando buffer 1 para criar o chapéu
    var translation = vec3.create();
    vec3.set (translation, -7.0, -4.5, -10.0); 
    mat4.translate(mMatrix, mMatrix, translation);
    gl.bindBuffer(gl.ARRAY_BUFFER, retangulo_02_vertex_position_b);
    gl.vertexAttribPointer(
        
        shaderProgram.vertexPositionAttribute, 
        retangulo_02_vertex_position_b.itemSize, 
        gl.FLOAT, false, 0, 0
        
    );

    gl.bindBuffer(gl.ARRAY_BUFFER, circle_vertex_color_b);
    gl.vertexAttribPointer(

        shaderProgram.vertexColorAttribute,
        circle_vertex_color_b.itemSize,
        gl.FLOAT, false, 0, 0

    );


    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, circle_vertex_color_b.numItems);

}

function mude_cor(){

    cores = cor_random_n(4)

}