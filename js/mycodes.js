function gescalarCentrar(lienzo) {
	//propiedades del lienzo
	//border: 1px solid gray; width: 731px; height: 411px; transform-origin: center center; position: relative;
	let anchoventana = "";
	let altoventana = "";
	let anchoapp = lienzo.offsetWidth;
	let altoapp = lienzo.offsetHeight;
	let pc = determinarsiespc();
	if (pc) {
		anchoventana = window.innerWidth - 20;
		altoventana = window.innerHeight - 30;
	} else {
		//si es movil
		anchoventana = window.screen.availWidth - 20;
		altoventana = window.screen.availHeight - 30;
	}
	let scale = Math.min(anchoventana / anchoapp, altoventana / altoapp);
	lienzo.style.transform = `translate(-50%,-50%) scale(${scale}) translate(50%,50%)`;
	lienzo.parentNode.style.height = (411 * scale) + "px";
	lienzo.style.left = "0px";
	let padre = lienzo.parentNode;
	let anchopadre = padre.offsetWidth;
	let ancholienzo = lienzo.offsetWidth * scale;
	if (anchopadre > ancholienzo) {
		let d = (anchopadre - ancholienzo) / 2;
		lienzo.style.left = d + "px";
	}
}

function gdeterminarsiespc() {
	//retorna true si es pc false si es movil
	let navegador = navigator.userAgent;
	if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
		return (false);
	} else {
		return (true);
	}
}

function gselect(selector){
	switch(selector.charAt(0)){
		case '#':
			return(document.querySelector(selector));
		break;
		case '.':
			return(document.querySelectorAll(selector));
		break;
		default:
			return(document.querySelectorAll(selector));
		break;
	}
}

function gagregarEstilo(element, stylejson) {
	for (const property in stylejson) {
		//console.log(`${property}: ${stylejson[property]}`);
		element.style[property] = stylejson[property];
	}
}

function gbuscarEnArray(valor, array) {
	let find = false;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === valor) {
			find = true;
			break;
		}
	}
	if (find) {
		return (true);
	} else {
		return (false);
	}
}

function gaddClass(element, clase) {
	element.classList.add(clase);
	//element.classList.remove('nombreclase');
	//element.classList.contains('nombreclase');
}

function gremoveClass(element,clase){
	///
	element.classList.remove(clase);
}

////////////////////
function ghabilitarTeclas(array) {
	let body = document.querySelector("body");
	body.addEventListener('keydown', kd1);
}
let kd1=function(e) {
	let keycode = e.keyCode || e.which;
	console.log(keycode);
	if (array.length > 0) {
		if (!buscarEnArray(keycode, array)) {
			event.preventDefault();
			return false;
		}
	} else {
		if (buscarEnArray(keycode, array)) {
			event.preventDefault();
			return false;
		}
	}
}

function gdeshabilitarTeclas(){
	let body = document.querySelector("body");
	body.removeEventListener('keydown',kd1);
}
///////////////////

function gmostrarkeyCode() {
	let body = document.querySelector("body");
	body.addEventListener('keydown', function(e) {
		let keycode = e.keyCode || e.which;
		console.log(keycode);
	});
}

function gagregarMouseOver(array,funcion){
	for(let i=0;i<array.length;i++){
		array[i].addEventListener("mouseover",funcion);
	}
}

function gremoverMouseOver(array,funcion){
	for(let i=0;i<array.length;i++){
		array[i].removeEventListener("mouseover",remover);
	}
}

function gdesordenarArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

function gseleccionarAlAzarDelArray(array, quantity) {
	///
	return gdesordenarArray([...array]).slice(0, quantity);
}

/////////////////////
function gcrear(args){
    ele = document.createElement(args.node);
    delete args.node;
    for(x in args){ 
        if(typeof ele[x]==='string'){
            ele[x] = args[x];
        }else{
            ele.setAttribute(x, args[x]);
        }
    }
    return ele;
}
/*
$('body')[0].appendChild(_new({
    node:'div',
    id:'my-div',
    style:'position:absolute; left:100px; top:100px;'+
          'width:100px; height:100px; border:2px solid red;'+
          'cursor:pointer; background-color:HoneyDew',
    innerHTML:'My newly created div element!',
    value:'for example only',
    onclick:"alert('yay')"
}));
*/
//////////////////////

function gcrearVidrio(element){
	let w=element.offsetWidth;
	let h=element.offsetHeight;
	let t=element.offsetTop;
	let l=element.offsetLeft;
	let p=element.parentNode;
	let vidrio=document.createElement("div");
	vidrio.setAttribute("id","vidrio");
	vidrio.style=`width:${w}px; height:${h}px; position:absolute; top:${t}px; left:${l}px; background:black; z-index:100; opacity:0.5;`;
	p.appendChild(vidrio);
}

function showMsg(elementpadre, titulo, contenido, txtboton = 'Aceptar') {

	crearVidrio(elementpadre);

	if(!select("#hemsg")){
		let hestilos=document.createElement("style");
		hestilos.setAttribute("id","hemsg");
		select("head").appendChild(hestilos);

		let hoja='#cmsg{width:580px; height: 310px; background: #323232; border-left:15px solid #f0c40d; position: absolute; top:-1000px; left: 0; right:0; bottom:0; margin:auto; transform-origin:center center; z-index:110; transition: top 0.5s ease-in-out;}'+'\n'+
		'#cmsg #cerrar{background: #f0c40d; position: absolute; padding:15px 5px 10px 5px; right: 5px; user-select: none; cursor: pointer; font-weight: bold;}'+'\n'+
		'#cmsg #titulo{user-select:none; text-align: center; color: white; margin-top:30px; font-weight: bold; font-size: 18px;}'+'\n'+
		'#cmsg #linea{width:500px; height: 2px; background: gray; margin:10px auto;}'+'\n'+
		'#cmsg #ccontenido{width:500px; height:190px; border:0px solid white; margin:0 auto; color:white; overflow-y: auto; padding-top: 10px;}'+'\n'+
		'#cmsg #btnaceptar{width: 80px; height: 30px;padding:5px 10px; background:#f0c40d; position:absolute; right:0; left: 0; margin: auto; bottom: 5px;user-select: none; font-weight: bold; cursor: pointer; text-align: center;}'+'\n'+
		"#cmsg #btnaceptar:hover{border-radius:5px;}"

		agregarReglaCss(hestilos,hoja);
	}

	let marco=document.createElement("div");
	marco.setAttribute("id","cmsg");

	let ecerrar=document.createElement("div");
	ecerrar.setAttribute("id","cerrar");
	ecerrar.innerHTML="X";

	let etitulo=document.createElement("div");
	etitulo.setAttribute("id","titulo");
	etitulo.innerHTML=titulo;

	let elinea=document.createElement("div");
	elinea.setAttribute("id","linea");

	let econtenido=document.createElement("div");
	econtenido.setAttribute("id","ccontenido");
	econtenido.innerHTML=contenido;

	let eaceptar=document.createElement("div");
	eaceptar.setAttribute("id","btnaceptar");
	eaceptar.innerHTML=txtboton;

	marco.appendChild(ecerrar);
	marco.appendChild(etitulo);
	marco.appendChild(elinea);
	marco.appendChild(econtenido);
	marco.appendChild(eaceptar);

	ecerrar.onclick=function(){
		this.parentNode.style.top='-1000px';
		select("#vidrio").remove();
	}
	
	eaceptar.onclick=function(){
		this.parentNode.style.top='-1000px';
		select("#vidrio").remove();
	}

	elementpadre.appendChild(marco);
	setTimeout(function(){agregarEstilo(marco,{top:"0"})},10);	
}
