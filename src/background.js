export default class Background {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.image = new Image()
        this.image.src = "../images/layer1.png"
        this.image2 = new Image()
        this.image2.src = "../images/layer2.png"
        this.x = 0;
        this.y = 0;
        this.width = 1768;
        this.height = 500;
        this.gameSpeed = 3;
    }
    update() {
        this.x = this.x - this.gameSpeed
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
        ctx.drawImage(this.image2, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image2, this.x + this.width, this.y, this.width, this.height)

    }
}
