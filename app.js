

//board

var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

// snake head

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

// food

var foodX;
var foodY;

// move snake
var velocityX = 0;
var velocityY = 0;



window.onload = function(){
  board = document.getElementById('board');
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext('2d');
  placefood();
  document.addEventListener('KeyUp', changedirection)
  // update();
  setInterval(update(), 1000 / 10)
}

function update(){

  //drawing the game board
  context.fillStyle = 'gray'
  context.fillRect (0, 0 ,board.width, board.height);

  //drawing the snake head
  context.fillStyle = 'lime';
  snakeX += velocityX;
  snakeY += velocityY;
  context.fillRect(snakeX, snakeY , blockSize, blockSize)

  // drawing the food
  context.fillStyle = 'pink';
  context.fillRect(foodY, foodX, blockSize, blockSize)

}

function changedirection(e){
if(e.code === 'ArrowUp'){
  velocityX = 0;
  velocityY = -1;
}
else if(e.code === 'ArrowDown'){
  velocityX = 0;
  velocityY = 1;
}
else if(e.code === 'ArrowLeft'){
  velocityX = -1;
  velocityY = 0;
}
else if(e.code === 'ArrowRight'){
  velocityX = 1;
  velocityY = 0;
}
}

function placefood(){ 
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}