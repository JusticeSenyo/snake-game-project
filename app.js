const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const snake = [
  {x: 160, y: 160},
  {x: 140, y: 160},
  {x: 120, y: 160},
  {x: 100, y: 160},
  {x: 80, y: 160},
];

let food = {x: 200, y: 200};
let dx = 20;
let dy = 0;
let score = 0;

document.addEventListener('keydown', changeDirection);

function changeDirection(event){
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;

  const keyPressed = event.keyCode;

  if(keyPressed === LEFT_KEY && dx === 0){
    dx = -20;
    dy = 0;
  }
  if(keyPressed === RIGHT_KEY && dx === 0){
    dx = 20;
    dy = 0;
  }
  if(keyPressed === UP_KEY && dy === 0){
    dx = 0;
    dy = -20;
  }
  if(keyPressed === DOWN_KEY && dy === 0){
    dx = 0;
    dy = 20;
  }
}

function randomFood(){
  let foodx, foody;
  do {
    foodx = 
      Math.floor(Math.random() * canvas.Width / 20) * 20;
    foody =
      Math.floor(Math.random() * canvas.Height / 20) * 20;
    }while(snake.some(segment => segment.x === foodx && segment.y === foody));

    food = {x: foodx, y: foody};

}

function drawSnake(){
  snake.forEach(segment => {
    ctx.fillStyle = 'green';
    ctx.fillRect(segment.x, segment.y, 20, 20);
    ctx.strokeStyle = 'darkgreen';
    ctx.strokeRect(segment.x, segment.y, 20,20);
  });
}

function drawFood(){
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, 20, 20);
  ctx.strokeStyle = 'darkred';
  ctx.strokeRect(food.x, food.y, 20,20);

}

function drawScore(){
  ctx.fillStyle = 'red'
}

function clearCanvas(){
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.Width, canvas.Height);
}

function main(){
  clearCanvas();
  drawSnake();
  drawFood();
}
main();

let dx = 20;
let dy = 0;



function moveSnake(){
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};
  snake.unshift(head);
  snake.pop();
}

function main(){
  setTimeout(() => {
      clearCanvas();
      moveSnake();
      drawSnake();
      drawFood();
      main();
  }, 100);
}




function moveSnake(){
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};
  snake.unshift(head);

  if(head.x === food.x && head.y === food.y){
    randomFood();
  }else{
    snake.pop();
}
}

function checkCollsion(){
  const head = snake[0];

  if(head.x < 0 || head.x >= canvas.Width || head.y < 0 || head.y += canvas.Height) {
    return true
  }
  for(let i = 4; i < snake.length; i++){
    if(head.x === snake[i].x && head.y === snake[i].y){
      return true;
    }
  }
  return false;
}

  function main(){
    if(checkCollsion()) {
      alert('game over ! press ok to restart.');
      snake.length = 0;
      snake.push(  
  {x: 160, y: 160},
  {x: 140, y: 160},
  {x: 120, y: 160},
  {x: 100, y: 160},
  {x: 80, y: 160});

  dx = 20;
  dy = 0;

  randomFood();
    }else{
      setTimeout(() => {
        clearCanvas();
        moveSnake();
        drawSnake();
        drawFood();
        main();
      },100);
    }
  }

  main();
