var i=0,j=0;
var costo=0;
// pares. impares, todos
var condicion='todos';

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
                console.log('Generador #'+j+' está prendido, añadiendo 124 MW para un total de '+costo+' MW.');
            }
            else {
                console.log('Generador #'+j+' está apagado.');
            }
            break;
        case 'impares':
            if(j%2!=0){
                costo+=124;
                console.log('Generador #'+j+' está prendido, añadiendo 124 MW para un total de '+costo+' MW.');
            }
            else {
                console.log('Generador #'+j+' está apagado.');
            }
            break;
        case 'todos':
            costo+=124;
            console.log('Generador #'+j+' está prendido, añadiendo 124 MW para un total de '+costo+' MW.');
            break;
    }
}