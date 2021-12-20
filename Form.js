class Form{
    constructor(){
      this.button = createButton("play");
      this.title = createElement('h2');
      this.input = createInput("nombre");
      this.title2 = createElement('h3');
      
    }
    hide(){
      this.button.hide();
      this.title.hide();
      this.input.hide();
      this.title2.hide();
    }
    display(){
      
    
      this.title.html("Juego");
      this.title.position(displayWidth/2-50,0);

      this.input.position(displayWidth/2-100,displayHeight/2-200);
      this.button.position(displayWidth/2-30,displayHeight/2-50);

      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        player.name = this.input.value();

        playerCount+=1;

        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);

        this.title2.html("bienvenido"+player.name);
        this.title2.position(displayWidth/2-20,100);
      })
    }
}