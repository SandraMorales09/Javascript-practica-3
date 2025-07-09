function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const edad = document.getElementById("edad").value;

    if (nombre === "" || email === "" || edad === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    if (isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true;
}