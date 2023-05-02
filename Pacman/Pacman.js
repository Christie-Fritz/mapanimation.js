var pos = 0;

let pageWidth = window.innerWidth;

const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];



var direction = 0;
var reverse = 1;
const PacMan= [];


var focus = 0;

function setToRandom(scale) {
    return{
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}
  


    function makePac() {
    
      let velocity = Math.random(10);
      let position = Math.random(200);
      
      let game = document.getElementById('game');
      let newimg = document.createElement('img');
      newimg.style.position = 'absolute';
      newimg.src = 'PacMan1.png';
      newimg.src = 'PacMan2.png';
      newimg.src = 'PacMan3.png';
      newimg.src = 'PacMan4.png';
      newimg.width = 100;
      newimg.style.left = position.x;
      newimg.style.top = position.y;
      game.appendChild(newimg);
   
    return {
        position,
        velocity,
        newimg
    }
}

function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}
setInterval(Run, 400);


function checkPageBounds(direction, imgWidth, pos, pageWidth) {
if(direction == 0 && pos + imgWidth > pageWidth) direction = 1;
  if (direction == 1 && pos < 0) direction = 0; 
  
  
  return direction;
}


module.exports = checkPageBounds;
