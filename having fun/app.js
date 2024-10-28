var blocksize = 30;
var row = 25;
var col = 25;
var board;
var context;

window.onload = function (){
  board = document.getElementById('board');
  board.height = row * blocksize;
  board.width = col * blocksize;
  context = board.getContext('2d');

  update()
}

function update(){
  context.fillStyle = 'gray';
  context.fillRect(0, 0, board.width, board.height);
}