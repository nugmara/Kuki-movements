export default class Enemies {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.image = new Image()
        this.image.src = "../images/obs_fish.png"
        this.image2 = new Image()
        this.image2.src = "../images/obs_shark.png"
        this.x = 1000;
        this.y = 318;
        this.x2 = 700
        this.y2 = 415
        this.width = 111.375;
        this.height = 183.375;
        this.width2 = 90
        this.height2 = 90.3
    }
    draw(ctx) {
    
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image2, this.x2, this.y2, this.width2, this.height2)

    }
    update(){
        this.x--
        this.x2--
    }
}