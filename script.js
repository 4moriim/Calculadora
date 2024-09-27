const botao= document.getElementsByClassName("botao");

for(let i= 0; i < botao.length; i++) {
    botao[i].addEventListener("click", function inserir() {
    const N = this.innerHTML;

    if (N === "C"){
        excluirNumero();
    } else if (N === "CE"){
        
    function voltarNumero () {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado'). innerHTML = resultado.substring(0, resultado.length - 1 );
      
    }

    voltarNumero();

    } else if (N === "="){
       operacaoMatematica();  
    } else {
        var numero = document.getElementById("resultado").innerHTML;
        document.getElementById('resultado').innerHTML =  numero + N;
    
    }
    
});
}

function excluirNumero () {
    document.getElementById('resultado').innerHTML = "";
}

function operacaoMatematica() {
    var resultado = document.getElementById('resultado').innerHTML;

    if (resultado) {
        var valor = eval(resultado.replace(/X/g, '*').replace(/,/g, '.'));
        valor = Math.round(valor * 100) / 100;
        document.getElementById("resultado").innerHTML = valor;
    } else {
        document.getElementById("resultado").innerHTML = "Erro";
    }
}







