//----FIGURAS -----
let x=-10; //posx de las figuras
let xvel=-10;

var separacionX = 100; // Separación horizontal entre imágenes
var separacionY = 100; // Separación vertical entre imágenes

let A=0; //valor inicial del array
var peq = [];
this.med = [];

class Figuras {
  
  constructor(){
    let voz=100; //valor inicial
    capa1 = createGraphics (900, windowHeight-200);    
    
    //cargar imagenes (estan en el preload y el constructor pra q carguen en la capa)
    for (var i = 1; i < 17; i++) {
      var imagen = loadImage("assets/figu/fig" + i + ".png");
      peq.push(imagen);
    }
    for (var i = 1; i < 19; i++) {
      var imagen = loadImage("assets/figu/figura" + i + ".png");
      med.push(imagen);
    }
    A = (A + 1) % 17; //para el estado de las imagenes Incrementar A en 1 y asegurarse de que esté en el rango de 0 a 16

  }
  

  dibujarcapa1(){
    push ();
    imageMode (CENTER);
    image (capa1,windowWidth/2, windowHeight/2);
    capa1.background(papel);
    pop();
  }

  moverx(){
   if (x<=1500){
     x+=3;
    } else if (x>=windowWidth-290){
      x=-10;
    }
   if (xvel<=1500){
     xvel+=5;
    } else if (x>=1500){
      xvel=-10;
    }
  }

  dibfig(){
   // angleMode(DEGREES); //cambia a angulo
    let mivoz = map(amp,nohaySonido, AMP_MIN,haySonido, AMP_MAX );
    let mifrec = map(frecuencia, FREC_MIN, FREC_MAX, 0, 255, true);
    // let a =( 20/-mouseY );
   //let mivoz =mic;
   let tam =50;
   let a=mivoz/20;
   let b=(mivoz*2)/PI;
   //let a=mifrec/6;
   //let b=mifrec;
   // Ajustar velocidad de rotate para figuras de la derecha
  let rotateSpeed = map(b,-PI/2, PI, width/70, height/150);


      
   capa1.push();
   capa1.translate(0,height);
   capa1.rotate(100+a);

   
   capa1.image(peq [9],xvel,50,tam,tam);
   capa1.image(peq [10],xvel+400,70,tam,tam);
   capa1.image(peq [11],xvel+550,120,tam,tam);
   capa1.image(peq [12],xvel+700,180,tam,tam);
   capa1.image(peq [13],xvel+850,240,tam,tam);
   capa1.image(peq [14],xvel+950,300,tam,tam);
   capa1.image(peq [15],xvel+220,350,tam,tam);
   capa1.image(peq [16],xvel+100,410,tam,tam);
   
   capa1.image(med [0],x+758,200);
   capa1.image(med [1],x+80,100);
   capa1.image(med [2],x+115,350);
   capa1.image(med [3],x+600,400);
   capa1.image(med [4],x+300,750);
   capa1.image(med [5],x+400,800);
   capa1.image(med [6],x+550,145);
   capa1.image(med [7],x+700,400);
   capa1.image(med [8],x+100,870);
   
   
   capa1.pop();



   capa1.push();
   capa1.translate(windowWidth, windowHeight-10);
   capa1.rotate(b*rotateSpeed); // Ajustar velocidad de rotate

   
   capa1.image(peq [0],xvel,100,tam,tam);
   capa1.image(peq [1],xvel+50,200,tam,tam);
   capa1.image(peq [2],xvel+70,300,tam,tam);
   capa1.image(peq [3],xvel+140,400,tam,tam);
   capa1.image(peq [4],xvel+220,500,tam,tam);
   capa1.image(peq [5],xvel+350,600,tam,tam);
   capa1.image(peq [6],xvel+780,700,tam,tam);
   capa1.image(peq [7],xvel+550,800,tam,tam);
   capa1.image(peq [8],xvel+667,900, tam,tam);
  
   
  
   capa1.image(med [9],x+85,200);
   capa1.image(med [10],x+115,300);
   capa1.image(med [11],x+225,400);
   capa1.image(med [12],x+335,500);
   capa1.image(med [13],x+445,600);
   capa1.image(med [14],x+555,600);
   capa1.image(med [15],x+665,700);
   capa1.image(med [16],x+775,800);
   capa1.image(med [17],x+885,900);
   capa1.pop();
  }



}