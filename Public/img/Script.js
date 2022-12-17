const form = document.querySelector("formulario");

let xhr = new XMLHttpRequest();
xhr.open("POST", "Mensagem.php", true);
xhr.onload = ()=> {
    if (xhr.readyState == 4 && xhr.status == 200 ) {
        let response = xhr.response;
        console.log(response); 
    }
    let formData = new FormData();
    xhr.send(formData);
}
var idade = document.querySelector("#idade");
var mensagem = document.querySelector("#mensagem");


function changeidade() {

    if (idade.value < 18) {
        mensagem.textContent = "Idade incorreta"
        alert("Idade incorreta");
    }

}

function cadastro() {
    alert('Cadastro Finalizado.');
}

document.getElementById("efeito").onmouseover = function() { mouseOver() };
document.getElementById("efeito").onmouseout = function() { mouseOut() };

function mouseOver() {
    document.getElementById("efeito").style.color = "blue";
}

function mouseOut() {
    document.getElementById("efeito").style.color = "black";
}


function myFunction() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "Você selecionou: " + x;
}
