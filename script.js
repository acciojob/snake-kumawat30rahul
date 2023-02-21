//your code here
const gameContainer = document.getElementById('gameContainer')

for (let i = 0; i < 1600; i++) {
    let pixelDiv = document.createElement('div')
    pixelDiv.id = `pixel${i}`
    pixelDiv.classList.add('pixel_div')
    gameContainer.appendChild(pixelDiv)
}