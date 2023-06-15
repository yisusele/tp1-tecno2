//-------CONFIGURACION----
let AMP_MIN = 0.03; // umbral mínimo de amplitud. Señal que supera al ruido de fondo
let AMP_MAX = 0.1; // umbral máximo de amplitud. 
let FREC_MIN = 180;
let FREC_MAX = 800;
//-----ENTRADA DE AUDIO----
let mic;
//-----AMPLITUD----
let amp; //variable donde cargo los valores de amplitud del sonido de entrada
let haySonido = false; // vaiable buleana que de define el ESTADO
let nohaySonido =false;
let antesHabiaSonido = false; //memoria de la variable "haySonido". Guarda el valor de la variable en fotograma anterior
//----FRECUENCIA -----
let audioContext; //motor de audio del navegador
let frecuencia; //variable donde cargo los valores de frecuencia del sonido de entrada
let frecuenciaAnterior; //memoria de la variable "frecuencia". Guarda el valor de la variable en fotograma anterior
const pichModel = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';
let muchafrec =false;

//----IMAGENES -----
let fondo, papel; //los background
let imagen;
let cantimg =17;

//----PGRAPHICS---
let capa1;
let capa2; 
//---CLASES
let fig;
let capt;

var estado =[];

let t=300; //tranasparencua de la foto final

function preload(){
  fondo = loadImage('/assets/fondo.png');
  papel = loadImage('/assets/papel.jpg');
  
  for (var i = 1; i < 17; i++) {
    var imagen = loadImage("assets/figu/fig" + i + ".png");
    peq.push(imagen);
  }
  for (var i = 1; i < 19; i++) {
    var imagen = loadImage("assets/figu/figura" + i + ".png");
    med.push(imagen);
  }
}

function setup() {
  createCanvas(900,height);
  //image(fondo, 0, 0, 900, height)
  
  fig = new Figuras();
  capt = new Capturas();  

  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(startPitch);
  userStartAudio(); // esto lo utilizo porque en algunos navigadores se cuelga el audio. Esto hace un reset del motor de audio (audio context)
}

function draw() {
  windowResized();
  imageMode(CENTER)
  image(fondo, width/2, height/2, 1200, height)
  
  amp = mic.getLevel();

  haySonido = amp > AMP_MIN;
  nohaySonido =amp<AMP_MIN;
  
  let empezoElSonido = haySonido && !antesHabiaSonido; // EVENTO
  antesHabiaSonido = haySonido; //guardo el estado anterior
  //frecuencias
  let difDeFrecuencia = frecuencia - frecuenciaAnterior;
  frecuenciaAnterior = frecuencia;
  
  if(empezoElSonido){ //cambian el estado de las figuras 
    //let e= random(0, 17);
    A=A+1;
  }

  if(haySonido){
//    fig.actualizar(amp, frecuencia, difDeFrecuencia);
    fig.moverx ();
  }

  fig.dibujarcapa1();
  fig.dibfig();
  capt.dibujarcapa2();
  capt.capturar();


  
 
 // let mifrec = map(frecuencia, FREC_MIN, FREC_MAX, 0, 255, true);
  muchafrec = frecuencia >FREC_MAX;
  if (muchafrec){
  
      t=t-45;

    fill(255,255,255,t);
    rect (0,0,windowWidth, windowHeight);
   if (captura) {
    capa2.image(captura, 0, 0, windowWidth,windowHeight); // Mostrar la captura en (0, 0)
 }
  }

}


function windowResized() { //funcion para actualizar el tam de la pantalla
  resizeCanvas(windowWidth, windowHeight);
}


//-------FRECUENCIA-----
function startPitch() {
  pitch = ml5.pitchDetection(pichModel, audioContext , mic.stream, modelLoaded);
}
function modelLoaded() {
  getPitch();
}

function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (frequency) {
      frecuencia = frequency;
    } else {
    }
    getPitch();
  })
}
