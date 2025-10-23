function ordenar(a, b){
    return (a-b);
}

let numeros = [45, 12, 8, 32, 19];
let numerosOrdenados = numeros.sort(ordenar);
console.log(numerosOrdenados);