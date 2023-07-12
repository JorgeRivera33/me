function agregarEventoInput(opciones){
	$("#eval").click(function(){
		let v=$("#areatxt").html();
		let r=$("#areaeje").html();
		if(opciones!==undefined){
			let c=false;
			for(let i=0;i<opciones.length;i++){
				console.log(v);
				console.log(opciones[i]);
				if(v===opciones[i]){
					evalbien(v,r);
					c=true;
					break;
				}
			}
			if(c===false){
				evalmal(v,r);
			}
		}else{
			if(v===r){
				evalbien(v,r);
			}else{
				evalmal(v,r);
			}
		}
	});

	function evalbien(v,r){
		$("#menu").css("display","none");
		$("#recargar").css("display","none");
		$("#control").css("display","flex");
		console.log(v);
		console.log(r);
	}

	function evalmal(v,r){
		console.log("hay error");
		console.log(v);
		console.log(r);
	}
}
function agregarEventoRecargar(){
	$("#recargar").click(function(){window.location.reload();});
}
function ejecutarIntro(){
	//setTimeout(function(){
	$("#space1").css("transform","translateY(0px) rotateX(0deg)");
	$("#space2").css("transform","translateY(0px) rotateX(0deg)");
	//},2000);
}
function desordenarArray(){
	teclase=teclase.sort(function(){return Math.random()-0.5});
	console.log(teclase);
}
function mostrarTecla(){
	if(teclase[indice]){
		let a=teclase[indice].split(":");
		tecla=a[1];
		$("span").html(a[0]);
	}else{
		$("#control").css("display","flex");
	}
}
function agregarAnimacion(){
	$("#imgr").addClass("pulso");
	$("#imgr").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
		$("#imgr").removeClass("pulso");
	});
}
function rotarZ(){
	$("#space1").addClass("rotarZ");
	$("#space1").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
		$("#space1").removeClass("rotarZ");
		activo=true;
	});
}