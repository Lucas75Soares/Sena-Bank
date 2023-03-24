var valorInvestido = document.getElementById("valor-investido");
var anosInvestido = document.getElementById("anos-investido");
var taxa =  15;
var btnCalcular = document.getElementById("btn-calcular");
btnCalcular.addEventListener("click", calcular);

var retornoElemento = document.getElementById("retorno-elemento");

function calcular(){ 
    var taxaReal = (anosInvestido.value * taxa)/100;
    var retorno = valorInvestido.value * taxaReal;
    var montante = Number(retorno) + Number(valorInvestido.value);
    var montanteRetorno = document.getElementById("montante-retorno");
    montanteRetorno.style.display="block";
    retornoElemento.style.display="block";
    retornoElemento.innerText = "Retorno: R$ "+ retorno.toFixed(2);
    montanteRetorno.innerText = "Montante: R$"+ montante.toFixed(2);

    console.log(retorno)
}

const audio = new Audio('money.mp3')
audio.play()

var somLogo = document.getElementById("logo")
var clicked = true;

somLogo.addEventListener("click", ()=> {
    if (clicked == true) {
        audio.play()
        alert("Faça seu investiment!")
        clicked = false;
    } else {
        audio.pause()
        clicked = true;
    }
})