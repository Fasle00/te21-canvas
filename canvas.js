import Rectangle from './Rectangle.js'
import Wheel from './Wheel.js'

export function setup(element) {

    const app = document.querySelector('#app')
    const canvas = document.querySelector('#test')
    const context = canvas.getContext('2d')
    const WIDTH = 800
    const HEIGHT = 600
    canvas.width = WIDTH
    canvas.height = HEIGHT
    let x = 200

    const wheel = new Wheel(100,15)
/*
    let rectArray = []

    for (let i = 0; i < 10; i++) {
        const rect = new Rectangle(1+i, 1, 10*i+20, 200 - i*10)
        rect.color = `rgb(
            ${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)}
            )`
        rectArray.push(rect)
    }
*/
    app.addEventListener('click', () => {
        context.rotate(Math.PI/4)
    })
    context.translate(canvas.width/2, canvas.height/2)

    function step() {
        context.clearRect(0,0,canvas.width,canvas.height)

        context.fillStyle = 'green'
        /* {
        let deg = 3*Math.PI/2 + toRadian(45)
        let deg90 = Math.PI/2
        let deg2 = deg + deg90
        context.beginPath()
        context.moveTo(0,0)
        context.lineTo(Math.cos(deg)*50, Math.sin(deg) * 50)
        context.arc(0,0,50,deg, deg2)
        context.fill()
        context.closePath()
        context.fillStyle = 'red'
        context.beginPath()
        context.moveTo(0,0)
        context.lineTo(Math.cos(deg2)*50, Math.sin(deg2 + deg90) * 50)
        context.arc(0,0,50,deg2, deg2 + deg90)
        context.fill()
        context.closePath()
    } */
        wheel.draw(context)
        /* rectArray.forEach(rectagle => {
            rectagle.update(canvas)
            rectagle.draw(context)
        }); */
        window.requestAnimationFrame(step)
    }
    
    window.requestAnimationFrame(step)
    element.appendChild(canvas)
}

function toRadian(degrees){
    return degrees * Math.PI/180
}

function drawRect (context, x, y, width, height){
    context.fillRect(x, y, width, height)
}
