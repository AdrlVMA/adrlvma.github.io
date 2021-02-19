function cor_random_n(n_vertices){

    a1 = Math.random()
    a2 = Math.random()
    a3 = Math.random()

    cores = []
    for (var i=0; i < n_vertices; i++) {
        cores = cores.concat([a1, a2, a3, 1.0]);
    }

    return cores    

}

function cor_random_vertice(n_vertices){

    cores = []
    for (var i=0; i < n_vertices; i++) {

        a1 = Math.random()
        a2 = Math.random()
        a3 = Math.random()

        cores = cores.concat([a1, a2, a3, 1.0]);
    }

    return cores    

}