function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    if (nombre === "" || email === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true;
}