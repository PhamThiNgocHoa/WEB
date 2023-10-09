const buttons = document.querySelectorAll(".color-button");
buttons.forEach(function (button){
    button.addEventListener("click", function (){
        const btnColor = window.getComputedStyle(button).backgroundColor;
        document.body.style.backgroundColor = btnColor;
    })
})
