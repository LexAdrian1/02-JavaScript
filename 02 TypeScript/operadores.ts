//Operadores
let arregloNumero = [1,2,3,4,5];
//let arregloUsuarios: Array<UsuarioArreglo> = [
let arregloUsuarios: UsuarioArreglo[] = [
    {
      nombre:'Alexis',
      edad:28
    },
    {
        nombre:'Gabriela',
        edad:10
    },
    {
        nombre:'Felipe',
        edad:68
    },
    {
        nombre:'Wendy',
        edad:32
    },
    {
        nombre:'Roberto',
        edad:18
    },
];
    //fat arrow functions
    let sumarNumeros =  (numeroUno:number,numeroDos:number):number => {
        return numeroUno + numeroDos;
    };
    console.log(sumarNumeros(1,2));

    let potenciaNumero = numero =>{
        return numero * numero;
    };
let potenciaNumerovV2 = numero => numero * numero;
let sumarNumerosV2 =  (numeroUno:number,numeroDos:number):number => numeroUno + numeroDos;
let sumaTotal=0;
let resultadoForEach=arregloNumero.forEach(
    (valorActual,indiceActual,arreglo)=>{
        sumaTotal=sumaTotal+valorActual;
        console.log(valorActual);
        console.log(indiceActual);
        console.log(arreglo);

    }
);
console.log(resultadoForEach);
console.log(sumaTotal);

let resultadoSumaconReduce = arregloNumero.
reduce(
    (valorAcumuladoActual, valorActualArreglo) => {
    console.log('ValorAcumuladoActual',
        valorAcumuladoActual);
    console.log('ValorActualArreglo',
        valorActualArreglo);
    return valorAcumuladoActual-valorActualArreglo;
    },
    20
);
console.log(resultadoSumaconReduce);

//Typear mediante Interfaces
interface UsuarioArreglo{
    nombre: string;
    edad: number;
    deuda?: number;//Opcional
}

let resultadoEdadUsuarios = arregloUsuarios.reduce(
    (acumuladoEdad: number, usuario:UsuarioArreglo)=>
    {
        return acumuladoEdad + usuario.edad;
    }, 0);
console.log(resultadoEdadUsuarios);
let nuevoArregloUsuarios = arregloUsuarios.map(
    (usuario:UsuarioArreglo)=>
    {
        usuario.deuda = 0;
        return usuario;
    }
    );

console.log('nuevoArregloUsuarios',nuevoArregloUsuarios);