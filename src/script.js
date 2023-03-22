import Player from "./player.js"
import InputHandler from "./input.js"
import {drawStatusText} from "./utils.js"

window.addEventListener("load", function(){
    const loading = document.getElementById("loading")
    loading.style.display = "none";
    const canvas = document.getElementById("canvas1")
    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight

    const player = new Player(canvas.width, canvas.height)
    const input = new InputHandler()
    
    function animate() {
        // console.log(input.lastKey)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        player.draw(ctx)
        drawStatusText(ctx, input)
        requestAnimationFrame(animate)
        
    }
    animate()

})