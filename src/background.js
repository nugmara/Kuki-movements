export default class Background {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.image1 = new Image()
        this.image1.src = "../images/layer-2-cloud.png"
        this.image2 = new Image()
        this.image2.src = "../images/layer-5-ground.png"
        this.image3 = new Image()
        this.image3.src = "../images/layer-4-toxic-ocean.png"
        this.image4 = new Image()
        this.image4.src = "../images/layer-1-sky.png"
        this.image5 = new Image()
        this.image5.src = "../images/layer-7-cloud.png"
        this.image6 = new Image()
        this.image6.src = "../images/layer-3-rock-island.png"
        this.images = [this.image1, this.image2]
        this.x = 0;
        this.y = 0;
        this.y2 = 350
        this.y3 = -40
        this.y4 = 150
        this.width = 1768;
        this.height = 500;
        this.width2 = 1768
        this.height2 = 150
        this.gameSpeed = 3;
    }
    update() {
        this.x = this.x - this.gameSpeed
    }
    draw(ctx) {
        ctx.drawImage(this.image4, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image1, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image5, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image6, this.x, this.y4, this.width, this.height)
        ctx.drawImage(this.image2, this.x, this.y3, this.width, this.height)
        ctx.drawImage(this.image3, this.x, this.y2, this.width2, this.height2)


        ctx.drawImage(this.image4, this.x + this.width, this.y, this.width, this.height)
        ctx.drawImage(this.image1, this.x + this.width, this.y, this.width, this.height)
        ctx.drawImage(this.image5, this.x + this.width, this.y, this.width, this.height)
        ctx.drawImage(this.image6, this.x + this.width, this.y4, this.width, this.height)
        ctx.drawImage(this.image2, this.x + this.width, this.y3, this.width, this.height)
        ctx.drawImage(this.image3, this.x + this.width2, this.y2, this.width2, this.height2)

        // restarting the position
        if(this.x <= -this.width) this.x += this.width

    }
}
