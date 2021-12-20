class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    update(state){
      database.ref('/').update({
          gameState : state
      })
    }
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,500);
        car1.addImage("hola",carImg1);
        car1.scale = 0.05;
        car2 = createSprite(300,500);
        car2.addImage("h",carImg2);
        car2.scale = 0.05;
        cars = [car1,car2];
        banana = createSprite(1050,-1500);
        banana.addImage("j",bananaImg);
        banana.scale = 0.1;
    }
    play(){
      form.hide();
      Player.getPlayerInfo();
      if(allPlayers !== undefined){
        background("green");
        image(backgroundImg,0,-displayHeight*4,displayWidth,displayHeight*5);

        
        var index = 0;
        var x = 300;
        var y = undefined;
        // imprime a todos los jugadores
        for(var plr in allPlayers){
           //display_position +=20;
          // agrega 1 por cada vez que se repite el for
          index = index+1;
          // pone distancia entre los autos
          x = x+200;
          // coloca los autos en posicion y utilizando la distancia
          y = displayHeight-allPlayers[plr].distance;
          //z = displayWidth-allPlayers[plr].move;

          // asigna las posiciones de cada auto dentro de la matriz
          cars[index-1].x = x;
          cars[index-1].y = y;
        
          // el jugador que es se pinte de rojo y la camara lo siga
          if (index === player.index ){
             cars[index-1].shapeColor ="red";
             camera.position.x = displayWidth/2;
             camera.position.y = cars[index-1].y;
             stroke(5);
             fill("red");
             ellipse(x,y,35,35);
            //  console.log(x);
            //  console.log(y);
             console.log(bananaImg.x);
          }
        }
      }
      // cuando se presiona la tecla de arriba el jugador avance
      if (keyDown("UP_ARROW")){
        player.distance +=50;
        player.update();
      }
      if (keyDown("LEFT_ARROW")){
        player.move +=50;
        player.update();
      }
      if (keyDown("RIGHT_ARROW")){
         player.move -=50;
         player.update();
     }
      // if (player.distance === 3850 ){
      //   game.update(2);
      //   player.rank +=1;
      //   Player.updateCarsAtEnd(player.rank);
      // }
      
      drawSprites();
       
    }
}