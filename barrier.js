let STATE = {
  Dish : 1
};
let state;
let x;

class Barrier{
  constructor(){
      this.state = STATE.Dish;
      this.count = 0;
      this.x = 650;
      // TODO : ランダム
  }

  step(){
    if(!isStop && !isFailed){
        if (this.x < -200){
            this.x = 650;
        }else{
            this.x = this.x - 3;
        }
    }
  }

  getXPoint(){
      return this.x + 85;
  }

  draw(){
      switch (this.state) {
          case 1:
              drawImage("dish", this.x, 150, 170, 200);
              break;
          default:
              drawImage("dish", this.x, 150, 170, 200);
              break;
      }
  }
}