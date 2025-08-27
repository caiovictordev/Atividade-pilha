let pilha = []

function empilhar(){
    let pagina = document.getElementById("historico").value;
    if (historico !== "") {
        pilha.push(pagina); 
        document.getElementById("pagina").value = "";
        mostrarPilha();
    }
}

function voltar(){
    if(pilha.length > 0){
        alert("Removido: " + pilha.pop())
        mostrarPilha();
    }
    else{
        alert("A pilha etsá vazia.")
    }
}

function avancar(){
    
    mostrarPilha();
}

function mostrarPilha(){
    
}