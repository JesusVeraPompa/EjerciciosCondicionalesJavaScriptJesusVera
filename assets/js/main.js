//  Damos una Bienvenida
alert("Hola Bienvenidos, Esta Aplicación Contiene 13 Ejercicios");

//  Mostramos en pantalla todos los ejercicios
document.write(
    "<br><strong>Ejercicio 1</strong><br>Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo."
);
document.write("<br>");
document.write(
    "<br><strong>Ejercicio 2</strong><br>Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes."
);
document.write("<br>");
document.write(
    "<br><strong>Ejercicio 3</strong><br>Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales."
);
document.write("<br>");
document.write("<br><strong>Ejercicio 4</strong><br>Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el más chico.");
document.write("<br>");
document.write(
    "<br><strong>Ejercicio 5</strong><br>Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad."
);
document.write("<br>");
document.write(
    "<br><strong>Ejercicio 6</strong><br>Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo."
);
document.write("<br>");
document.write(
    "<br><strong>Ejercicio 7</strong><br>Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por último de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o más, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida."
);
document.write("<br>");
document.write(
    "<br><strong>Ejercicio 8</strong><br>Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el número.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera más eficiente."
);
document.write("<br>");
document.write(
    "<br><strong>Ejercicio 9</strong><br>Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente (13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad."
);
document.write("<br>");
document.write(
    "<br><strong>Ejercicio 10</strong><br>Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa."
);
document.write("<br>");
document.write(
    "<br><strong>Ejercicio 11</strong><br>Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado."
);
document.write("<br>");
document.write(
    "<br><strong>Ejercicio 12</strong><br>Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0."
);
document.write("<br>");
document.write(
    "<br><strong>Ejercicio 13</strong><br>Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes."
);

//  Pedimos leer todos los ejercicios
alert("A continuación, lee todos los Ejercicios y luego ingresa el numero del Ejercicio a Observar");

