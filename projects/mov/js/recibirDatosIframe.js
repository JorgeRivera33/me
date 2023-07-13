window.addEventListener('message', function(event) {
  // Comprueba si el origen del mensaje es el iframe
  if (event.source === iframe.contentWindow) {
    // Aquí puedes acceder a los datos enviados desde el iframe
    let datos = event.data;
    //definimos una funcion para procesar los datos
    procesarDatosIframe(datos);
  }
});

///dentro del iframe 
/*
  En actividad.html (dentro del iframe)
  Supongamos que tienes un objeto de datos que deseas enviar al archivo padre

  var datos = {
    mensaje: 'Hola desde el iframe',
    valor: 42
  };

  Envía los datos al archivo padre
  window.parent.postMessage(datos, '*');
*/