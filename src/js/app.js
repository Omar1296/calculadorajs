//Variables teclas
const btnUno = document.querySelector('#uno');
const btnDos = document.querySelector('#dos');
const btnTres = document.querySelector('#tres');
const btnCuatro = document.querySelector('#cuatro');
const btnCinco = document.querySelector('#cinco');
const btnSeis = document.querySelector('#seis');
const btnSiete = document.querySelector('#siete');
const btnOcho = document.querySelector('#ocho');
const btnNueve = document.querySelector('#nueve');
const btnCero = document.querySelector('#cero');

const btnPunto = document.querySelector('#punto');
const btnSuma = document.querySelector('#suma');
const btnResta = document.querySelector('#resta');
const btnMult = document.querySelector('#multi');
const btnDiv = document.querySelector('#division');
const btnBorrar = document.querySelector('#borrar');
const btnReset = document.querySelector('#reset');
const btnIgual = document.querySelector('#igual');

const pantalla = document.querySelector('.numeros-pantalla');

let signo;
let total = 0;

document.addEventListener('DOMContentLoaded', function() {
    pantalla.innerHTML = '';  
    asignarvalores();
    operaciones();
});

function asignarvalores(){
    btnUno.parentElement.addEventListener('click', function() {  
        let valor = 1;
        pantalla.innerHTML += valor; 
    })

    btnDos.parentElement.addEventListener('click', function() {  
        let valor = 2;
        pantalla.innerHTML += valor; 
    })

    btnTres.parentElement.addEventListener('click', function() {  
        let valor = 3;
        pantalla.innerHTML += valor; 
    })

    btnCuatro.parentElement.addEventListener('click', function() {  
        let valor = 4;
        pantalla.innerHTML += valor; 
    })

    btnCinco.parentElement.addEventListener('click', function() {  
        let valor = 5;
        pantalla.innerHTML += valor; 
    })

    btnSeis.parentElement.addEventListener('click', function() {  
        let valor = 6;
        pantalla.innerHTML += valor; 
    })

    btnSiete.parentElement.addEventListener('click', function() {  
        let valor = 7;
        pantalla.innerHTML += valor; 
    })

    btnOcho.parentElement.addEventListener('click', function() {  
        let valor = 8;
        pantalla.innerHTML += valor; 
    })

    btnNueve.parentElement.addEventListener('click', function() {  
        let valor = 9;
        pantalla.innerHTML += valor; 
    })

    btnCero.parentElement.addEventListener('click', function() {  
        let valor = 0;
        pantalla.innerHTML += valor; 
    })

    btnPunto.parentElement.addEventListener('click', function() {  
        let valor = '.';
        pantalla.innerHTML += valor; 
    })
}


function operaciones(){
    btnSuma.parentElement.addEventListener('click', function() {  
        let valor = parseFloat(pantalla.innerHTML);
        let resultado;

        switch(signo){
            case '-':
                resultado = total - valor;
                break;
            case 'x':
                resultado = total * valor;
                break;
            case '/':
                resultado = total / valor;
                break;
            default:
                resultado = total + valor;
                break;
        }

        total = resultado;
        signo = '+';
        pantalla.innerHTML = '';
    })

    btnResta.parentElement.addEventListener('click', function() {
        let valor = parseFloat(pantalla.innerHTML);
        let resultado;
        
        
        switch(signo){
            case '+':
                resultado = total + valor;
                total = resultado;                break;
            case 'x':
                resultado = total * valor;
                total = resultado;
                break;
            case '/':
                resultado = total / valor;
                total = resultado;
                break;
            default:
                if(total === 0){
                    total = valor;
                }
                else{
                    resultado = total - valor;
                    total = resultado;
                }
                break;
        }
        signo = '-';
        pantalla.innerHTML = '';
    })

    btnMult.parentElement.addEventListener('click', function() {  
        let valor = parseFloat(pantalla.innerHTML);
        let resultado;
        
        switch(signo){
            case '+':
                resultado = total + valor;
                total = resultado;
                break;
            case '-':
                resultado = total - valor;
                total = resultado;
                break;
            case '/':
                resultado = total / valor;
                total = resultado;
                break;
            default:
                if(total === 0){
                    total = valor;
                }
                else{
                    resultado = total * valor;
                    total = resultado;
                }
                signo = 'x';
                break;
        }

        pantalla.innerHTML = '';
        signo = 'x';
    })

    btnDiv.parentElement.addEventListener('click', function() {
        let valor = parseFloat(pantalla.innerHTML);
        let resultado;

        switch(signo){
            case '+':
                resultado = total + valor;
                total = resultado;
                break;
            case '-':
                resultado = total - valor;
                total = resultado;
                break;
            case 'x':
                resultado = total * valor;
                total = resultado;
                break;
            default:
                signo = '/'
                if(total === 0){
                    total = valor;
                }
                else{
                    let resultado = total / valor;
                    total = resultado;
                }
                break;
        }
        
        pantalla.innerHTML = '';
        signo = '/';
    })

    btnIgual.parentElement.addEventListener('click', function() {
        let valor = parseFloat(pantalla.innerHTML);
        let resultado;

        switch(signo){
            case '+':
                resultado = total + valor;
                total = resultado.toFixed(2);
                pantalla.innerHTML = total;
                break;
            case '-':
                resultado = total - valor;
                total = resultado.toFixed(2);
                pantalla.innerHTML = total;
                break;
            case 'x':
                resultado = total * valor;
                total = resultado.toFixed(2);
                pantalla.innerHTML = total;
                break;
            case '/':
                resultado = total / valor;
                total = resultado.toFixed(2);
                pantalla.innerHTML = total;
                break;
            default:
                break;
        }

        signo = undefined;
        total = 0;
    })

    btnReset.parentElement.addEventListener('click', function() {  
        total = 0;
        pantalla.innerHTML = '';
    })

    btnBorrar.parentElement.addEventListener('click', function(){
        pantalla.innerHTML = '';
    })
}
