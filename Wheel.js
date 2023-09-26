export default class Wheel {
    parts = 1
    colors = [`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)} )`]
    constructor(radius, parts){
        this.x = 0
        this.y = 0
        this.radius = radius
        this.parts = parts
    }

    draw(context){
        let degrees = 2 * Math.PI / this.parts
        if (this.colors.length != this.parts){
            for(let i = 0; i < this.parts; i++){
                this.colors[i] = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)} )`
            }
        }
        for(let i = 0; i < this.parts; i++){

            let startDeg = 3*Math.PI/2
            let sinY1 = Math.sin(startDeg + (i * degrees)) * this.radius
            let sinY2 = Math.sin(startDeg + ((i+1) * degrees)) * this.radius
            let cosX1 = Math.cos(startDeg + (i * degrees)) * this.radius
            let cosX2 = Math.cos(startDeg + ((i+1) * degrees)) * this.radius
            
            context.fillStyle = this.colors[i]
            context.beginPath()
            context.moveTo(0, 0)
            context.lineTo(cosX1,sinY1)
            context.arc(0,0, this.radius, startDeg + i * degrees, startDeg + (i+1) * degrees)
            context.fill()
            context.closePath()
        }
        
    }
}

                
            