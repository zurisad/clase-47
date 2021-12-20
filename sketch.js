
var database;
var position;
var gameState = 0;
var playerCount = 0;
var form,game,player;
var allPlayers;
var car1, car2, cars;
var distance = 0;
var move = 0;
var carImg1, carImg2, backgroundImg;
var bananaImg;
var banana;

function preload(){
    carImg1 = loadImage("car1.png");
    carImg2 = loadImage("car2.png");
    backgroundImg= loadImage("fondo3.png");
    bananaImg = loadImage("platano.png");
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  
   
}

function draw(){
    background("white");

    if(playerCount === 2){
       game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    // if(gameState=== 0){
    //     form.display();
    // }
}


