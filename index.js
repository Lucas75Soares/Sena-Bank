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
    retornoElemento.innerText = "retorno: R$ "+ retorno;
    montanteRetorno.innerText = "montante: R$"+ montante;

    console.log(retorno)
}