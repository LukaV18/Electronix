let introduceTuEdad = prompt("Por favor Ingrese su edad, debe ser mayor a 18 años para poder ingresar");

while ((introduceTuEdad) != "ESC") {

    if (isNaN(introduceTuEdad)) {
        alert("Introduce solo números")

    }


    if ((introduceTuEdad) < 18) {

        alert("Tu edad es " + introduceTuEdad + " años,no deberías entrar a esta página");
    }

    else {
        break
    }
    introduceTuEdad = prompt("Por favor Ingrese su edad, debe ser mayor a 18 años para poder ingresar");
}

alert("Tu edad es " + introduceTuEdad + " años, puedes entrar a esta página")