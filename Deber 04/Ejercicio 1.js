
var arreglo = [1,'B','C',3,'A','G'];
var count = 0;
function validarNumeroDeStringsEnArreglo(arreglo) {
    for (var i=0;i<=arreglo.length;i++){
        if(typeof arreglo[i] == 'string'){
            count=count+1;
        }
    }
    return (count);
}
console.log('Total de Strings: '+validarNumeroDeStringsEnArreglo(arreglo));