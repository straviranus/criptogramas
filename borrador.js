function calcular(number){

    for(var i=0;i<number.length-2 && fracaso==false;i++){
        var digito=number[i]*number[i+1]*number[i+2];
    if(
        digito%8==0||digito%75==0
    ){
        // Esto interrumpe el bucle
    fracaso= true;
    console.log("esto NO es una palabra");
    }
    else{
profundizar(number)
        }

    }
    }
function profundizar(number){
    for(var i=0;i<number.length-3;i++){
        var tetradigito=number[i]*number[i+1]*number[i+2]*number[i+3];
    if(
        tetradigito%225==0||tetradigito%81==0
    ){
        // Esto interrumpe el bucle
    fracaso= true;
    console.log("esto NO es una palabra");
    }
    }
    }
      
