
function desenhar_pe_esquerdo(){

    var translation = vec3.create();
    vec3.set (translation, -3.0, -15.6, 0.0); 
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

function desenhar_pe_direito(){

    var translation = vec3.create();
    vec3.set (translation, 12.0, -0.0, 0.0); 
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