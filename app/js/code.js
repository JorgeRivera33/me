let marco = document.getElementById('marco');
let tema = document.getElementById('tema');
let btn_iniciar = document.getElementById('btn_iniciar');
let nombre_app = document.getElementById('nombre_app');
let subtema = document.getElementById('subtema');
let icono_birrete = document.getElementById('icono_birrete');
let birrete1 = document.getElementById('birrete1');
let marco2 = document.getElementById('marco2');
let icono_birrete2 = document.getElementById('icono_birrete2');
let tema2 = document.getElementById('tema2');
let txt_actividad = document.getElementById('txt_actividad');
let txt_desAct = document.getElementById('txt_desAct');
let base_name = document.getElementById('base_name');
let dialogo = document.getElementById('dialogo');
let name_profe = document.getElementById('name_profe');
let icono_profe = document.getElementById('icono_profe');
let profe = document.getElementById('profe');
let ejercicio = document.getElementById('ejercicio');
let input_base = document.getElementById('input_base');
let input_exponente = document.getElementById('input_exponente');
let mano_base = document.getElementById('mano_base');
let mano_exponente = document.getElementById('mano_exponente');
let cuenta1 = document.getElementById('cuenta1');
let cuenta5 = document.getElementById('cuenta5');
let cuenta4 = document.getElementById('cuenta4');
let cuenta3 = document.getElementById('cuenta3');
let cuenta2 = document.getElementById('cuenta2');
let mismo5 = document.getElementById('mismo5');
let mismo3 = document.getElementById('mismo3');
let mismo1 = document.getElementById('mismo1');
let mismo2 = document.getElementById('mismo2');
let mismo4 = document.getElementById('mismo4');
let banco_imagenes =['loadFiles/01.marcoplantilla.svg','loadFiles/03.btn_play.svg','loadFiles/02.birrete.svg','loadFiles/07.caja_name.svg','loadFiles/05.iconoprofe.svg','loadFiles/04.profe1.svg','loadFiles/06.manoindice.svg'];
let banco_sonidos = [];
let banco_videos = [];
let lienzos=document.querySelectorAll('.lienzo');
let lienzo_activo=0;

window.onload=function(){console.log("esperando codigo...");}

function main(){
	btn_iniciar.addEventListener('click',function(){
		ocultarLienzos();
		lienzo_activo++;
		lienzos[lienzo_activo].style.display="block";
	});
}

function ocultarLienzos(){
	lienzos.forEach(function(item){item.style.display="none";});
}