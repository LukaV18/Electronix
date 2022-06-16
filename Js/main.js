let introduceTuEdad = prompt("Por favor Ingrese su edad, debe ser mayor a 18 años para poder ingresar.");

while (isNaN(introduceTuEdad) <= 17) {

    if (isNaN(introduceTuEdad)) {
        alert("Por favor introduzca solo números.");
        introduceTuEdad = prompt("Por favor Ingrese su edad, debe ser mayor a 18 años para poder ingresar.");

    } else if ((introduceTuEdad) < 18) {

        alert("Tienes " + introduceTuEdad + " años,no tienes permitido ingresar a esta página.")
        introduceTuEdad = prompt("Por favor Ingrese su edad, debe ser mayor a 18 años para poder ingresar.");
    } else {
        alert("Tienes " + introduceTuEdad + " años, puedes entrar a esta página.");
        break

    }

}