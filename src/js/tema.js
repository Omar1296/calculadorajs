const labels = document.querySelectorAll('.caja-tema div label');
const body = document.querySelector('body');
const interruptor = document.querySelector('.circulo');
let valor = document.querySelector('input[name="tema"]:checked').value;

document.addEventListener('DOMContentLoaded', function () {  
    cambiarTema();
})

function cambiarTema(){

    labels.forEach(label =>{
        label.addEventListener('click', function () {  
            setTimeout(function(){
                valor = document.querySelector('input[name="tema"]:checked').value;
                if(valor == '1'){
                    interruptor.className = 'circulo';
                    body.className = '';
                }
                else if(valor == '2'){
                    interruptor.className = 'circulo tema2';
                    body.className = 'cont-tema2';
                }
                else if(valor == '3'){
                    interruptor.className = 'circulo tema3';
                    body.className = 'cont-tema3';
                }

            }, 10);
        });
    })
    
}