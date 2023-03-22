const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image()
playerImage.src = "./images/shadow_dog.png"
const spriteWidth = 575;
const spriteHeight = 523;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    // ctx.fillRect(50,50, 100, 100)
    // ctx.drawImage(image, sx, sy, sw, sh, the last four arguments will tell js where on our
    // destination canvas we want to draw just that cropped out part onto => dx, dy, dw, dh)
    ctx.drawImage(playerImage, 0, 0, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
    requestAnimationFrame(animate)
}
animate();