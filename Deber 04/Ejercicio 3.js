var poblacion=1;
var mes=0,i=0;
var countMes=12;
for(mes=1;mes<=countMes;mes++){
    poblacion*=4;
    if(poblacion<10000){
        console.log('Van a existir '+poblacion+' osos de anteojos después del mes '+mes+'.');
    }else{
        poblacion/=2;
        console.log('Removiendo '+ poblacion +' osos de anteojos de la población.');
        break;
    }
}
for(i=mes;i<=countMes;i++){
    console.log('Van a existir '+poblacion+' osos de anteojos después del mes '+i+'.');
    poblacion*=4;
}
