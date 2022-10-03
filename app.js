const backGround = document.getElementById("canvas")
const btn = document.getElementById("button")

btn.addEventListener('click', ()=>{
   const randomColor = getRandomColor()
   setBackgroundColor(randomColor)
})

const randomNumGenerator = ()=>{
    return Math.floor(Math.random() * 256)
}

const setBackgroundColor = (color) =>{
   backGround.style.backgroundColor = color
} 


const getRandomColor = () =>{
    const num1 =  randomNumGenerator()
    const num2 =  randomNumGenerator()
    const num3 =  randomNumGenerator()
    const colors = `rgb(${num1}, ${num2}, ${num3})`  
    return colors;
}
