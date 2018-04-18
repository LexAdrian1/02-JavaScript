console.log('Hola Mundo');

var nombre = 'Alexis';
var edad = 22;
var peso = 300.5;
var casado = false;
var fechaNaciemiento = new Date();
var noExisto = null; // false
var noEstoyDefinido = undefined; // false
var a = -1; //True
var b = 0; //Falso
var c = 1; //True
if (a){
    console.log('Verdadero');
}else{
    console.log('Falso');
}
//Command + A y Alt + commad + l Identa Codigo
//JSON
//Objeto
var usuario = {
    nombre: 'Alexis',
    apellido: 'Miranda',
    cedula: '0604351341',
    edad: 20,
    imprimir: function(){
        console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad);
    },
};
console.log(usuario);
delete usuario.edad;
console.log(usuario);
usuario.fechaNacimiento = new Date();
console.log(usuario);
usuario.mascotas = {};
usuario.mascotas.nombre = 'Alexis';
console.log(usuario);
var arreglo = [1,'Jonh Cena',3,undefined, new Date(),{ nombre : 'Pedro'},[1,2,3],usuario.imprimir(),usuario.imprimir];
console.log(arreglo);
function sumarNumeros(numeroUno, numeroDos) {
    return numeroDos + numeroUno;

}
console.log(sumarNumeros(1,2));

var potenciaDeDosDeUnNumeroDos = function noEsNecesarioPonerElNombre(numero){
    return numero * numero;
};
//func Anonimas
var potenciaDeDosDeUnNumeroDos = function (numero) {
    return numero * numero;
};
console.log(potenciaDeDosDeUnNumeroDos(7,2,3,4));
console.log(potenciaDeDosDeUnNumeroDos(4,2,3,4));

console.log(usuario.imprimir());
console.log(arreglo);