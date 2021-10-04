function calcular_tres(number){
    for(var i=0;i<number.length-2;i++){
        var digito=number[i]*number[i+1]*number[i+2];
    if(
        digito%8==0||digito%75==0
    ){
        // Esto interrumpe el bucle
    console.log("esto NO es una palabra");
    vaciado();
    break
    }
    else{
        parrafo.push('a');
    }
    }
    // ESTO ES: SI AGREGUE UNA A A CADA PASO, EL TEST SIGUE
    if(parrafo.length==primalidad_palabra.length-2){
        calcular_cuatro(number)
    }
}

function calcular_cuatro(number){
    for(var i=0;i<number.length-3;i++){
        var tetradigito=number[i]*number[i+1]*number[i+2]*number[i+3]
    if(
        tetradigito%225==0||tetradigito%81==0
    ){
        // Esto interrumpe el bucle

  vaciado();
  console.log (" ESTO no es una palabra")
  break;
    }
    else{
        parrafo.shift()
        // Le voy quitando elemtos al array
    }
    }    
testeofinal();
}
function testeofinal(){
    if(parrafo.length==1){
        console.log("!Eureka!")
        desencriptado=true;
    }
}



