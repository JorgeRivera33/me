let appfs=false;
function openFullscreen() {
	let elem = document.documentElement;
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) { /* Safari */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { /* IE11 */
		elem.msRequestFullscreen();
	}
}
function closeFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) { /* Safari */
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) { /* IE11 */
		document.msExitFullscreen();
	}
}
function agregarEventoFullScreen(){
	let btnfs=document.querySelectorAll(".btnfs");
	//btnfs.setAttribute('fs','false');
	btnfs.forEach(function(item){
		item.addEventListener('click',function(){
			//let fs=this.getAttribute("fs");
			if(appfs===false){
				openFullscreen();
				//this.setAttribute("fs","true");
				appfs=true;
				this.style.background="url(img/btnfs2.png)";
				this.style.backgroundSize="100% 100%";
			}else{
				closeFullscreen();
				//this.setAttribute("fs","false");
				appfs=false;
				this.style.background="url(img/btnfs.png)";
				this.style.backgroundSize="100% 100%";
			}
		});
	});
}
agregarEventoFullScreen();