let botao = document.getElementById("tema");
let body = document.getElementById("body");

botao.addEventListener("click", function(){
    if(body.style.backgroundColor == "white"){
        body.style.backgroundColor = "#212222";
        body.style.color = "white";
    }else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});