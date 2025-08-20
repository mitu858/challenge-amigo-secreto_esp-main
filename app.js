// Array global donde se almacenarán los amigos
let amigos = [];
// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    // eliminamos espacios en blanco
    const nombre = input.value.trim(); 
    if (nombre !== "") {
        // agregamos al array
        amigos.push(nombre);
        // limpiamos campo de texto
        input.value = "";
        // refrescamos la lista en pantalla
        actualizarLista(); 
    } 
    else {
        alert("Por favor, inserte un nombre.");
    }
}
// Función para actualizar la lista visible en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    // limpiamos antes de volver a renderizar
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}