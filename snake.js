const CANVAS = document.getElementById('mysnack');
const game_size = 800;
const unit = 40;
const snack_color = 'black';
CANVAS.width = CANVAS.height = game_size;
const ctx = CANVAS.getContext('2d');
const background = 'white';
ctx.fillStyle = background;
ctx.fillRect(0,0,game_size,game_size);
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
            new Position( unit*5,unit*3),
            new Position( unit*5,unit*3),
        ]
        this.speed = new Position(-1,0)
    }
    draw() {
        if (this.body[0].x)
            ctx.fillStyle = 'red';
        ctx.fillRect(this.body[0].x, this.body[0].y, unit, unit);
        ctx.fillStyle = snack_color;
        for (let i = 1; i < this.body.length; i++) {
            ctx.fillRect(this.body[i].x, this.body[i].y, unit, unit);
        }
        for (let i = 0; i < 100; i++) {
            let grid = unit * i;
            ctx.beginPath();
            ctx.moveTo(grid, 0);
            ctx.lineTo(grid, 1000);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, grid);
            ctx.lineTo(1000, grid);
            ctx.stroke();
            ctx.closePath();
        }
    }
    // xóa vị trí khi snack chạy
    clear(){
        ctx.fillStyle = background;
        ctx.fillRect( this.body[0].x,this.body[0].y,unit,unit);
        ctx.fillStyle = background;
        for(let i = 1; i < this.body.length; i++){
            ctx.fillRect( this.body[i].x,this.body[i].y,unit,unit);
            if (player.body[0].x === player.body[i].x && player.body[0].y === player.body[i].y && player.body.length >= 3) {
                clearInterval(set);
                alert('You die!!')
            }
        }
    }
    move(){
        //xóa xong vẽ lại
        this.clear();
        for(let i = this.body.length - 1; i >= 1;i--){
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        this.body[0].x += this.speed.x * unit;
        this.body[0].y += this.speed.y * unit;
        this.draw();
    }
}




