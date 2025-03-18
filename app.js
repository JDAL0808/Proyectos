let numeroSecreto = 0;
let contador = 0;
let numeroSorteados = [];
let numeroMaximo = 10;
//creamos una funcion que valide el intento del usuario
function verificarIntento(){
    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario == numeroSecreto){
            asignarTextoElemento('p',`has acertado el numero es: ${numeroSecreto} en el intento numero ${contador}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // el usuario no acerto
        if(numeroSecreto < numeroDeUsuario ){
            asignarTextoElemento('p','el numero secreto es menor');
        }else{
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        contador++;
        limpiarCaja();
    }
    return;
}

function asignarTextoElemento(_elemento,texto){
    //seleccionamos el titulo mediante queryselector que nos permite interacctuar con elementos html con javascrip
    let elementoHTML = document.querySelector(_elemento);
    //ponemos un titulo
    elementoHTML.innerHTML = texto;
    //selecionmos un parrafo
    return;
}

function generarNumeroSecreto() {
    
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(numeroSorteados);

   // si ya logramos sortear todos los numeros 
    if(numeroSorteados.length == numeroMaximo-1){
        asignarTextoElemento('p','Ya se han sorteado todos los numeros posibles');
        document.querySelector('#intentar').setAttribute('disabled','true');
    }
    if(numeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        numeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value='';
}
function CondicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Introduce un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    contador = 1;
}
function reiniciarJuego(){
    //primero limpiamos la caja 
    limpiarCaja();
    CondicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
CondicionesIniciales();
