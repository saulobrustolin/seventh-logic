// IDs: inNome, btGerar, outResposta

function Gerar(){
    var inNome = document.getElementById("inNome");
    nome = inNome.value;

    var outResposta = document.getElementById("outResposta");

    var partes = nome.split(" ");
    var length = partes.length;

    var armazenamento = "";

    for(var i = 0; i < (partes.length - 1); i++){
        armazenamento += partes[i].charAt(0).toUpperCase() + ". ";
    }

    inNome.value = "";

    //Marcos Aurélio Borges Junior

    outResposta.textContent = "Citação bibliográfica: " + partes[length - 1].toUpperCase() + ", " + armazenamento;
}

var gerar = document.getElementById("btGerar");
gerar.addEventListener("click", Gerar);