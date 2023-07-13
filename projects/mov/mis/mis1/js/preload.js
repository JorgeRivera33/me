let totalAudios=0;
let totalImagenes=0;
let totalVideos=0;

//agregar funcion para mostrar en consola
//let mostrarEnConsola=false;
//agregar un contenedor para que las imagenes se guarden en ese contenedor y no queden en el documento

function activarPrecargas(){
	if(banco_sonidos.length>0){
		precargarSonidos();
	}
	if(banco_imagenes.length>0){
		precargarImagenes();
	}
	if(banco_videos.length>0){
		precargarVideos();
	}
	if(banco_sonidos.length===0 && banco_imagenes.length===0 && banco_videos.length===0){
		contarElementosCargados();
	}
			//contarElementosCargados();
		}

		function precargarSonidos(){
			banco_sonidos.forEach(function(item){
				let audio=document.createElement("audio");
				audio.setAttribute("src",item);
				let nombre=item.split("/")[1].split(".")[0];
				audio.setAttribute("id",nombre)
				document.querySelector("#lienzo").appendChild(audio);
				audio.addEventListener('canplaythrough',audioCargado,false)
			});
		}

		function audioCargado(){
			totalAudios++;
			contarElementosCargados();
		}

		function precargarImagenes(){
			banco_imagenes.forEach(function(item){
				let foto=new Image();
				foto.src=item;
				foto.addEventListener("load",imagenCargada,false);
				//foto.classList.add('precarga');
				foto.setAttribute('style','width:0px;height:0px;position: absolute;top: -1000px;left: -1000px;');
				document.querySelector("#lienzo").appendChild(foto);
			});
		}

		function imagenCargada(){
			totalImagenes++;
			contarElementosCargados();
		}

		function precargarVideos(){
			banco_videos.forEach(function(item){
				let video=document.createElement("video");
				video.setAttribute("src",item);
				let nombre=item.split("/")[1].split(".")[0];
				video.setAttribute("id",nombre)
				//video.classList.add('precarga');
				video.setAttribute('style','width:0px;height:0px;position: absolute;top: -1000px;left: -1000px;');
				document.querySelector("#lienzo").appendChild(video);
				video.addEventListener('canplaythrough',videoCargado,false)
			});
		}

		function videoCargado(){
			totalVideos++;
			contarElementosCargados();
		}