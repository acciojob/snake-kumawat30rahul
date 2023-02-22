//your code here
let gameContainer = document.getElementById('gameContainer')

for (let i = 0; i < 1600; i++) {
    let pixelDiv = document.createElement('div')
    pixelDiv.id = `pixel${i}`
    pixelDiv.classList.add('pixel_div')
    gameContainer.appendChild(pixelDiv)
}
let speed = 5;
let lastupdateTime = 0;
// let snakePosition = [
//     {
        
//     }
// ]
function main(ctime) {
    window.requestAnimationFrame(main)
    let elapsedTime = ctime -lastupdateTime   
    if(elapsedTime >100){
        gameEngine()
        lastupdateTime = ctime
    }
}



let x = 20
function gameEngine() {
    // console.log(x++);
    
    
    //==displaying the snake==//
        
        let number = `pixel${x++}`
        let snakeHead = document.getElementById(number)
        console.log(snakeHead);
        snakeHead.classList.add('snakeBodyPixel')
    }

// setInterval(function () {
    window.requestAnimationFrame(main)
// }, 100)