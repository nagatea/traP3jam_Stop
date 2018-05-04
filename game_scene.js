let count;
let isStop;
let barrier;
let enemy;
let isCollision;
let isFailed;
let failedCount;

class Game{
    constructor(){
        //round = new Round();
        score = new Score();
        this.count = 0;
        isStop = false;
        barrier = new Barrier();
        enemy = new Enemy();
        isCollision = false;
        isFailed = false;
        this.failedCount = 0;
    }

    step(){
        //if (keyManager.isJustPressed('enter')) scene = SCENE.Over;
        if ((grid.x > 0 && grid.x < 600 && grid.y > 0 && grid.y < 400 && mouseManager.isJustPressed('left')) || keyManager.isJustPressed('enter')){
            if (isStop){
                isStop = false;
            }else{
                isStop = true;
            }
        }
        if(!isStop && !isFailed){
            if (this.count == 59){
                this.count = 0;
            }else{
                this.count++;
            }
        }
        barrier.step();
        enemy.step();
        score.step();

        //衝突判定
        if (Math.abs(barrier.getXPoint() - 300) < 32){
            isCollision = true;
        }else{
            isCollision = false;
        }

        //ゲームオーバー判定
        if (isCheck && !isCollision){
            isFailed = true;
        }

        if (isFailed){
            this.failedCount++;
            if (this.failedCount == 150) location.assign("https://twitter.com/intent/tweet?text=ネコの目を盗んで" + score.getScore() + "m進んだ！%23進むネズミと見張るネコ%20%23traP3jam%20%0a&url=http://traP3jam-Stop.nagatech.trap.show/");
        }
    }

    draw(){
        //console.log(isCollision);
        drawImage("game", 0, 0, 600, 400);
        enemy.draw();
        drawImage("game2", 0, 144, 600, 256);
        barrier.draw();
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
        score.draw();
        if (isFailed){
            drawImage("failed", 310, 280, 60, 65);
        }
    }

}