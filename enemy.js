let y;
let isCheck = false;
let isStart = false;
let flagCount;

class Enemy{
    constructor(){
        this.count = 0;
        this.flagCount = 0;
        this.y = 150;
    }

    step(){
        if (isStart){
            if (this.count == 450){
                this.count = 0;
                isStart = false;
            }if (isFailed){
                //何もしない
            }else if(this.count >= 210 && this.count < 390){
                isCheck = true;
                this.count++;
            }else if(this.count >= 390){
                isCheck = false;
                this.count++;
            }else{
                this.count++;
            }
        }else{
            if (this.flagCount == 59){
                this.flagCount = 0;
                if (Math.floor(Math.random() * 6) == 0){
                    this.count = 0;
                    isStart = true;
                }
            }else{
                this.flagCount++;
            }
        }
    }

    draw(){
        if(isStart){
            if (this.count >= 0 && this.count < 30){
                drawImage("enemy", 125, this.y - this.count*2, 354, 400);
            }else if (this.count >= 30 && this.count < 180){
                drawImage("enemy", 125, this.y - 60, 354, 400);
            }else if (this.count >= 180 && this.count < 210){
                drawImage("enemy", 125, 90 - (this.count-180)*3, 354, 400);
            }else if (this.count >= 210 && this.count < 390){
                drawImage("enemy", 125, 0, 354, 400);
            }else if (this.count >= 390 && this.count < 440){
                drawImage("enemy", 125, (this.count-390)*3, 354, 400);
            }else{
                drawImage("enemy", 125, 150, 354, 400);
            }
        }else{
            drawImage("enemy", 125, 150, 354, 400);  
        } 
    }
}