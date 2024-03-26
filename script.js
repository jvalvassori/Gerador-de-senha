var res = ""; 

window.onload = init;

function init(){
    document.getElementById("botao").onclick = gerarsenha;
    document.getElementById("voltar").onclick = volta;
    valor.innerHTML = slider.value;
}



var slider = document.getElementById("slider");
var valor = document.getElementById("valor");
var caracteres = 'abcdefghijklmnopqrstuvwxyz';
var letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeros = '0123456789';
var caracteresEspeciais = '!@.#$%&';

slider.oninput = function(){
    valor.innerHTML = this.value;
}

function gerarsenha(){
    var res = "";
    var escolhaCaracteres = caracteres;
  
    if (document.getElementById("maiusculas").checked) {
        escolhaCaracteres += letrasMaiusculas;
    }
  
    if (document.getElementById("numeros").checked) {
        escolhaCaracteres += numeros;
    }
  
    if (document.getElementById("especiais").checked) {
        escolhaCaracteres += caracteresEspeciais;
    }
  
    for (var i = 0, n = escolhaCaracteres.length; i < slider.value; i++){
        res += escolhaCaracteres.charAt(Math.floor(Math.random() * n))
    }
  
    document.getElementById("password").innerHTML = res; 
    document.getElementById("container-password").style.display = "block";

    testasenha();
}

$("#botao").click(function(){
    $("#slider").fadeOut();
    $("#valor0").fadeOut();
    $("#opcoes").fadeOut();
    $("#botao").fadeOut();
    $("#opc").fadeOut();
});

$("#voltar").click(function(){
    $("#slider").fadeIn();
    $("#valor0").fadeIn();
    $("#opcoes").fadeIn();
    $("#botao").fadeIn(); 
    $("#opc").fadeIn();
});

function volta(){
    document.getElementById("container-password").style.display = "none";
    document.querySelectorAll('.opcoes input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
    document.getElementById("slider").value = 15;
    document.getElementById("valor").textContent = 15;
}

function testasenha(){
    var test = valor.innerHTML = slider.value;
    
    if(test >= 12){
        
        document.getElementById("identificando").innerHTML = "Sua senha é&nbsp; <span id=\"forte\">forte</span>"; 
    }
    else if(test >= 8){
        document.getElementById("identificando").innerHTML = "Sua senha é&nbsp; <span id=\"medio\">média</span>";
    }
    else {
        document.getElementById("identificando").innerHTML = "Sua senha é&nbsp; <span id=\"fraco\">fraca</span>";
    }
}

