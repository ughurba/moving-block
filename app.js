const block = document.querySelector('.block')
// 39-right 37-left 38-top 40-bottom
let margin = 10
let marginTopBottom = 10



document.addEventListener('keydown',function (e){

    if(e.keyCode === 39){
        margin +=5
        block.style.marginLeft = `${margin}px`


    }
    if(e.keyCode === 37){


        margin -=5
        block.style.marginLeft = `${margin}px`
    }

    if(e.keyCode === 38){

        marginTopBottom -=5
        block.style.marginTop = `${marginTopBottom}px`
    }

    if(e.keyCode === 40){


        marginTopBottom +=5
        block.style.marginTop = `${marginTopBottom}px`

    }

})
