function iniciarAmbiente(){
    gl.clearColor(0.0, 0.0, 0.0, 1.0);  /* Limpar a tela usando */
    
    /* Z-Buffer simplesmente descarta o fragmento 
    mais longe da câmera (coordenada Z menor), e usa 
    o fragmento mais perto */
    gl.enable(gl.DEPTH_TEST);           /* Habilitando o teste Z-Buffer */
}