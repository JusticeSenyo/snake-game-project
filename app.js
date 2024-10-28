

// //board size and number of rows and colums

// var blockSize = 25;
// var rows = 20;
// var cols = 20;
// var board;
// var context;

// // snake head at a specified coordinate

// var snakeX = blockSize * 5;
// var snakeY = blockSize * 5;

// // move snake......adding some velocity to make the snake move later on
// var velocityX = 0;
// var velocityY = 0;

// // food without a specified coordinate(randomized)

// var foodX;
// var foodY;



// //loads all our drawings on the page
// window.onload = function(){
//   board = document.getElementById('board');
//   board.height = rows * blockSize;
//   board.width = cols * blockSize;
//   context = board.getContext('2d');

//   placefood();
//   document.addEventListener('keyup', changeDirection)
//   // update();
//   setInterval(update, 1000 / 10);
// }

// function update(){

//   //drawing the game board
//   context.fillStyle = 'gray'
//   context.fillRect (0, 0 , board.width, board.height);
//     // drawing the food

//   context.fillStyle = 'pink';
//   context.fillRect(foodY, foodX, blockSize, blockSize);

// if(snakeX === foodX && snakeY === foodY){
//   placefood();
// }

//   //drawing the snake head
//   context.fillStyle = 'lime';
//   snakeX += velocityX * blockSize;
//   snakeY += velocityY * blockSize;
//   context.fillRect(snakeX, snakeY , blockSize, blockSize);



// }


// //adding if statements so the snake where t move based on user input
// function changeDirection(e){
// if(e.code === 'ArrowUp'){
//   velocityX = 0;
//   velocityY = -1;
// }
// else if(e.code === 'ArrowDown'){
//   velocityX = 0;
//   velocityY = 1;
// }
// else if(e.code === 'ArrowLeft'){
//   velocityX = -1;
//   velocityY = 0;
// }
// else if(e.code === 'ArrowRight'){
//   velocityX = 1;
//   velocityY = 0;
// }
// }
// //this function randomly places the food anywhere
// function placefood(){ 
//   foodX = Math.floor(Math.random() * cols) * blockSize;
//   foodY = Math.floor(Math.random() * rows) * blockSize;
// }

// board

var blockSize = 25;
var rows = 20;
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

var change = document.getElementById('changedirection');
var Eat = document.getElementById('eat');
var playagain = document.getElementById('playagain')
 var opacity = document.getElementById('board');


window.onload = function(){
  board = document.getElementById('board');
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext('2d');

  placefood();
  Eat.play();
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
    Eat.play()
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
    playagain.style.display = 'block';
    board.style.filter = 'blur(5px)'
  }

  for(let i = 0; i < snakeBody.length; i++){
    if(snakex = snakeBody[i][0] & snakey[i][1]){
      gameOver =  true;
      playagain.style.display = 'block'
      opacity.style.filter = 'blur(5px)'
      
    }
  }
}
function refreshpage(){
  location.reload();
}
playagain.addEventListener('click', (refreshpage))

function changeDirection(e){
  if(e.code == 'ArrowUp'&& velocityy != 1){
    change.play();
    velocityx = 0;
    velocityy = -1;
  }
  else if(e.code == 'ArrowDown' && velocityy != -1){
        change.play();

    velocityx = 0;
    velocityy = 1;
  }
  else if(e.code == 'ArrowLeft' && velocityx != 1){
        change.play();

    velocityx = -1;
    velocityy = 0;
  }
  else if(e.code == 'ArrowRight' && velocityx != -1){
        change.play();

    velocityx = 1;
    velocityy = 0;
  }
}

function placefood(){
  
  foodx = Math.floor(Math.random() * cols) * blockSize;
  foody = Math.floor(Math.random() * rows) * blockSize;
}