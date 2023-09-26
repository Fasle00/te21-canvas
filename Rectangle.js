export default class Rectangle {
    constructor(x, y, width, height, color){
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        this.vx = 2
        this.vy = 2
        this.color = color
    }

    update(canvas){
        this.nextPosition()

        if(this.x + this.width >= canvas.width || this.x <= 0) this.vx = -this.vx
        if(this.y + this.height >= canvas.height || this.y <= 0)this.vy = -this.vy

    }

    nextPosition() {
        this.x += this.vx
        this.y += this.vy
    }

    draw(context){
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}