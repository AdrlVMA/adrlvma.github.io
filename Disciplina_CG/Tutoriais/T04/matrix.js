var mMatrix = mat4.create();    
var vMatrix = mat4.create();    
var pMatrix = mat4.create();

// Triângulo
var piramideVertexPositionBuffer;   
var piramideVertexColorBuffer;

// Quadrado            
var cuboVertexPositionBuffer;
var cuboVertexColorBuffer;

// Buffer de índices
var cuboVertexIndexBuffer;

// Pilha de frames
var mMatrixPilha = [];


function mPushMatrix() {
    var copy = mat4.clone(mMatrix);
    mMatrixPilha.push(copy);
}

function mPopMatrix() {
    if (mMatrixPilha.length == 0) {
        throw "inválido popMatrix!";
    }
    mMatrix = mMatrixPilha.pop();
}



function setMatrixUniforms(){
    gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
    gl.uniformMatrix4fv(shaderProgram.vMatrixUniform, false, vMatrix);
    gl.uniformMatrix4fv(shaderProgram.mMatrixUniform, false, mMatrix);
}