// Función para obtener la jugada de la computadora
function obtenerJugadaComputadora() {
    const opciones = ["piedra", "papel", "tijeras"];
    const indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
}
  
// Función para obtener la jugada del usuario
function obtenerJugadaUsuario() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
  
    return new Promise((resolve) => {
        rl.question("Ingresa tu jugada (piedra, papel o tijeras): ", (jugada) => {
            rl.close();
            resolve(jugada.toLowerCase());
        });
    });
}
  
// Función para determinar el ganador
function determinarGanador(jugadaComputadora, jugadaUsuario) {
    if (jugadaComputadora === jugadaUsuario) {
        return "Empate";
    } else if (
        (jugadaComputadora === "piedra" && jugadaUsuario === "tijeras") ||
        (jugadaComputadora === "tijeras" && jugadaUsuario === "papel") ||
        (jugadaComputadora === "papel" && jugadaUsuario === "piedra")
    ) {
        return "Gana la computadora";
    } else {
        return "Gana el usuario";
    }
}
  
// Llamar a las funciones y ejecutar el juego. Imprimir el resultado del juego
async function jugar() {
    const jugadaComputadora = obtenerJugadaComputadora();
    const jugadaUsuario = await obtenerJugadaUsuario();
    const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

    console.log("La computadora eligió: " + jugadaComputadora);
    console.log("El usuario eligió: " + jugadaUsuario);
    console.log("El resultado fue: " + resultado);
}
  
// Ejecutar el juego
jugar();