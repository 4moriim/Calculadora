const botao= document.getElementsByClassName("botao");

for(let i= 0; i < botao.length; i++) {
    botao[i].addEventListener("click", function inserir() {
    const N = this.innerHTML;
    const resultadoElement = document.getElementById("resultado");
    const resultado = resultadoElement.innerHTML;

    if (N === "C"){
        excluirNumero();
    } else if (N === "R"){
        
    function voltarNumero () {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado'). innerHTML = resultado.substring(0, resultado.length - 1 );
      
    }

    voltarNumero();

    } else if (N === "="){
       operacaoMatematica();  
    } else {
        const operadores = ['+', '-', '*', '/'];
        const ultimoCaractere = resultado[resultado.length - 1];
        

        if (operadores.includes(N)){
            if (operadores.includes(ultimoCaractere)) {
                resultadoElement.innerHTML = resultado.slice(0, -1) + N;
            } else {
                resultadoElement.innerHTML += N;
            }
        } else {
            resultadoElement.innerHTML += N;
        }
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

        if(valor === Infinity){
            document.getElementById("resultado").innerHTML = "Divisão por zero";
        } else if (isNaN(valor)){
            document.getElementById("resultado").innerHTML = "Indeterminado";
        }

    } else {
        document.getElementById("resultado").innerHTML = "Erro";
    }
}







