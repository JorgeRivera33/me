window.onresize=function(){
			let g=document.querySelectorAll(".ggaleria");
			g.forEach(function(item,index){
				adaptarContenedor(item);
			});
			//posicionamos los botones de control
			let b=document.querySelectorAll(".btncontrol");
			b.forEach(function(item,index){
				posicionarBoton(item);
			});
		}
		function agregarEventosMenu(){
			let a=document.querySelectorAll(".sjornadas");
			a.forEach(function(item,index){
				item.addEventListener("change",function(){
					let menu=item.parentNode.parentNode;
					let array=eval(menu.getAttribute("base"));
					filtrar(menu,array);
				});
			});
			let b=document.querySelectorAll(".stipo");
			b.forEach(function(item,index){
				item.addEventListener("change",function(){
					let menu=item.parentNode.parentNode;
					let array=copias[Number(menu.getAttribute("base"))];
					let contenedor=menu.nextElementSibling;
					filtrar(menu,array);
					contenedor.innerHTML="";
					mostrarRecurso(contenedor);
					mostrarBotones(contenedor);
				});
			});
			let c=document.querySelectorAll(".ssedes");
			c.forEach(function(item,index){
				item.addEventListener("change",function(){
					let menu=item.parentNode.parentNode;
					let array=eval(menu.getAttribute("base"));
					filtrar(menu,array);
				});
			});
		}
		function crearGaleria(contenedor,array){
			let cont=document.querySelector("#"+contenedor);
			let menu=crearMenu(array);
			cont.appendChild(menu);
			let pos=menu.parentNode.getAttribute("pos");
			copias[pos]=array;
			menu.setAttribute("base",pos);
			let contgaleria=crearContGaleria();
			cont.appendChild(contgaleria);
			adaptarContenedor(contgaleria);
			filtrar(menu,array);
			mostrarRecurso(contgaleria);
			mostrarBotones(contgaleria);
		}
		function crearMenu(array){
			//construimos el select para el array
			//construimos un array para los tipos de recursos
			let arraytipos=[];
			let arraysedes=[];
			let arrayjorns=[];

			let tipook=false;
			let sedeok=false;
			let jornok=false;
			array1=array;
			array1.forEach(function(item,index){
				//tomamos el tipo de recurso
				let tipo=item.tipo;
				//console.log(tipo);
				let sede=item.sede;
				let jorn=item.jornada;
				//buscarmos el tipo en el array de tipos
				arraytipos.find(function(a){if(a===tipo){tipook=true;}});
				arraysedes.find(function(a){if(a===sede){sedeok=true;}});
				arrayjorns.find(function(a){if(a===jorn){jornok=true;}});
				if(!tipook){arraytipos.push(tipo);}else{tipook=false;}
				if(!sedeok){arraysedes.push(sede);}else{sedeok=false;}
				if(!jornok){arrayjorns.push(jorn);}else{jornok=false;}
			});
			//console.log(arraytipos);
			////console.log(arraysedes);
			////console.log(arrayjorns);

			//creamos el menu que contendra los selects
			let menu=document.createElement("div");
			menu.setAttribute("class","menu1");
			menu.setAttribute("base","");
			//menu.setAttribute("cont","");
			menu.setAttribute("pos","0");

			//creamos un contenedor para el select de los tipos de recursos
			let ct=document.createElement("div");
			ct.setAttribute("class","ctipos");

			//creamos un label para los recursos
			let lt=document.createElement("label");
			lt.innerHTML="Recurso:";

			//creamos el select
			let st=document.createElement("select");
			st.setAttribute("class","stipo");

			//creamos los option para el select de tipos
			arraytipos.forEach(function(item){
				let option=document.createElement("option");
				option.setAttribute("value",item);
				if(item==="f"){
					option.innerHTML="Fotos";
				}else if(item==="v"){
					option.innerHTML="Vídeos";
				}
				st.appendChild(option);
			});

			//creamos un contenedor para el select de las sedes
			let cs=document.createElement("div");
			cs.setAttribute("class","csedes");

			//creamos un label para las sedes
			let ls=document.createElement("label");
			ls.innerHTML="Sedes:";

			//creamos el select
			let ss=document.createElement("select");
			ss.setAttribute("class","ssedes");

			//creamos los option para el select de sedes
			arraysedes.forEach(function(item){
				let option=document.createElement("option");
				option.setAttribute("value",item);
				option.innerHTML=item.toUpperCase();
				ss.appendChild(option);
			});


			//creamos un contenedor para el select de las jornadas
			let cj=document.createElement("div");
			cj.setAttribute("class","cjornadas");

			//creamos un label para las jornadas
			let lj=document.createElement("label");
			lj.innerHTML="Jornada:";

			//creamos el select
			let sj=document.createElement("select");
			sj.setAttribute("class","sjornadas");

			//creamos los option para el select de sedes
			arrayjorns.forEach(function(item){
				let option=document.createElement("option");
				option.setAttribute("value",item);
				if(item==="t"){
					option.innerHTML="Tarde";
				}else if(item==="m"){
					option.innerHTML="Mañana";
				}
				
				sj.appendChild(option);
			});

			//unimos todo
			ct.appendChild(lt);
			ct.appendChild(st);
			cs.appendChild(ls);
			cs.appendChild(ss);
			cj.appendChild(lj);
			cj.appendChild(sj);
			menu.appendChild(ct);
			menu.appendChild(cs);
			menu.appendChild(cj);
			return(menu);
		}
		function crearContGaleria(){
			let a=document.createElement("div");
			a.setAttribute("class","ggaleria");
			return(a);
		}
		function adaptarContenedor(contenedor){
			////console.log("adaptar contenedor");
			////console.log(contenedor);
			//redimensionamos el contenedor
			let iw=contenedor.parentNode.offsetWidth-10;
			//let ih=contenedor.parentNode.offsetHeight-10;
			////console.log("medidas del padre");
			////console.log(iw,ih);
			//toma las medidas de la pantalla
			////console.log("medidas de la pantalla");
			//let pw=window.innerWidth;
			let ph=window.innerHeight;
			////console.log(pw, ph);
			//determinamos la altura de acuerdo al ancho del padre
			let altura=(iw*((411/731)*100))/100;
			//determinamos el ancho de acuerdo al alto del padre
			//let ancho=(ih*((731/411)*100))/100;

			if(altura>ph){
				////console.log("debe adaptarse al alto de pantalla");
				contenedor.style.width="auto";
				contenedor.style.height=ph+"px";
			}else{
				////console.log("debe adaptarse el ancho de la pantalla");
				contenedor.style.width="auto";
				contenedor.style.height=altura+"px";
			}
		}
		function filtrar(menu,array){
			let tipo=menu.querySelector(".stipo").value;
			let sede=menu.querySelector(".ssedes").value;
			let jorn=menu.querySelector(".sjornadas").value;
			let pos=menu.parentNode.getAttribute("pos");
			//filtro de jornada
			let r1=array.filter(function(element){
				if(element.jornada===jorn){
					return(element);
				}
			});
			//filtro por sede
			let r2=r1.filter(function(element){
				if(element.sede===sede){
					return(element);
				}
			});
			//filtro por tipo
			let r3=r2.filter(function(element){
				if(element.tipo===tipo){
					return(element);
				}
			});
			
			filtrados[pos]=r3;
		}
		function mostrarRecurso(contenedor){
			let posfiltrado=contenedor.parentNode.getAttribute("pos");
			let indicerecu=contenedor.previousElementSibling.getAttribute("pos");
			let array=filtrados[posfiltrado][indicerecu];
			let img="";
			if(array.tipo==="f"){
				//console.log("foto");
				img=document.createElement("img");
			}else if(array.tipo==="v"){
				//console.log("video");
				img=document.createElement("video");
				img.setAttribute("controls","true");
			}
			img.setAttribute("src",array.link);
			img.setAttribute("class","contrec");
			img.style.aspectRatio=array.rel;
			let rel=array.rel.split("/");
			if(Number(rel[0])===731 && Number(rel[1])===411){
				//console.log("completo");
				img.style.width="100%";
				img.style.height="100%";
			}else if(Number(rel[0])===731){
				//console.log("ancho completo");
				img.style.width="100%";
			}else if(Number(rel[1])===411){
				//console.log("alto completo");
				img.style.height="100%";
			}
			//img.addEventListener("click",mostrarSiguiente);
			contenedor.appendChild(img);
			//adaptarImagen(img);
		}
		function mostrarSiguiente(event){
			let contenedor=event.target.parentNode;
			let menu=contenedor.previousElementSibling;
			//let posabuelo=menu.parentNode.getAttribute("pos");
			//determinamos cuantos elemento son
			let pos=Number(menu.parentNode.getAttribute("pos")); 
			//let cantidad=filtrados[pos].length;
			////console.log(cantidad);
			let indice=Number(menu.getAttribute("pos"));
			indice++;
			if(!filtrados[pos][indice]){
				indice=0;
			}
			menu.setAttribute("pos",indice);
			contenedor.innerHTML="";
			mostrarRecurso(contenedor);
			//adaptarImagen(event.target);
			mostrarBotones(contenedor);
		}
		function mostrarAnterior(event){
			//console.log("anterior");
			let contenedor=event.target.parentNode;
			let menu=contenedor.previousElementSibling;
			//let posabuelo=menu.parentNode.getAttribute("pos");
			//determinamos cuantos elemento son
			let pos=Number(menu.parentNode.getAttribute("pos")); 
			//let cantidad=filtrados[pos].length;
			////console.log(cantidad);
			let indice=Number(menu.getAttribute("pos"));
			indice--;
			//console.log(indice);
			if(!filtrados[pos][indice]){
				indice=filtrados[pos].length-1;
			}
			menu.setAttribute("pos",indice);
			contenedor.innerHTML="";
			mostrarRecurso(contenedor);
			//adaptarImagen(event.target);
			mostrarBotones(contenedor);
		}
		function mostrarBotones(contenedor){
			let a=document.createElement("div");
			a.setAttribute("id","btn_izq");
			a.setAttribute("class","btncontrol");
			let ch=contenedor.offsetHeight;
			contenedor.appendChild(a);
			let aw=a.offsetHeight;
			//console.log(aw);
			a.style.top=(ch/2)-(aw/2)+"px";
			a.addEventListener("click",function(event){
				//console.log("izquierda");
				mostrarAnterior(event);
			});

			let b=document.createElement("div");
			b.setAttribute("id","btn_der");
			b.setAttribute("class","btncontrol");
			//let ch=contenedor.offsetHeight;
			contenedor.appendChild(b);
			let bw=b.offsetHeight;
			b.style.top=(ch/2)-(bw/2)+"px";
			b.addEventListener("click",function(event){
				//console.log("derecha");
				mostrarSiguiente(event);
			});
		}
		function posicionarBoton(boton){
			let padre=boton.parentNode;
			let ch=padre.offsetHeight;
			let aw=boton.offsetHeight;
			boton.style.top=(ch/2)-(aw/2)+"px";
		}