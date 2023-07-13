function escalarYCentrar() {
		  // Obtenemos el div que queremos escalar y centrar
		  let div = document.getElementById("lienzo");

		  // Le aplicamos los estilos necesarios
		  div.setAttribute('style','position:absolute; left:0%; top:0%; transform:translate(-50%, -50%); transform-origin: 0% 0%;');
		  
		  // Obtenemos las dimensiones de la ventana del navegador
		  let anchoVentana = window.innerWidth;
		  let altoVentana = window.innerHeight;
		  
		  // Calculamos el factor de escala en base al ancho y alto del div
		  let factorAncho = anchoVentana / 731;
		  let factorAlto = altoVentana / 411;
		  let factorEscala = Math.min(factorAncho, factorAlto);
		  
		  // Escalamos el div
		  div.style.transform = "scale(" + factorEscala + ")";
		  
		  // Centramos el div en la ventana
		  let anchoEscalado = 731 * factorEscala;
		  let altoEscalado = 411 * factorEscala;
		  let margenHorizontal = (anchoVentana - anchoEscalado) / 2;
		  let margenVertical = (altoVentana - altoEscalado) / 2;
		  div.style.marginLeft = margenHorizontal + "px";
		  div.style.marginTop = margenVertical + "px";
		}
		window.addEventListener("load", escalarYCentrar);
		window.addEventListener("resize", escalarYCentrar);