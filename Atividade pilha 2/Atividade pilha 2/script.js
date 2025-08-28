let pilha = []

function empilhar() {
    let pagina = document.getElementById("pagina").value;
    if (pagina !== "") {
        pilha.push(pagina);
        document.getElementById("historico").value = "";
        mostrarPilha();
    }
}

function voltar() {
    if (pilha.length > 0) {
        alert("Removido: " + pilha.pop())
        mostrarPilha();
    }
    else {
        alert("Não há páginas anteriores.")
    }
}

function paginaAtual(){
    if(pilha.length > 0){
        alert("Página atual: " + pilha[pilha.length - 1]);
    }else{
        alert("sem páginas")
    }
}

function mostrarPilha() {
    let lista = document.getElementById("historico");
    lista.innerHTML = "";
    for (let i = pilha.length - 1; i >= 0; i--) {
        let li = document.createElement("li");
        li.textContent = pilha[i];
        lista.appendChild(li);
    }
}