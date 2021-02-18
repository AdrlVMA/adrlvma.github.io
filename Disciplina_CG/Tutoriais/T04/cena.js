function desenharCena(){
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    mat4.perspective(pMatrix, 45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0);
    mat4.identity(mMatrix);
    mat4.identity(vMatrix);
    
    // Desenhando Triângulo
    var translation = vec3.create();
    vec3.set (translation, -1.5, 1.0, -7.0); 
    mat4.translate(mMatrix, mMatrix, translation);
    
    mPushMatrix();                                              // Guarda a Mtriz original
    mat4.rotate(mMatrix, mMatrix, degToRad(rPiramide), [0, 1, 0]);   // Aplica rotação

    gl.bindBuffer(gl.ARRAY_BUFFER, piramideVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, piramideVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, piramideVertexColorBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, piramideVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
    
    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLES, 0, piramideVertexPositionBuffer.numItems);
    
    mPopMatrix();                                               // Extrai a Matriz original guardada

    // Desenhando o Quadrado
    vec3.set (translation, 3.0, 0.0, 0.0); 
    mat4.translate(mMatrix, mMatrix, translation);

    mPushMatrix();
    mat4.rotate(mMatrix, mMatrix, degToRad(rCubo), [1, 1, 1]);

    gl.bindBuffer(gl.ARRAY_BUFFER, cuboVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cuboVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, cuboVertexColorBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, cuboVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cuboVertexIndexBuffer);

    setMatrixUniforms();
    gl.drawElements(gl.TRIANGLES, cuboVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);


    mPopMatrix();
}
