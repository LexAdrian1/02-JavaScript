//Operadores
var arregloNumero = [1, 2, 3, 4, 5];
//let arregloUsuarios: Array<UsuarioArreglo> = [
var arregloUsuarios = [
    {
        nombre: 'Alexis',
        edad: 28
    },
    {
        nombre: 'Gabriela',
        edad: 10
    },
    {
        nombre: 'Felipe',
        edad: 68
    },
    {
        nombre: 'Wendy',
        edad: 32
    },
    {
        nombre: 'Roberto',
        edad: 18
    },
];
//fat arrow functions
var sumarNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
console.log(sumarNumeros(1, 2));
var potenciaNumero = function (numero) {
    return numero * numero;
};
var potenciaNumerovV2 = function (numero) { return numero * numero; };
var sumarNumerosV2 = function (numeroUno, numeroDos) { return numeroUno + numeroDos; };
var sumaTotal = 0;
var resultadoForEach = arregloNumero.forEach(function (valorActual, indiceActual, arreglo) {
    sumaTotal = sumaTotal + valorActual;
    console.log(valorActual);
    console.log(indiceActual);
    console.log(arreglo);
});
console.log(resultadoForEach);
console.log(sumaTotal);
var resultadoSumaconReduce = arregloNumero.
    reduce(function (valorAcumuladoActual, valorActualArreglo) {
    console.log('ValorAcumuladoActual', valorAcumuladoActual);
    console.log('ValorActualArreglo', valorActualArreglo);
    return valorAcumuladoActual - valorActualArreglo;
}, 20);
console.log(resultadoSumaconReduce);
var resultadoEdadUsuarios = arregloUsuarios.reduce(function (acumuladoEdad, usuario) {
    return acumuladoEdad + usuario.edad;
}, 0);
console.log(resultadoEdadUsuarios);
var nuevoArregloUsuarios = arregloUsuarios.map(function (usuario) {
    usuario.deuda = 0;
    return usuario;
});
console.log('nuevoArregloUsuarios', nuevoArregloUsuarios);
