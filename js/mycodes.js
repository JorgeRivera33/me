function escalarCentrar(lienzo) {
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

function determinarsiespc() {
	//retorna true si es pc false si es movil
	let navegador = navigator.userAgent;
	if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
		return (false);
	} else {
		return (true);
	}
}