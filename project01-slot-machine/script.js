let slot=document.getElementById('slot')
let value=document.getElementsByClassName('value')

let value1=document.getElementById('value1')
let value2=document.getElementById('value2')
let value3=document.getElementById('value3')

let play=document.getElementById('play')
let pause=document.getElementById('pause')


let values=[
    '😡', '🎃', '😱', '🤓', '🤢', '😈', '🤡', '👻' 
]

function getRandomValue(){
    return values[Math.floor(Math.random()*8)]
}

function getRandomValue2(){
    return values[Math.floor(Math.random()*1)]
}

let animationid= setInterval(()=>{
    value1.innerText='😂'
    value2.innerText='☹️'
    value3.innerText='😍'

},10000
)

play.onclick=function(){
    if(animationid) clearInterval(animationid)


    animationid= setInterval(()=>{
        value1.innerText=getRandomValue()
        value2.innerText=getRandomValue()
        value3.innerText=getRandomValue()
    
    },100
    )

}
pause.onclick=function(){
document.getElementById('value1').style.animation="slotspin 4 1s"
document.getElementById('value2').style.animation="slotspin 5 2s"
document.getElementById('value3').style.animation="slotspin 6 2s"

if(animationid) clearInterval(animationid)

setInterval(()=>{
    value1.innerText=getRandomValue()
    value2.innerText=getRandomValue()
    value3.innerText=getRandomValue()

},100000
)    

}


