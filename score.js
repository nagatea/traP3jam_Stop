let score;
let text;

class Score{
    constructor(){
        this.score = 0;
        this.text = "";
    }

    step(){
        if(!isStop && !isFailed){
           this.score++;
        }
    }

    getScore(){
        return (this.score / 100).toFixed(2);
    }

    draw(){
        this.text = (this.score / 100).toFixed(2) + "m";
        context.globalAlpha = 1.0;
        context.fillStyle = "black";
        context.font = "30px 'Agency'";
        context.textAlign = "right";
        context.fillText(this.text, 600, 30);
    }
}