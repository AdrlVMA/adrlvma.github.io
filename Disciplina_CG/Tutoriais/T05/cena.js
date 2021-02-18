/* 

    Para modificar o método de desenhar cena adicionando a textura, faça:
    
        1. Defina os angulos de rotação relacionado a cada eixo:
            var xRot = 0;
            var yRot = 0;
            var zRot = 0;

        2. Centralize o cubo e use uma nova forma de translação:
            mat4.translate(mMatrix, mMatrix, [0.0, 0.0, -5.0]);
        
        3. Defina uma rotação com base nos angulos de rotação xRot, yRot 
          e zRot:
            mat4.rotate(mMatrix, mMatrix, degToRad(xRot), [1, 0, 0]);
            mat4.rotate(mMatrix, mMatrix, degToRad(yRot), [0, 1, 0]);
            mat4.rotate(mMatrix, mMatrix, degToRad(zRot), [0, 0, 1]);

            degToRad(angulo) - Traduz graus para Radiano
            [x, y, z]        - Define os eixos

        4. Ative a textura como sendo uma TEXTUREn (n<=31):
            gl.activeTexture(gl.TEXTURE0);

        5. Associe a Textura predioTextura a um registro:
            gl.bindTexture(gl.TEXTURE_2D, predioTextura);

        6. Associa um unit texture (variavel uniform) ao registro:
            gl.uniform1i(shaderProgram.samplerUniform,0);

*/

var xRot = 0;
var yRot = 0;
var zRot = 0;

function desenharCena(){
    
    
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    mat4.perspective(pMatrix, 45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0);
    mat4.identity(mMatrix);
    mat4.identity(vMatrix);
    
    mat4.translate(mMatrix, mMatrix, [0.0, 0.0, -5.0]);
    
    mat4.rotate(mMatrix, mMatrix, degToRad(xRot), [1, 0, 0]);
    mat4.rotate(mMatrix, mMatrix, degToRad(yRot), [0, 1, 0]);
    mat4.rotate(mMatrix, mMatrix, degToRad(zRot), [0, 0, 1]);

    gl.bindBuffer(gl.ARRAY_BUFFER, cuboVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 
        cuboVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, cuboVertexTextureCoordBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexTextureCoordAttribute, 
        cuboVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, predioTextura);
    gl.uniform1i(shaderProgram.samplerUniform,0);
  
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cuboVertexIndexBuffer);

    setMatrixUniforms();
    gl.drawElements(gl.TRIANGLES, cuboVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);


}
