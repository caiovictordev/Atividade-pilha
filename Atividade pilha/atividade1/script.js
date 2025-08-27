let pilha = []

function empilhar(){
    let nome = document.getElementById("prato").value;
    if (prato !== "") {
        pilha.push(nome); 
        document.getElementById("nome").value = "";
        mostrarPilha();
    }
}
function desempilhar(){
    if(pilha.length > 0){
        alert("Removido: "+ pilha.pop());
        mostrarPilha();
    }else{
        alert("A pilha está vazia");
    }
}
function mostrarPilha(){
    let lista = document.getElementById("prato");
    lista.innerHTML = "";
    for (let i = pilha.length - 1; i>= 0; i--){
        let li = document.createElement("li");
        lista.appendChild(li);
        li.textContent = pilha[i];
        lista.appendChild(li);
    }
}
