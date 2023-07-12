function s_element(selector) {
    return document.querySelector(selector);
}

function addStyle(element, stylejson) {
    for (const property in stylejson) {
        //console.log(`${property}: ${stylejson[property]}`);
        element.style[property] = stylejson[property];
    }
}

function ejecutarIntro() {
    let estilo = {
        'transform': 'translateY(0px) rotateX(0deg)'
    };
    addStyle(s_element("#space1"), estilo);
    addStyle(s_element("#space2"), estilo);
}

function buscarEnArray(valor, array) {
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

let teclas_usar="";
let accion="";

function habilitarTeclas(array,act) {
    teclas_usar=array;
    accion=act;
    let body = document.querySelector("body");
    body.addEventListener('keydown', kd1);
}
let kd1=function(e) {
        let keycode = e.keyCode || e.which;
        console.log(keycode);
        if (teclas_usar.length > 0) {
            if(accion==="h"){
                if (!buscarEnArray(keycode, teclas_usar)) {
                    event.preventDefault();
                    return false;
                }
            }else if(accion==="b"){
                if (buscarEnArray(keycode, teclas_usar)) {
                    event.preventDefault();
                    return false;
                }
            }
        }
    }
function deshabilitarTeclas(){
        let body = document.querySelector("body");
        body.removeEventListener('keydown',kd1);
        teclas_usar="";
        accion="";
}

function mostrarkeyCode() {
    let body = document.querySelector("body");
    body.addEventListener('keydown', function(e) {
        let keycode = e.keyCode || e.which;
        console.log(keycode);
    });
}

function reloadPage() {
   // window.location.reload();
   volverPresentar();
}

function addClass(element, clase) {
    element.classList.add(clase);
    //element.classList.remove('nombreclase');
    //element.classList.contains('nombreclase');
}

function removeClass(element,clase){
    element.classList.remove(clase);
}

function mostrarBien() {
    addStyle(imgr2, {
        'display': 'block'
    });
    addClass(imgr2, 'pulso');
}

function onAllLoad(funcion) {
    s_element("body").onload = funcion;
}

function transitionEndEventName() {
    var i,
        undefined,
        el = document.createElement('div'),
        transitions = {
            'transition': 'transitionend',
            'OTransition': 'otransitionend', // oTransitionEnd in very old Opera
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        };

    for (i in transitions) {
        if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
            return transitions[i];
        }
    }
}

function onAnimationEnd(element, funcion) {
    s_element("#space2").addEventListener(transitionEndEventName(), funcion);
}

function volverPresentar(){
    addStyle(s_element("#space1"),{transform: 'translateY(-1000px) rotateZ(360deg)'});
        addStyle(s_element("#space2"),{transform: 'translateY(1000px) rotateZ(360deg)'});
        onAnimationEnd(s_element("#space2"),function(){
            removeClass(imgr2,'pulso');
            addStyle(imgr2,{'display':'none'});
            addStyle(control,{'display':'none'});
            addStyle(menu,{'display':'flex'});
            mostrarPregunta(indice);
        }); 
}
function mostrarPregunta(indice){
    let resultado=a[indice].r;
    let ejercicio=a[indice].e;
    let teclas=a[indice].t;
    let tbloquea=a[indice].b;
    //console.log(teclas);
    let d=a[indice].d;

    nivel.innerHTML=Number(indice)+1;
    ejecutarIntro();
    //console.log(s_element('body'));
    deshabilitarTeclas();
    if(teclas.length>0){
       habilitarTeclas(teclas,'h'); 
   }else{
        habilitarTeclas(tbloquea,'b');
   }
    
    //mostrarkeyCode();
    btnrecargar.onclick=reloadPage;
    areaeje.value=resultado;
    areatxt.value=ejercicio;
    desc.innerHTML=d;
}

function activarEval(){
    areatxt.oninput=function(){
                if(areaeje.value===areatxt.value){
                    //console.log("listo");
                    addStyle(menu,{'display':'none'});
                    addStyle(control,{'display':'flex'});
                    mostrarBien();
                }else{
                    //console.log(areaeje.value);
                    //console.log(areatxt.value);
                    addStyle(menu,{'display':'flex'});
                    addStyle(control,{'display':'none'});
                }
            };
}

function activarBtnControl(){
    back.onclick=function(){

    }
    next.onclick=function(){
        indice++;
        volverPresentar();
    }
}

function mostrarEjercicio(numero){
    indice=numero-1;
    mostrarPregunta(indice);
}