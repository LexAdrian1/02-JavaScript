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
var resultadoSumaconReduce = arregloNumero.reduce(function (valorAcumuladoActual, valorActualArreglo) {
    console.log('ValorAcumuladoActual', valorAcumuladoActual);
    console.log('ValorActualArreglo', valorActualArreglo);
    return valorAcumuladoActual - valorActualArreglo;
}, 20);
console.log(resultadoSumaconReduce);
var resultadoEdadUsuarios = arregloUsuarios.reduce(function (acumuladoEdad, usuario) { return acumuladoEdad + usuario.edad; }, 0);
console.log(resultadoEdadUsuarios);
var nuevoArregloUsuarios = arregloUsuarios.map(function (usuario) {
    usuario.becado = false;
    return usuario;
}).map(function (usuario) {
    usuario.deuda = calcularDeuda(usuario.edad);
    return usuario;
}).filter(function (usuario) {
    return usuario.deuda < 50; //true, false
}).some(//every AND some OR = boolean
function (usuario) {
    return usuario.deuda < 18; //true, false
});
function calcularDeuda(edadUsuario) {
    var totalEdad = arregloUsuarios.reduce(function (total, usuario) { return total + usuario.edad; }, 0);
    return totalEdad * (edadUsuario / 100);
}
console.log('nuevoArregloUsuarios', nuevoArregloUsuarios);
