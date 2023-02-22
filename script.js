//your code here
const gameContainer = document.getElementById('gameContainer')

for (let i = 0; i < 1600; i++) {
    let pixelDiv = document.createElement('div')
    pixelDiv.id = `pixel${i}`
    pixelDiv.classList.add('pixel_div')
    gameContainer.appendChild(pixelDiv)
}
let speed = 5;
let lastupdateTime = 0;
let snakePosition = [
    {
        x: 800,
        y: 800
    }
]
function main(ctime) {
    window.requestAnimationFrame(main)
    let elapsedTime = ctime -lastupdateTime   
    if(elapsedTime >100){
        gameEngine()
        lastupdateTime = ctime
    }
}



function gameEngine() {
    // console.log(x++);
    snakePosition[0].x += 1
    snakePosition[0].y += 1

    //==displaying the snake==//
    snakePosition.forEach((e,index)=>{
        let snakeHead = document.createElement("div")
        snakeHead.style.gridRowStart = e.y
        snakeHead.style.gridColumnStart = e.x
        snakeHead.style.color ='yellow'
        // gameContainer.appendChild(snakeHead)
    })
}

// setInterval(function () {
    window.requestAnimationFrame(main)
// }, 100)