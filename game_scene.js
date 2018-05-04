
class Game{
    constructor(){
        //round = new Round();
        //score = new Score();
    }

    step(){
        if (keyManager.isJustPressed('enter')) scene = SCENE.Over;
    }

    draw(){
        drawImage("game", 0, 0, 600, 400);
        //round.draw();
        //score.draw();
    }

}