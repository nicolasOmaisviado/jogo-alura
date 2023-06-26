
let costas1;
let costas2;
let farra1; 
let farra2;
let gameover;
let olhando;
let quieto;
let situaçao = "olhando";
let proximaalteraçao = 0;
let giz;
let grito;
let estabaguncando = false;

function preload(){
  costas1 = loadImage("costas1.jpg");
  costas2 = loadImage("costas2.jpg");
  quieto = loadImage("quieto.jpg");
  farra1 = loadImage("farra1.jpg");
  farra2 = loadImage("farra2.jpg");
  gameover = loadImage("gameover.jpg");
  olhando = loadImage("olhando.jpg");
  giz = loadSound("giz.mp3");
  giz.setLoop(true);
  grito = loadSound("grito.mp3");
  grito.setLoop(true);
  }

function setup() {
  createCanvas(1024, 576);
}

function troca() {
  situaçao === "nao olhando"
  proximaalteraçao = millis() + random(2500, 6000); 
  if (situaçao === "olhando") {
  situaçao =  "nao olhando";
  giz.play(); }
  else {
    situaçao = "olhando";
    giz.pause();
  }
}

function draw() {
  if (millis() > proximaalteraçao ) {
    troca();
  }
  
  if (situaçao === "olhando" ) {
  image(olhando, 0, 0);
  } else {
  let tempo = millis() % 1000;
  if (tempo < 500 ) {
  image(costas2, 0, 0);
  }
  else {
  image(costas1, 0, 0);
  }   
}
  
  if (mouseIsPressed || touches.length > 0 || keyIsPressed ) {
  
  if(estabaguncando === false ) {
  grito.play(); 
  estabaguncando = true;
  }
    
      
  if(situaçao === "olhando") {
    image(gameover, 0, 0)
  }
  
  let tempo = millis() % 800;
  if (tempo < 300 ) {
  image(farra1, 350, 420, 100, 160, 180, 100, 450, 720)
  }
  else {
  image(farra2, 350, 420, 100, 160, 180, 100, 450, 720)
  }
  
  tempo = millis() % 1000;
  if (tempo < 500 ) {
  image(farra1, 250, 420, 100, 160, 180, 100, 450, 720)
  }
  else {
  image(farra2, 250, 420, 100, 160, 180, 100, 450, 720)
  }
    
  tempo = millis() % 900;
  if (tempo < 500 ) {
  image(farra1, 150, 420, 100, 160, 180, 100, 450, 720)
  }
  else {
  image(farra2, 150, 420, 100, 160, 180, 100, 450, 720)
  }
    
  tempo = millis() % 500;
  if (tempo < 300 ) {
  image(farra1, 50, 420, 100, 160, 180, 100, 450, 720)
  }
  else {
  image(farra2, 50, 420, 100, 160, 180, 100, 450, 720)
  }
  
  if (situaçao === "olhando") { 
  textSize(100);
  textAlign(CENTER, CENTER);
  text ("GAME OVER", width / 2, height / 2);
  fill("black");
  giz.stop();
  grito.stop();
  noLoop(); 
  }
    
  //image(farra1, 50, 420, 100, 160, 180, 100, 450, 720)
  //image(farra1, 150, 420, 100, 160, 180, 100, 450, 720)
  //image(farra1, 250, 420, 100, 160, 180, 100, 450, 720)
  //image(farra1, 350, 420, 100, 160, 180, 100, 450, 720)
  
  }
  
  else {
  grito.pause();
  estabaguncando = false;
  image(quieto, 50, 420, 100, 160, 180, 100, 450, 720)
  image(quieto, 150, 420, 100, 160, 180, 100, 450, 720)
  image(quieto, 250, 420, 100, 160, 180, 100, 450, 720)
  image(quieto, 350, 420, 100, 160, 180, 100, 450, 720)
  }
}