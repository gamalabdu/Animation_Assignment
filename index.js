let playerState = 'fall'
const dropDown = document.getElementById('animations')
dropDown.addEventListener('change', function(e) {
    playerState = e.target.value
})

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")
const width = canvas.width = 600
const height = canvas.height = 600


const playerImage = new Image()
playerImage.src = "shadow_dog.png"
const spriteWidth = 575
const spriteHeight = 523
let gameFrame = 0
const staggerFrames = 5

const spriteAnimations = []
const animationStates = [
    {
        name : "idle",
        frames : 7,
        string: "good boy!",
    },
    {
        name: "jump",
        frames : 7,
        string: "jump!",
    },
    {
        name: "fall",
        frames : 7,
        string: "oh no!",
    },
    {
        name: "run",
        frames : 9,
        string: "run!",
    },
    {
        name: "dizzy",
        frames : 11,
        string: "gotta be careful!",
    },
    {
        name: "sit",
        frames : 5,
        string: "sit, good boy!",
    },
    {
        name: "roll",
        frames : 7,
        string: "roll over, good boy!",
    },
    {
        name: "bite",
        frames : 7,
        string: "no biting!",
    },
    {
        name: "ko",
        frames : 12,
        string: "uh oh!",
    },
    {
        name: "getHit",
        frames : 4,
        string: "Are you okay!",
    },
   
]

animationStates.forEach((state,index) => {
     let frames = {
         loc: [],
     }
     for(let j = 0; j < state.frames; j++) {
         let postionX = j * spriteWidth
         let positionY = index * spriteHeight
         frames.loc.push({x: postionX, y: positionY})
     }
     spriteAnimations[state.name] = frames
})


function animate() {
    ctx.clearRect(0,0,width,height)
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length
    let frameX = spriteWidth * position
    let frameY = spriteAnimations[playerState].loc[position].y
    ctx.drawImage(playerImage,frameX, frameY, spriteWidth, spriteHeight, 0 , 0 , spriteWidth, spriteHeight)
    ctx.fillStyle= "black";
    ctx.font = "italic bold 35pt Tahoma";
    //syntax : .fillText("text", x, y)
    ctx.fillText("good boy!",350,60);
    if (gameFrame % staggerFrames == 0) {
        if (frameX < 6) frameX++
        else frameX = 0
    }
    gameFrame++
    requestAnimationFrame(animate)

}

animate()