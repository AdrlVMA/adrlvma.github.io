var radius = 1;
var qtd_vertices = 100;
function criando_circulo(radius, qtd_vertices){

    // Definindo vértices e configurações do buffer - Olho e nariz
    circle_vertex_position_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, circle_vertex_position_b);

    var c_vertices = [];

    for (let i = 0; i < 2 * Math.PI; i += 2 * Math.PI / qtd_vertices) {
        c_vertices.push(Math.cos(i) * radius, Math.sin(i) * radius, 0);
    }

    gl.bufferData(
    
        gl.ARRAY_BUFFER, 
        new Float32Array(c_vertices),
        gl.STATIC_DRAW

    );

    circle_vertex_position_b.itemSize = 3;
    circle_vertex_position_b.numItems = 100;

}

function definindo_cores_circulo(){

    circle_vertex_color_b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, circle_vertex_color_b);

    a1 = Math.random()
    a2 = Math.random()
    a3 = Math.random()

    cores = []
    for (var i=0; i < 100; i++) {
        cores = cores.concat([a1, a2, a3, 1.0]);
    }
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cores), gl.STATIC_DRAW);
    
    circle_vertex_color_b.itemSize = 4;
    circle_vertex_color_b.numItems = 100;

}