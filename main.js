let player = new Snack()
player.draw();
// set thời gian cho chạy liên tục
let set = setInterval(()=>{
    player.move()
    checkFood();
    checkWall();

},200);
//chặn vị trí k cho bấm ngược lại
let tempPosition = new Position(-1,0);
let food = new Food()
food.randomFood();

let count = 0;
let snake_length = player.body.length;
function run() {
    switch (event.keyCode) {
        case 37: {
            if(tempPosition.x === 1){
                break;
            }
            player.speed = new Position(-1,0);
            tempPosition = new Position(-1,0);
            break;
        }
        case 38: {
            if(tempPosition.y === 1){
            break;
        }
            player.speed = new Position(0,-1);
            tempPosition = new Position(0,-1);
            break;
        }
        case 39: {
            if(tempPosition.x === -1){
                break;
            }
            player.speed = new Position(1,0);
            tempPosition = new Position(1,0);
            break;
        }
        case 40: {
            if(tempPosition.y === -1){
                break;
            }
            player.speed = new Position(0,1);
            tempPosition = new Position(0,1);
            break;
        }
    }
    player.draw();

}
function checkFood() {
    if(food.x === player.body[0].x && food.y === player.body[0].y){
        player.audio.play()
        count +=1111;
        document.getElementById('ting').innerHTML = `Score: ${count}`;
        addFood();

    }

}

function addFood() {
    //tăng thêm chiều dài cho rắn
    let addX = player.body[snake_length - 1].x - player.body[snake_length - 2].x;
    let addY = player.body[snake_length - 1].y- player.body[snake_length - 2].y ;
    let newSnake = new Position(
        player.body[snake_length-1].x + addX,
        player.body[snake_length-1].y + addY
    )
    player.body.push(newSnake);
    player.draw()
    food.randomFood()

    if (food.x === player.body[i].x && food.y === player.body[i].y)
    {
        food.randomFood()
    }
}

function checkWall() {
    if (player.body[0].x < 0) {
        player.body[0].x = GAME_SIZE - UNIT;
    }
    if (player.body[0].y < 0) {
        player.body[0].y = GAME_SIZE - UNIT;
    }
    if (player.body[0].x > GAME_SIZE - UNIT) {
        player.body[0].x = 0;
    }
    if (player.body[0].y > GAME_SIZE - UNIT) {
        player.body[0].y = 0;
    }
}


// function reset(){
//      setInterval(()=>{
//         player.move()
//         checkFood();
//         checkWall();
//     },200);
//     player.draw()
//     food.randomFood();
// }
