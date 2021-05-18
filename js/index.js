//Canvas variables
let canvasElement = document.getElementById("spaceGameCanvas");
let ctx = canvasElement.getContext("2d");
let canvasWidth = canvasElement.width;
let canvasHeight = canvasElement.height;

//Player Image
let playerImage = new Image(32, 32);
playerImage.src = './img/SpaceShip.png';

//Mouse Movement and Clicking
let canvasPosition = canvasElement.getBoundingClientRect();
let mouse = {
    x: canvasElement.width/2,
    y: canvasElement.height/2,
    click: false
}

//Canvas Clearing
function clear() {
    ctx.clearRect(0, 0, 1024, 576);
}

canvasElement.addEventListener('mousemove', function(event) {
   mouse.x = event.x - canvasPosition.left;
   mouse.y = event.y - canvasPosition.top;
   clear();
   ctx.drawImage(playerImage, mouse.x, mouse.y);

});

//TO DO
// Add projectile when mouse is clicked
canvasElement.addEventListener('mousedown', function(event) {

});