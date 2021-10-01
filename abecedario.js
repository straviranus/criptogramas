// Abecedario
const a={ nombre:"a", posicion: 0, multiplicidad: 2};
const b={ nombre:"b", posicion: 1, multiplicidad: 3};
const c={ nombre:"c", posicion: 2, multiplicidad: 3};
const d={ nombre:"d", posicion: 3, multiplicidad: 3};
const e={ nombre:"e", posicion: 4, multiplicidad: 2};
const f={ nombre:"f", posicion: 5, multiplicidad: 3};
const g={ nombre:"g", posicion: 6, multiplicidad: 3};
const h={ nombre:"h", posicion: 7, multiplicidad: 3};
const i={ nombre:"i", posicion: 8, multiplicidad: 2};
const j={ nombre:"j", posicion: 9, multiplicidad: 3};
const k={ nombre:"k", posicion: 10, multiplicidad: 3};
const l={ nombre:"l", posicion: 11, multiplicidad: 3};
const m={ nombre:"m", posicion: 12, multiplicidad: 3};
const n={ nombre:"n", posicion: 13, multiplicidad: 3};
const o={ nombre:"o", posicion: 14, multiplicidad: 2};
const p={ nombre:"p", posicion: 15, multiplicidad: 3};
const q={ nombre:"q", posicion: 16, multiplicidad: 3};
const r={ nombre:"r", posicion: 17, multiplicidad: 3};
const s={ nombre:"s", posicion: 18, multiplicidad: 3};
const t={ nombre:"t", posicion: 19, multiplicidad: 3};
const u={ nombre:"u", posicion: 20, multiplicidad: 2};
const v={ nombre:"v", posicion: 21, multiplicidad: 3};
const w={ nombre:"w", posicion: 22, multiplicidad: 3};
const x={ nombre:"x", posicion: 23, multiplicidad: 3};
const y={ nombre:"y", posicion: 24, multiplicidad: 3};
const z={ nombre:"z", posicion: 25, multiplicidad: 3};

abc=[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
function analizar() {
// El doble for es para ubicar a la letra dentro de los objetos y asignarle su posición
var texto= document.getElementById("texto").value
var codigopalabra=[];
for (var j=0;j<texto.length;j++){
for(var i=0;i<abc.length;i++){
    if(abc[i].nombre==texto[j]){
        // con esto se forma un array sólo con las posiciones
        codigopalabra.push(abc[i].posicion)

    }
}


}
/*
console.log(codigopalabra);
console.log(abc)
*/
var numeronuevapalabra=[];
var nuevapalabra=[];
// esta variable es la que dice cuanto van a girar las letras
var distancia=parseInt((document.getElementById("distancia").value)); 

//con esta variable se arman los arrays del número modificado
for(var h=0;h<codigopalabra.length;h++)
{numeronuevapalabra.push(codigopalabra[h]+distancia)
}
// Ahora hay que transoformar el nuevo arreglo númerico en la nueva palabra
for (var j=0;j<numeronuevapalabra.length;j++){
    for(var i=0;i<abc.length;i++){
        if(abc[i].posicion==numeronuevapalabra[j]){
            // con esto se forma un array sólo con las posiciones
            nuevapalabra.push(abc[i].nombre)
          
        }
    }
    
    
    }
//console.log(numeronuevapalabra);
//console.log(nuevapalabra);
var word= nuevapalabra.join("");
console.log (word);
escribir();
function escribir(){
    document.getElementById('resultado').innerHTML=word;
    }
}
