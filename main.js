
function abrirModal(id){
    modal = document.getElementById(id).style= 'display:block';
}
function cerrarModal(id){
    modal = document.getElementById(id).style= 'display:none';

}
const lista = document.getElementById('offcanvasResponsive');

function ocultarLista(){

    
    if(innerWidth < 768){

        lista.style =  'display : block';
    }
    else{
        lista.style =  'display : none';
    }

}
ocultarLista(lista);
window.addEventListener('resize', ocultarLista);
