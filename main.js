var btn = document.querySelectorAll(".btn");
var input = document.querySelector(".input");
var number = document.querySelectorAll(".numbers");
var del_btn = document.querySelector(".delete");
var equalBtn = document.querySelector(".x");
/*for (var i = 0; i < btn.length; i++) {
    btn.addEventListener("click", (y) => {
        input.value = y.target.dataset.number



    })

}*/
/*btn.onclick = function(e) {
    for (var i = 0; i < btn.length; i++) {
        input.value += e.target.dataset.number

    }


}*/
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", (y) => {
        input.value += y.target.dataset.number
    })
}
del_btn.addEventListener("click", () => {
    input.value = ""
})
equalBtn.addEventListener("click", () => {

    input.value = eval(input.value)



})