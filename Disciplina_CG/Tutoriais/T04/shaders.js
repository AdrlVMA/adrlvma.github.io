var shaderProgram;
function iniciarShaders(){

    var vertexShader = getShader(gl, "#shader-vs");     /* Criar os objetos shaders */
    var fragmentShader = getShader(gl, "#shader-fs");   /* e compilá-los. */
    
    shaderProgram = gl.createProgram();                 /* Criar o programa que */
    gl.attachShader(shaderProgram, vertexShader);       /* associará os shaders */
    gl.attachShader(shaderProgram, fragmentShader);     /* usando a função attachShader */
    gl.linkProgram(shaderProgram);
    
    if(!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)){
        alert("Não pode inicializar shaders");
    }
    
    gl.useProgram(shaderProgram);   /* Chamando a função 'useProgram', */

    /* podemos referenciar todos os attributes e uniforms dos shaders */
    shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

    shaderProgram.vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
    gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute);   

    /* Depois obtemos as referências dos uniforms, que nesse caso são as matrizes MVP */
    shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");    /* Elas são simples números inteiros. */
    shaderProgram.vMatrixUniform = gl.getUniformLocation(shaderProgram, "uVMatrix");
    shaderProgram.mMatrixUniform = gl.getUniformLocation(shaderProgram, "uMMatrix");
        
}

function getShader(gl, id){ /* Identificador e o contexto webgl */
    /* Compilar os shaders, chamada para cada shader na função iniciarShaders */

    /* Captura a tag script que contenha o script do shader */
    var shaderScript = $(id)[0]; 
    if(!shaderScript){
        return null;
    }
    
    /* Capturamos o objeto representando o texto dentro da script */
    var str = "";
    var k = shaderScript.firstChild;
    while(k){
        if(k.nodeType == 3)             /*  É um texto?  */
            str += k.textContent;       /* Adicionamos seu conteúdo a uma variável de saída */
        k = k.nextSibling;
    }
    
    /* Aqui criamos o objeto do shader dentro do contexto */
    var shader;
    if(shaderScript.type == "x-shader/x-fragment"){         /* De acordo com seu tipo */
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if(shaderScript.type == "x-shader/x-vertex"){    /* De acordo com seu tipo */
        shader = gl.createShader(gl.VERTEX_SHADER);
    } else{
        return null;
    }
    
    /* Estamos dizendo ao contexto que o código desse objeto 
        shader é o texto do script que capturamos */
    gl.shaderSource(shader, str);
    gl.compileShader(shader);       /* Em seguida compilamos (ela é enviada para a GPU) */
    
    if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){  /* Perguntamos se a compilação foi um sucesso */
        alert(gl.getShaderInfoLog(shader));                 /* Alertando-nos em caso de problema. */
        return null;
    }

    return shader;

}
