let captura;

/*function keyPressed() { //esto se cambia por la funcion/condicion de frecuencia
    captura = get(); //me devuelve el canvas(captura) del momento q lo invoco
    if (key === 's') {
      html2canvas(document.querySelector('canvas')).then(function(canvas) {
        captura = canvas.toDataURL('/assets/image/png');
        console.log('Captura generada:', captura);
      });
     
    }
}*/
  
class Capturas {
   
    constructor(){
        capa2 = createGraphics (windowWidth, windowHeight);

    }
    capturar(){
        captura = get(); //me devuelve el canvas(captura) del momento q lo invoco
       if (muchafrec) {
            html2canvas(document.querySelector('canvas')).then(function(canvas) {
                 captura = canvas.toDataURL('/assets/image/png');
                 console.log('Captura generada:', captura);
            });
            
        }
    }
    
    dibujarcapa2(){
        imageMode(CENTER);
        image (capa2,width/2,height/2);
       /* if (captura) {
           capa2.image(captura, 0, 0, windowWidth,windowHeight); // Mostrar la captura en (0, 0)
        }*/
    }
}