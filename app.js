// board

var blockSize = 25;
var row = 20;
var cols = 20;
var board;
var context;

// snake head

var snakex = blockSize * 5;
var snakey = blockSize * 5;

// snake body
var snakeBody = [];

// snake velocity

var velocityx = 0;
var velocityy = 0;

// snake food
var foodx;
var foody;

// game ovre

var gameOver = false;

window.onload = function(){
  board = document.getElementById('board');
  board.height = row * blockSize;
  board.width = cols * blockSize;
  context = board.getContext('2d');

  placefood();
  document.addEventListener('keyup', changeDirection);
  setInterval(update, 1000/10)
}

function update (){

  if(gameOver){
    return;
  }
  context.fillStyle = 'gray';
  context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = 'lime';
  context.fillRect(foodx, foody, blockSize, blockSize)

  if(snakex == foodx && snakey == foody){
    snakeBody.push([foodx, foody])
    placefood();
  }

  for(let i = snakeBody.length-1; i > 0; i -- ){
    snakeBody[i]= snakeBody[i-1];
  }
  if(snakeBody.length){
    snakeBody[0]= [snakex, snakey]
  }

  context.fillStyle = 'pink';
  snakex += velocityx * blockSize;
  snakey += velocityy * blockSize;
  context.fillRect(snakex, snakey, blockSize, blockSize);
  for(let i = 0; i < snakeBody.length; i++){
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize)
  }

 //game over conditions
  if(snakex < 0 || snakex > cols*blockSize || snakey < 0 || snakey > rows.blockSize  ){
    gameOver = true;
    alert('game over')
  }

  for(let i = 0; i < snakeBody.length; i++){
    if(snakex = snakeBody[i][0] & snakey[i][1]){
      gameOver =  true;
      alert('game over');
    }
  }
}

function changeDirection(e){
  if(e.code == 'ArrowUp'&& velocityy != 1){
    velocityx = 0;
    velocityy = -1;
  }
  else if(e.code == 'ArrowDown' && velocityy != -1){
    velocityx = 0;
    velocityy = 1;
  }
  else if(e.code == 'ArrowLeft' && velocityx != 1){
    velocityx = -1;
    velocityy = 0;
  }
  else if(e.code == 'ArrowRight' && velocityx != -1){
    velocityx = 1;
    velocityy = 0;
  }
}

function placefood(){
  foodx = Math.floor(Math.random() * cols) * blockSize;
  foody = Math.floor(Math.random() * row) * blockSize;
}