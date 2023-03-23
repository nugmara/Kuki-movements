import Player from "./player.js"
import InputHandler from "./input.js"
import Background from "./background.js"

window.addEventListener("load", function(){
    const loading = document.getElementById("loading")
    loading.style.display = "none";
    const canvas = document.getElementById("canvas1")
    const ctx = canvas.getContext("2d")
    canvas.width = 600
    canvas.height = 500

    const player = new Player(canvas.width, canvas.height)
    const input = new InputHandler()
    const background = new Background(canvas.width, canvas.height)

    let lastTime = 0;
    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp
        // console.log(input.lastKey)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        player.update(input.lastKey)
        background.draw(ctx)
        // background.update()
        player.draw(ctx, deltaTime)
        requestAnimationFrame(animate)
        
    }
    animate(0)

})