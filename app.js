const block = document.querySelector('.block')
// 39-right 37-left 38-top 40-bottom
let margin = 10
let marginTopBottom = 10



document.addEventListener('keydown',function (e){

const keyCodeHandlers = {

    39:()=>{
        margin +=5
        block.style.marginLeft = `${margin}px`
    },
    37:()=>{
        margin -=5
        block.style.marginLeft = `${margin}px`
    },
    38:()=>{
        marginTopBottom -=5
        block.style.marginTop = `${marginTopBottom}px`
    },
    40:()=> {
        marginTopBottom +=5
        block.style.marginTop = `${marginTopBottom}px`
    },


}

keyCodeHandlers[e.keyCode]();







})
