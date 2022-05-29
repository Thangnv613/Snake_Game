const CANVAS = document.getElementById('mysnack');
const GAME_SIZE = 600;
const UNIT = 30;
const SNAKE_COLOR = 'gray';
CANVAS.WIDTH = CANVAS.HEIGHT = GAME_SIZE;
const CTX = CANVAS.getContext('2d');
const background = 'white';
CTX.fillStyle = background;
CTX.fillRect(0,0,GAME_SIZE,GAME_SIZE);
// Tạo 1 class lưu vị trí
class Position{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}
class Snack{
    constructor() {
        this.body=[
            new Position( UNIT*5,UNIT*3),
            new Position( UNIT*5,UNIT*3),
        ]
        this.speed = new Position(-1,0)
        this.audio = new Audio('linhtinh/score.mp3')
        this.audio2 = new Audio('linhtinh/die.mp3')
    }
    draw() {
        CTX.fillStyle = SNAKE_COLOR;
        for (let i =1; i < this.body.length; i++) {
            CTX.fillRect(this.body[i].x +2, this.body[i].y + 2, UNIT-5, UNIT-5);
        }
        CTX.strokeStyle = "gray";
        for (let i = 0; i < 100; i++) {
            let f = UNIT * i;
            CTX.beginPath();
            CTX.moveTo(f, 0);
            CTX.lineTo(f, 800);
            CTX.stroke();
            CTX.beginPath();
            CTX.moveTo(0, f);
            CTX.lineTo(800, f);
            CTX.stroke();
            CTX.closePath();
        }
    }

    // xóa vị trí khi snack chạy
    clear() {
        CTX.fillStyle = background;
        for (let i = 1; i < this.body.length; i++) {
            CTX.fillRect(this.body[i].x +2, this.body[i].y +2, UNIT-5, UNIT-5);
            if (player.body[0].x === player.body[i].x && player.body[0].y === player.body[i].y && player.body.length >= 3) {
                this.audio2.play()
                alert('You die!')
                clearInterval(set);
            }
        }
    }
    move(){
        this.clear();

        for(let i = this.body.length - 1; i >= 1;i--){
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        this.body[0].x += this.speed.x * UNIT;
        this.body[0].y += this.speed.y * UNIT;

        this.draw();
    }
}




