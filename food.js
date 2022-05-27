class Food{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    drawFood(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,unit,unit);
    }
    clearFood(){
        ctx.fillStyle = background;
        ctx.fillRect(this.x,this.y,unit,unit);
    }
    getRandomNumber(){
        let randomNumber = Math.floor(Math.random() * game_size)
        ctx.fillRect(this.x,this.y,unit,unit)
        randomNumber -= randomNumber % unit;
        return randomNumber;
    }
    randomFood(){
        this.clearFood();
        this.x = this.getRandomNumber();
        this.y = this.getRandomNumber();
        this.drawFood()
    }
}