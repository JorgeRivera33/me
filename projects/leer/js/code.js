const titulo=document.querySelector("#titulo");
		const texto=document.querySelector("#texto");
		const autor=document.querySelector("#autor");
		const preguntas=document.querySelector("#preguntas");
		const evaluar=document.querySelector("#evaluar");
		const continuar=document.querySelector("#continuar");
		const regresar=document.querySelector("#regresar");
		const msj=document.querySelector("#msj");
		const part1=document.querySelector("#part1");
		const part2=document.querySelector("#part2");
		const intentos=document.querySelector("#intentos");
		const pie=document.querySelector("#pie");
		let cintentos=0;

		window.onload=function(){
			document.querySelector("#app").style.display="block";
			main();
		}

		function colocarTitulo(){titulo.innerHTML=vtitulo;}
		function colocarAutor(){autor.innerHTML=vautor;}
		function mostrarBotonEvaluar(){evaluar.style.display="block";}
		function colocarTexto(){
			let t=vtexto.split("\n");
			t.forEach(function(item,index){
				let p=document.createElement("div");
				p.setAttribute("class","parrafo"); 
				p.innerHTML=item;
				texto.appendChild(p);
			});
		}
		function colocarCuestionario(){
			cuestionario.forEach(function(item,index){
				let pregunta=item.pregunta;
				let opciones=item.opciones;
				let respuesta=item.respuesta;

				let p=document.createElement("div");
				p.setAttribute("class","pregunta");
				p.setAttribute("r",respuesta);
				let p1=document.createElement("div");
				p1.innerHTML=(index+1)+". "+pregunta;
				p1.setAttribute("class","txtpreg");
				p.appendChild(p1);
				preguntas.appendChild(p);

				opciones.forEach(function(item,index){
					let r=document.createElement("div");
					r.innerHTML=item;
					r.setAttribute("class","respuesta");
					p.appendChild(r);
				}); 
			}); 
		}
		function colocarReferencia(){
			let a=document.createElement("a");
			a.setAttribute("href",link);
			a.setAttribute("target","_blank");
			a.innerHTML=pagina;
			pie.appendChild(a);
		}
		function agregarEventoRespuestas(){
			let respuestas=document.querySelectorAll(".respuesta");
			respuestas.forEach(function(item,index){
				item.addEventListener('click',function(){
					let padre=event.currentTarget.parentNode;
					let hijos=padre.querySelectorAll(".respuesta");
					hijos.forEach(function(item,index){
						item.style.borderBottom="0px";
						item.style.color="gray";
					});
					item.style.color="black";
					item.style.borderBottom="2px solid orange";
					let letra=item.innerHTML.charAt(0);
					padre.setAttribute("m",letra);
				}); 
			}); 
		}
		function agregarEventoEvaluar(){
			evaluar.addEventListener("click",function(){
				cintentos++;
				let p=document.querySelectorAll(".pregunta");
				let cantidad=p.length;
				let errores=0;
				p.forEach(function(item,index){
					let r=item.getAttribute("r");
					let m=item.getAttribute("m");
					if(r.split("")[2]!==m){errores++;}
				});
				let mmsj=`De ${cantidad} preguntas has obtenido ${cantidad-errores} bien.`;
				msj.innerHTML=mmsj;
				intentos.innerHTML=`Intentos: ${cintentos}`;
			}); 
		}
		function agregarEventoContinuar(){
			continuar.addEventListener("click",function(){
				part1.style.display="none";
				part2.style.display="block"; 
				window.scrollTo(0,0);
			}); 
		}
		function agregarEventoRegresar(){
			regresar.addEventListener("click",function(){
				part1.style.display="block";
				part2.style.display="none"; 
				window.scrollTo(0,0);
			}); 
		}

		function main(){
			colocarTitulo();
			colocarTexto();
			colocarAutor();
			colocarCuestionario();
			colocarReferencia();
			agregarEventoRespuestas();
			agregarEventoEvaluar();
			agregarEventoContinuar();
			agregarEventoRegresar();
			mostrarBotonEvaluar();
		}