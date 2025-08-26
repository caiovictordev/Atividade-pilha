let pilha = []

function empilhar(){
    if (prato !== "") {
        pilha.push(prato); 
        document.getElementById("prato").value = "";
        mostrarPilha();
    }
}
function desempilhar(){

}
function mostrarPilha(){
    
}