/*La Empresa Eléctrica Quito tiene 19 generadores de múltiples tipos.
Los primeros 4 generan 62 megawatts y los otros 15 generan 124 megawatts
La Empresa Eléctrica Quito ha decidido contratarlo a usted para diseñar un sistema de "loops" para imprimir en consola
el total de megawatts generado por cada generador con el siguiente formato:
- "Generador #1 está prendido, añadiendo 62 MW para un total de 62 MW."
- "Generador #2 está prendido, añadiendo 62 MW para un total de 124 MW."
El primer loop es requerido que sea construido con "while" administrando los 4 primeros generadores y el segundo que sea
construido con un "for" para los 15 generadores restantes.
Como una funcionalidad adicional quisieran que se puedan activar los generadores pares, impares o todos.
Es decir, en el ejemplo anterior el formato imprimiría lo siguiente para los generadores impares:
- "Generador #1 está prendido, añadiendo 62 MW para un total de 62 MW."
- "Generador #2 está apagado." */
var text='';
var i=0,j=0;
var costo=0;
var condicion='pares';
while (i < 4){
    i++;
    switch(condicion){
        case 'pares':
            if(i%2==0){
                costo+=62;
                console.log('Generador #'+i+' está prendido, añadiendo 62 MW para un total de '+costo+' MW.');
            }
            else {
                console.log('Generador #'+i+' está apagado.');
            }
            break;
        case 'impares':
            if(i%2!=0){
                costo+=62;
                console.log('Generador #'+i+' está prendido, añadiendo 62 MW para un total de '+costo+' MW.');
            }
            else {
                console.log('Generador #'+i+' está apagado.');
            }
            break;
        case 'todos':
            costo+=62;
            console.log('Generador #'+i+' está prendido, añadiendo 62 MW para un total de '+costo+' MW.');
            break;
    }

}
for(j=i+1;j<=19;j++){
    switch(condicion){
        case 'pares':
            if(j%2==0){
                costo+=124;
                console.log('Generador #'+j+' está prendido, añadiendo 62 MW para un total de '+costo+' MW.');
            }
            else {
                console.log('Generador #'+j+' está apagado.');
            }
            break;
        case 'impares':
            if(j%2!=0){
                costo+=124;
                console.log('Generador #'+j+' está prendido, añadiendo 62 MW para un total de '+costo+' MW.');
            }
            else {
                console.log('Generador #'+j+' está apagado.');
            }
            break;
        case 'todos':
            costo+=124;
            console.log('Generador #'+j+' está prendido, añadiendo 62 MW para un total de '+costo+' MW.');
            break;
    }


}