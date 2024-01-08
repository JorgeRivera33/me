console.log("creando menufs");
agregarMenuFs();
agregarEstilosFs();
let menufs = document.getElementById("menufs");
let btn_menu = document.getElementById("btn_menu");
let btn_fulls = document.getElementById("btn_fulls");
//let btncerrar=document.getElementById("btncerrar");
agregarEventosMenuFs();

function agregarMenuFs() {
	let lienzos = document.getElementById("lienzos");
	let menu = '<!--menu--><div id="menufs" class=""><div id="btn_menu"></div><div id="btn_fulls" class="btn_menu"></div><div id="btn_cerrar" class="btn_menu"></div></div>';
	lienzos.insertAdjacentHTML("beforeend", menu);
}

function agregarEstilosFs(){
	let head = document.querySelector("head");
	let css = '<link rel="stylesheet" href="css/menufs.css">';
	head.insertAdjacentHTML("beforeend", css);
}

function agregarEventosMenuFs() {
	btn_menu.addEventListener("click", function() {
		if (menufs.classList.contains('open')) {
			plegarMenu();
		} else {
			desplegarMenu();
		}
	});
	btn_fulls.addEventListener("click", function() {
		toggleFullscreen(document.getElementById("mfs"));
	});
	/*
	btncerrar.addEventListener("click",function(){
		console.log("esperando codigo para cerrar");
		plegarMenu();
	});
	*/
}

function desplegarMenu() {
	btn_menu.style.transform = "rotate(90deg)";
	addStyle(btn_fulls, {
		'top': '75px',
		'opacity': '1'
	});
	//addStyle(btncerrar,{'top':'70px','opacity':'1'});
	menufs.classList.add("open");
}

function plegarMenu() {
	btn_menu.style.transform = "rotate(0deg)";
	addStyle(btn_fulls, {
		'top': '0px',
		'opacity': '0'
	});
	//addStyle(btncerrar,{'top':'0px','opacity':'0'});
	menufs.classList.remove("open");
}

function toggleFullscreen(element) {
	if (!document.fullscreenElement &&
		!document.mozFullScreenElement &&
		!document.webkitFullscreenElement &&
		!document.msFullscreenElement
	) { // El elemento no está en modo de pantalla completa
		colocarFullS(element);
		ponerIconoQF();
		plegarMenu();
	} else { // El elemento está en modo de pantalla completa
		quitarFullS(element);
		ponerIconoF();
		plegarMenu();
	}
}

function colocarFullS(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen();
	} else if (element.msRequestFullscreen) {
		element.msRequestFullscreen();
	}
}

function quitarFullS(element) {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	}
}

function ponerIconoQF() {
	btn_fulls.style.backgroundImage = "url('loadFiles/btnfs2.svg')";
}

function ponerIconoF() {
	btn_fulls.style.backgroundImage = "url('loadFiles/btnfs.svg')";
}

function addStyle(element, stylejson) {
	for (const property in stylejson) {
		//console.log(`${property}: ${stylejson[property]}`);
		element.style[property] = stylejson[property];
	}
}
