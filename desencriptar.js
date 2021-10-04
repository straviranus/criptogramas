// Primer paso: transformar el string en número
// segundo paso: un bucle para ir sumando, de 0 a 25
// Tercer paso: Dentro de ese bucle, analizar la multiplicidad.
//Multiplicidad: Si es impar, fuera. NO HACE FALTA PASAR A LETRA
// Se tienen que cumplir 3 condiciones: a) Cada palabra es par, b) Cada 3 caracteres, es par 
// c) Cada 3 caracteres, no ser divisible por 8. Esto se puede resumir a que
// cada 3 caracteres, no sea divisible ni por 8 ni por 27. 
// Para todo esto habrá que hacer una función!



// Esta variable es para ver si fracasa la palabra
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
const n={ nombre:"n", posicion: 13, multiplicidad: 3}
const ñ={ nombre:"ñ", posicion: 14, multiplicidad: 3};
const o={ nombre:"o", posicion: 15, multiplicidad: 2};
const p={ nombre:"p", posicion: 16, multiplicidad: 3};
const q={ nombre:"q", posicion: 17, multiplicidad: 3};
const r={ nombre:"r", posicion: 18, multiplicidad: 3};
const s={ nombre:"s", posicion: 19, multiplicidad: 3};
const t={ nombre:"t", posicion: 20, multiplicidad: 3};
const u={ nombre:"u", posicion: 21, multiplicidad: 2};
const v={ nombre:"v", posicion: 22, multiplicidad: 3};
const w={ nombre:"w", posicion: 23, multiplicidad: 3};
const x={ nombre:"x", posicion: 24, multiplicidad: 3};
const y={ nombre:"y", posicion: 25, multiplicidad: 3};
const z={ nombre:"z", posicion: 26, multiplicidad: 3};
const espacio={ nombre:" ", posicion: 27, multiplicidad: 5};

abc=[a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z,espacio]
// Variables importantes a ser llenadas
/*
ALGORITMO
1) Ingresa la palabra y se la transoforma en número
2) Mientras desencriptado=false, se le va sumando 1 a cada elemento de ese array
3) Se analiza la multiplicidad de la palabra para determinar si se corta o no el for
*/

function desencriptar() {
// VARIABLES FUNDAMENTALES

// ESTO ES PARA SEGUIR EL PROCESO O PARAR CUANDO SE DESENCRIPTÓ
var desencriptado= false;
// ESTA ES LA PALABRA QUE INGRESA EL USUARIO
var palabrainpu=document.getElementById("word");
var texto=palabrainpu.value 
// ESTE ES EL CÓDGIO DE POSICIONES DE LA PALABRA
var codigopalabra=[];
// ESTA VARIABLES ES CON LAS POSICIONES QUE SE VAN ALTERANDO
var palabraficticia=[];
// ESTE ARRAY VA A CONTENER LA MULTIPLICIDAD DE LAS PALABRAS
var primalidad_palabra=[];
var nuevapalabra=[];
// ESTAS DOS VARIABLES CUMPLEN UN ROL TÉCNICO MUY ESPECÍFICO
var parrafo=[];
var candidatos=[];

// EJECUCIÓN DE CÓDIGO
// Paso el texto a números
numerizar(texto)
sumar() 


// FUNCIONES IMPORTANTES
// función para transofrmar un array de posiciones en la palabra
function palabrizar(codigo){
    for (var j=0;j<codigo.length;j++){
        for(var i=0;i<abc.length;i++){
            if(abc[i].posicion==codigo[j]){
                // con esto se forma un array sólo con las posiciones
                nuevapalabra.push(abc[i].nombre)
                
     }
        }
            }
            candidatos.push(nuevapalabra.join(""));
            console.log(candidatos);
        }

// ESTA FUNCIÓN TRANSOFMRA EL ARRAY DEL STRING EN UNO CON NÚMEROS, DE POSICIONES

function numerizar(palabrasa){
    for (var j=0;j<palabrasa.length;j++){
        for(var i=0;i<abc.length;i++){
            if(abc[i].nombre==palabrasa[j]){
                codigopalabra.push(abc[i].posicion)}}}
            }


// ESTA ES LA FUNCIÓN PRINCIPAL: VA ALTERANDO LAS POSICIONES SUCESIVAMENTE
// TENGO DOS PROBLEMAS: MANTENER EL ESPACIO Y QUE NO SE PASE DE 25
function sumar(){
for(var h=0;h<26;h++){
    if(desencriptado==false){
        for(var n=0;n<codigopalabra.length;n++) {
            if(codigopalabra[n]==27){
                palabraficticia.push(codigopalabra[n])
            }
            else{
                palabraficticia.push((codigopalabra[n]+h)%27)}
            }
//console.log(palabraficticia)
primalizar(palabraficticia)

}}}
// aca, por cada suma, empieza a codificarse por multiplicidad y analizarse


// FUNCIÓN PRIMALIZAR LIGA LOS NÚMEROS DEL ARRAY PALABRA CON SU MULTIPLICIDAD

function primalizar(palabrasa){
    for (var j=0;j<palabrasa.length;j++){
        for(var i=0;i<abc.length;i++){
            if(abc[i].posicion==palabrasa[j]){
                // A PARTIR DE LAS POSICIONES, FORMA UN ARRAY CON LA MULTIPLICIDAD
                primalidad_palabra.push(abc[i].multiplicidad)}}}
                calcular_tres(primalidad_palabra);
            }
// FUNCIÓN PARA REINICIAR EL CONTEO
function vaciado(){
    primalidad_palabra=[];
    palabraficticia=[];
    parrafo=[];
    nuevapalabra=[];
}
// acá est´pa el corazón del codigo
function calcular_tres(number){
    for(var i=0;i<number.length-2;i++){
        var digito=number[i]*number[i+1]*number[i+2];
    if(
        digito%8==0||digito%75==0
    ){
        // Esto interrumpe el bucle
    //console.log("esto NO es una palabra");
    console.log("bug aca")
    vaciado();
    break;
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
 // console.log (" ESTO no es una palabra")
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
     //   desencriptado=true;
        // Ahora habrá que poner en palabras
     //   console.log(palabraficticia)
       palabrizar(palabraficticia)
       vaciado();
    }
}
}


// PROBLEMAS DE LA Y


