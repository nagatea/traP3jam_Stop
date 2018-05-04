
let nowTime;
let end;

class Ready{
    constructor(time){
        this.time = time;
        this.nowTime = 0;
        this.end = false;
        this.count = 0;
    }

    step(){
        this.nowTime++;
        if (this.nowTime > 60){
            this.nowTime = 0;
            this.time--;
        }
        if (this.time == 0){
            this.end = true;
        }
        if (this.count == 59){
            this.count = 0;
        }else{
            this.count++;
        }
    }

    draw(){
        drawImage("game", 0, 0, 600, 400);
        context.globalAlpha = 1.0;
        context.fillStyle = "black";
        context.font = "80px 'Agency'";
        context.textAlign = "center";
        context.fillText(this.time, canvas.width/2, canvas.height/2+10);
        if (this.count >= 0 && this.count < 15){
            drawImage("player1", 250, 290, 100, 70);
        }else if (this.count >= 15 && this.count < 30){
            drawImage("player2", 250, 290, 100, 70);
        }else if (this.count >= 30 && this.count < 45){
            drawImage("player1", 250, 290, 100, 70);
        }else if (this.count >= 45 && this.count < 60){
            drawImage("player2", 250, 290, 100, 70);
        }
    }

    isEnd(){
        return this.end;
    }
}