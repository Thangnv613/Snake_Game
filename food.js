class Food{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    drawFood(){
        CTX.fillStyle = 'green';
        CTX.fillRect(this.x + 2,this.y + 2,UNIT-5,UNIT-5);

    }
    clearFood(){
        CTX.fillStyle = background;
        CTX.fillRect(this.x+ 2,this.y+ 2,UNIT-5,UNIT-5);
    }
    getRandomNumber(){
        let randomNumber = Math.floor(Math.random() * GAME_SIZE)
        CTX.fillRect(this.x,this.y,UNIT ,UNIT)
        randomNumber -= randomNumber % (UNIT);
        return randomNumber;
    }
    randomFood(){
        this.clearFood();

        this.x = this.getRandomNumber();
        this.y = this.getRandomNumber();
        this.drawFood()
    }

}