//  Esperamos 1 segundos para que el usuario lea los ejercicios y pueda ingresar el numero del Ejercicio a Observar
setTimeout(function () {
    let NumeroEjercicio = prompt("Ingresa el numero del Ejercicios que deseas Observar");
    switch (NumeroEjercicio) {
        case "1":
            alert("Bienvenidos al Ejercicio 1");
            alert("Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.");
            let PrimerNumeroEjercicio1 = prompt("Ingresa un Primer Numero");
            let SegundoNumeroEjercicio1 = prompt("Ingresa un Segundo Numero");
            alert("Ver el Resultado por Consola F12, vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            if (PrimerNumeroEjercicio1 > SegundoNumeroEjercicio1) {
                console.log("El Primer Numero es Mayor que el Segundo Numero");
            }
            break;

        case "2":
            alert("Bienvenidos al Ejercicio 2");
            alert("Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.");
            let PrimerNumeroEjercicio2 = prompt("Ingresa un Primer Numero");
            let SegundoNumeroEjercicio2 = prompt("Ingresa un Segundo Numero");
            alert("Ver el Resultado por Consola F12, vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            if (PrimerNumeroEjercicio2 != SegundoNumeroEjercicio2) {
                console.log("Primer Numero es DIFERENTE al Segundo");
            } else {
                console.log("Primer Numero es IGUAL al Segundo");
            }
            break;

        case "3":
            alert("Bienvenidos al Ejercicio 3");
            alert("Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.");
            let PrimerNumeroEjercicio3 = prompt("Ingresa un Primer Numero");
            let SegundoNumeroEjercicio3 = prompt("Ingresa un Segundo Numero");
            alert("Ver el Resultado por Consola F12, vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            if (PrimerNumeroEjercicio3 < SegundoNumeroEjercicio3) {
                console.log("El Segundo Numero es el mas GRANDE");
            }
            if (PrimerNumeroEjercicio3 > SegundoNumeroEjercicio3) {
                console.log("El Primer Numero es el mas GRANDE");
            }
            if (PrimerNumeroEjercicio3 == SegundoNumeroEjercicio3) {
                console.log("Los 2 numeros son IGUALES");
            }
            break;

        case "4":
            alert("Bienvenidos al Ejercicio 4");
            alert("Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el más chico.");
            let PrimerNumeroEjercicio4 = prompt("Ingresa un Primer Numero");
            let SegundoNumeroEjercicio4 = prompt("Ingresa un Segundo Numero");
            let TercerNumeroEjercicio4 = prompt("Ingresa un Tercer Numero");
            alert("Ver el Resultado por Consola F12, vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            if (PrimerNumeroEjercicio4 < SegundoNumeroEjercicio4) {
                ValorMedio = PrimerNumeroEjercicio4;
            } else {
                ValorMedio = SegundoNumeroEjercicio4;
            }
            if (ValorMedio < TercerNumeroEjercicio4) {
                console.log(ValorMedio, "Es el mas CHICO");
            } else {
                console.log(TercerNumeroEjercicio4, "Es el mas CHICO");
            }
            break;

        case "5":
            alert("Bienvenidos al Ejercicio 5");
            alert(
                "Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad."
            );
            let NombrePrimeraPersonaEjercicio5 = prompt("Ingresa el NOMBRE de la PRIMERA Persona");
            let EdadPrimeraPersonaEjercicio5 = prompt("Ingresa la EDAD de la PRIMERA Persona");
            let AlturaPrimeraPersonaEjercicio5 = prompt("Ingresa la ALTURA de la PRIMERA Persona");
            let NombreSegundaPersonaEjercicio5 = prompt("Ingresa el NOMBRE de la SEGUNDA Persona");
            let EdadSegundaPersonaEjercicio5 = prompt("Ingresa la EDAD de la SEGUNDA Persona");
            let AlturaSegundaPersonaEjercicio5 = prompt("Ingresa la ALTURA de la SEGUNDA Persona");
            if (AlturaPrimeraPersonaEjercicio5 < AlturaSegundaPersonaEjercicio5) {
                alert(NombreSegundaPersonaEjercicio5 + " es mas Alto/Alta que " + NombrePrimeraPersonaEjercicio5);
            } else {
                alert(NombrePrimeraPersonaEjercicio5 + " es mas Alto/Alta que " + NombreSegundaPersonaEjercicio5);
            }
            if (EdadPrimeraPersonaEjercicio5 < EdadSegundaPersonaEjercicio5) {
                alert(NombreSegundaPersonaEjercicio5 + " tiene mas Edad que " + NombrePrimeraPersonaEjercicio5);
            } else {
                alert(NombrePrimeraPersonaEjercicio5 + " tiene mas Edad que " + NombreSegundaPersonaEjercicio5);
            }
            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        case "6":
            alert("Bienvenidos al Ejercicio 6");
            alert(
                "Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo."
            );
            let NombrePrimeraPersonaEjercicio6 = prompt("Ingresa tu NOMBRE");
            let EdadPrimeraPersonaEjercicio6 = prompt("Ingresa tu EDAD");
            let AlturaPrimeraPersonaEjercicio6 = prompt("Ingresa tu ALTURA");
            let VisionPrimeraPersonaEjercicio6 = prompt("Ingresa tu VISION");
            if (
                EdadPrimeraPersonaEjercicio6 >= 18 &&
                AlturaPrimeraPersonaEjercicio6 >= 150 &&
                VisionPrimeraPersonaEjercicio6 >= 8 &&
                VisionPrimeraPersonaEjercicio6 <= 10
            ) {
                alert(
                    "Felicidades " +
                        NombrePrimeraPersonaEjercicio6 +
                        ", SI estas capacitado para conducir. Tu edad es: " +
                        EdadPrimeraPersonaEjercicio6 +
                        ", tu altura es: " +
                        AlturaPrimeraPersonaEjercicio6 +
                        ", tu vision es: " +
                        VisionPrimeraPersonaEjercicio6
                );
            } else {
                alert(
                    "Lo lamentamos " +
                        NombrePrimeraPersonaEjercicio6 +
                        ", No estas capacitado para conducir. Tu edad es: " +
                        EdadPrimeraPersonaEjercicio6 +
                        ", tu altura es: " +
                        AlturaPrimeraPersonaEjercicio6 +
                        ", tu vision es: " +
                        VisionPrimeraPersonaEjercicio6
                );
            }
            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        case "7":
            alert("En preparacion el Ejercicio 7");

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        case "8":
            alert("En preparacion el Ejercicio 8");

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        case "9":
            alert("En preparacion el Ejercicio 9");

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        case "10":
            alert("En preparacion el Ejercicio 10");

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        case "11":
            alert("En preparacion el Ejercicio 11");

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        case "12":
            alert("En preparacion el Ejercicio 12");

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        case "13":
            alert("En preparacion el Ejercicio 13");

            alert("Vuelve a cargar la pagina con F5 para ver otro Ejercicio");
            break;

        default:
            alert("Debes ingresar un numero del 1 al 13 para ver el Ejercicio, vuelve a cargar la pagina con F5");
            break;
    }
}, 1000);
