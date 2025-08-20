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