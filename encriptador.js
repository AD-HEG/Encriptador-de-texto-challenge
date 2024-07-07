function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}
function encriptar() {
    // Obtener el valor del textarea
    const mensaje = document.getElementById('textoEntrada').value;

    if (!validarTexto(mensaje)) {
        alert("Por favor solo introducir letras minúsculas y sin acentos.");
        return;
    }

    // Encriptar el mensaje
    let mensajeEncriptado = mensaje
                            .replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");

    // Crear el contenido del div resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p class="mensaje">Tu texto ha sido encriptado:</p>
        <p class="resultado-encriptado">${mensajeEncriptado}</p>
        <button class="boton-copiar" onclick="copiarAlPortapapeles()">Copiar</button>
    `;
}


function desencriptar() {
    // Obtener el valor del textarea
    const mensajeEncriptado = document.getElementById('textoEntrada').value;

    // Desencriptar el mensaje
    let mensajeDesencriptado = mensajeEncriptado
                                .replace(/enter/gi, "e")
                                .replace(/imes/gi, "i")
                                .replace(/ai/gi, "a")
                                .replace(/ober/gi, "o")
                                .replace(/ufat/gi, "u");

    // Crear el contenido del div resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p class="mensaje">Tu texto ha sido desencriptado:</p>
        <p class="resultado-desencriptado">${mensajeDesencriptado}</p>
        <button class="boton-copiar" onclick="copiarAlPortapapeles()">Copiar</button>
    `;
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function copiarAlPortapapeles() {
    const resultadoDiv = document.getElementById('resultado');
    const texto = resultadoDiv.children[1].textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}