//your code here
let gameContainer = document.getElementById('gameContainer')

let i = 0
for (let row = 1; row <= 40; row++) {
    for (let col = 1; col <= 40; col++) {
        let pixelDiv = document.createElement('div')
        pixelDiv.id = `pixel${i++}`
        pixelDiv.classList.add('pixel_div')
        gameContainer.appendChild(pixelDiv)
    }
    
}

// ========displaying the food=============//
let foodPosition = {
    x: 1000
}
let food;

function foodDisplay(){
    // let foodNumber = Math.round(Math.random() * 1599);
    food = document.getElementById(`pixel${foodPosition.x}`)
    food.classList.add('food')

}


let inputDir = {
    x: 0
}

let snakeHead;
let snakePosition =[
    {
        x: 20,
    }
]
let inputDirection ={x:0,y:0}
function gameEngine() {
    if(snakePosition[0].x === foodPosition.x){
        snakePosition.unshift(
            {
                x: snakePosition[0].x + inputDir.x
            }
        )
        console.log(snakePosition);
        foodPosition ={
            x: Math.round(Math.random() * 1599)
        }
    }
    for (let i = snakePosition.length - 2; i >= 0; i--) {
        snakePosition[i+1] = {...snakePosition[i]}
        
    }
    foodDisplay()

    snakePosition.forEach((e,index)=>{
        snakeHead = document.getElementById(`pixel${snakePosition[index].x}`)
        snakeHead.classList.remove('snakeBodyPixel')
    })
    // snakeHead = document.getElementById(`pixel${snakePosition[0].x}`)
    // snakeHead.classList.remove('snakeBodyPixel')
    // snakeHead.id = ""
    snakePosition[0].x += inputDir.x
    snakePosition.forEach((e,index)=>{
        snakeHead = document.getElementById(`pixel${snakePosition[index].x}`)
        snakeHead.classList.add('snakeBodyPixel')
        snakeHead.id = `pixel${snakePosition[index].x}`
    })
    
}

setInterval(()=>{
    gameEngine()

}, 100)

window.addEventListener("keydown",(e)=>{
    switch (e.key) {
        case "ArrowUp":
            inputDir.x = -40; 
            console.log("ArrowUp");
            break;

        case "ArrowDown":
            inputDir.x = 40;
            console.log("ArrowDown");
            break;

        case "ArrowLeft":
            inputDir.x = -1;
            console.log("ArrowLeft");
            break;

        case "ArrowRight":
            inputDir.x = 1;
            console.log("ArrowRight");
            break;
    
        default:
            break;
    }
})