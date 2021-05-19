//Canvas variables
let canvasElement = document.getElementById("spaceGameCanvas");
let ctx = canvasElement.getContext("2d");
let canvasWidth = canvasElement.width;
let canvasHeight = canvasElement.height;
let x = canvasWidth/2;
let y = canvasHeight/2;

//Asteroid variables
let asteroidImage = new Image(32, 32);
asteroidImage.src = './img/AsteroidImage.png';
let asteroidRadius = 10;
let dx = 2;
let dy = 2;

//Adds the asteroids to the game
function drawAsteroid() {
    ctx.beginPath()
    ctx.arc(x, y, asteroidRadius, 0, Math.PI*2);
    ctx.src = asteroidImage;
    ctx.fill();
    ctx.closePath();
}

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

//Tracks mouse
canvasElement.addEventListener('mousemove', function(event) {
   mouse.x = event.x - canvasPosition.left;
   mouse.y = event.y - canvasPosition.top;

});

//Shoots laser when mouse clicked
canvasElement.addEventListener('mousedown', function(event) {

});

//TO DO
// Add projectile when mouse is clicked
canvasElement.addEventListener('mousedown', function(event) {

});

function draw() {
    clear();
    drawAsteroid();
    if(x + dx > canvasWidth-asteroidRadius || x + dx < asteroidRadius) {
        dx = -dx;
    }

    if(y + dy < asteroidRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

draw();

let interval = setInterval(draw, 10);