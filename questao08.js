function ordenarNotas(nota){
    return (nota > 6);
}

let notas = [5.5, 7.0, 8.2, 4.9, 9.5];
let notasOrdenadas = notas.filter(ordenarNotas);
let notasFinais = notasOrdenadas.map(Math.round);

console.log(notasFinais);