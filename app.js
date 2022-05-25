const block = document.querySelector('.block')
// 39-right 37-left 38-top 40-bottom
let margin = '10px'
let marginTopBottom = '10px'



document.addEventListener('keydown',function (e){

    if(e.keyCode === 39){
        let number =  margin.slice(0,margin.length-2)
        number++;
        number++;
        margin = number
        margin ='px'
        number += margin
        console.log(number)
        margin = number

        block.style.marginLeft = margin




    }
    if(e.keyCode === 37){

        number =  margin.slice(0,margin.length-2)
        number--;
        number--;
        margin = number
        margin ='px'
        number += margin
        console.log(number)
        margin = number

       // block.style.position = 'relative'
        block.style.marginLeft =margin
    }

    if(e.keyCode === 38){


        number =  marginTopBottom.slice(0,marginTopBottom.length-2)
        number--;
        number--;
        marginTopBottom = number
        marginTopBottom ='px'
        number += marginTopBottom
        console.log(number)
        marginTopBottom = number

        // block.style.position = 'relative'
        block.style.marginTop = marginTopBottom
    }

    if(e.keyCode === 40){


        number =  marginTopBottom.slice(0,marginTopBottom.length-2)
        number++;
        number++;
        marginTopBottom = number
        marginTopBottom ='px'
        number += marginTopBottom
        console.log(number)
        marginTopBottom = number

        // block.style.position = 'relative'
        block.style.marginTop = marginTopBottom
    }

})
