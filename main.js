var btn=document.querySelectorAll(`.btn1`)
var btnequal=document.querySelector(`.equ`)
var input=document.querySelector('.form-control')
var resetbtn=document.querySelector('.reset')
var delBtn=document.querySelector('.del')
btn.forEach((e)=>{
    e.addEventListener('click',(e)=>{
       
       input.value+=e.target.dataset.number

    })
})
btnequal.addEventListener("click",()=>{
    if (input.value===``) {
        input.value=''
        
    }
    else{
       
        input.value=eval(input.value)
    }
})
resetbtn.addEventListener('click',()=>{
    input.value=''
})
delBtn.addEventListener("click",()=>{
    input.value=input.value.slice(0,input.value.length-1)
})