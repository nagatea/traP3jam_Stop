let count;

class Game{
    constructor(){
        //round = new Round();
        //score = new Score();
        this.count = 0;
    }

    step(){
        if (keyManager.isJustPressed('enter')) scene = SCENE.Over;
        if (this.count == 59){
            this.count = 0;
        }else{
            this.count++;
        }
    }

    draw(){
        drawImage("game", 0, 0, 600, 400);
        if (this.count >= 0 && this.count < 15){
            drawImage("player1", 250, 290, 100, 70);
        }else if (this.count >= 15 && this.count < 30){
            drawImage("player2", 250, 290, 100, 70);
        }else if (this.count >= 30 && this.count < 45){
            drawImage("player1", 250, 290, 100, 70);
        }else if (this.count >= 45 && this.count < 60){
            drawImage("player2", 250, 290, 100, 70);
        }
        //round.draw();
        //score.draw();
    }

}