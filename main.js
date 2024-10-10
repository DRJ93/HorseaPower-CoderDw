
function abrirModal(id){
    modal = document.getElementById(id).style= 'display:block';
}
function cerrarModal(id){
    modal = document.getElementById(id).style= 'display:none';

}
const lista = document.querySelectorAll("#offcanvasResponsive");
function ocultarLista(){
    if(window.innerWidth < 768){
        lista.style.display= 'none';
    }
    else{
        lista.style.display= 'block';
    }
}
window.addEventListener('resize', ocultarLista);
ocultarLista();