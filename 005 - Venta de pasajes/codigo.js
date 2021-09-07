var tipoTransporte;
var transporteSeleccionado;
var asientosDisponiblesAutobus = 50;
var asientosDisponiblesAvion = 180;
var nombre;
var apellido;
var dni;
var ciudadOrigen;
var ciudadDestino;
var origenSeleccionado;
var destinoSeleccionado;
var fecha = new Date();
var usuarioYaLogueado = 0;
var cantidadReservas = 0;
var precioAvion = 5000;
var precioAutobus = 2000;
var precioTotal = 0;

//-------------------INGRESO DE DATOS / VALIDACIONES---------------------------
do {
    tipoTransporte = parseInt(prompt("Elija el tipo de transporte:\n\nOPCIÓN 1: Autobús \nOPCIÓN 2: Avión "));
    while (isNaN(tipoTransporte) || tipoTransporte == "" || tipoTransporte > 2 || tipoTransporte < 1) {
        alert("****** ERROR! ****** \nUsted ha ingresado una opción NO valida\nPor favor, reintentelo.");

        tipoTransporte = prompt("Elija el tipo de transporte:\n\nOPCIÓN 1: Autobús \nOPCIÓN 2: Avión ");
    }

    ciudadOrigen = parseInt(prompt("CIUDAD DE ORIGEN (Ingrese una opción): \n\nOPCIÓN 1: Buenos Aires \nOPCIÓN 2: Córdoba \nOPCIÓN 3: Rosario \nOPCIÓN 4: Mar del Plata \nOPCIÓN 5: San Miguel de Tucumán \nOPCIÓN 6: Salta \nOPCIÓN 7: Posadas \nOPCIÓN 8: Mendoza \nOPCIÓN 9: Neuquén"));

    while (isNaN(ciudadOrigen) || ciudadOrigen == "" || ciudadOrigen > 9 || ciudadOrigen < 1) {
        alert("****** ERROR! ****** \nUsted ha ingresado una opción NO valida\nPor favor, reintentelo.");
        ciudadOrigen = prompt("CIUDAD DE ORIGEN (Ingrese una opción): \n\nOPCIÓN 1: Buenos Aires \nOPCIÓN 2: Córdoba \nOPCIÓN 3: Rosario \nOPCIÓN 4: Mar del Plata \nOPCIÓN 5: San Miguel de Tucumán \nOPCIÓN 6: Salta \nOPCIÓN 7: Posadas \nOPCIÓN 8: Mendoza \nOPCIÓN 9: Neuquén");
    }

    ciudadDestino = parseInt(prompt("CIUDAD DE DESTINO (Ingrese una opción): \n\nOPCIÓN 1: Buenos Aires \nOPCIÓN 2: Córdoba \nOPCIÓN 3: Rosario \nOPCIÓN 4: Mar del Plata \nOPCIÓN 5: San Miguel de Tucumán \nOPCIÓN 6: Salta \nOPCIÓN 7: Posadas \nOPCIÓN 8: Mendoza \nOPCIÓN 9: Neuquén"));

    while (isNaN(ciudadDestino) || ciudadDestino == "" || ciudadDestino > 9 || ciudadDestino < 1 || ciudadDestino == ciudadOrigen) {
        alert("****** ERROR! ****** \nUsted ha ingresado una opción NO valida o su ciudad de DESTINO es IGUAL a la ciudad de ORIGEN. \n\nPor favor, reingrese el destino:");
        ciudadDestino = prompt("CIUDAD DE DESTINO (Ingrese una opción): \n\nOPCIÓN 1: Buenos Aires \nOPCIÓN 2: Córdoba \nOPCIÓN 3: Rosario \nOPCIÓN 4: Mar del Plata \nOPCIÓN 5: San Miguel de Tucumán \nOPCIÓN 6: Salta \nOPCIÓN 7: Posadas \nOPCIÓN 8: Mendoza \nOPCIÓN 9: Neuquén");
    }

    cantidadReservas++;
    switch (tipoTransporte) {
        case 1:
            transporteSeleccionado = "Autobús";
            //ASIENTOS
            if (asientosDisponiblesAutobus == 0) {
                document.write("<br>Lo siento, no quedan asientos disponibles en este autobús :(");
                exit();
            } else {
                asientosDisponiblesAutobus = asientosDisponiblesAutobus - 1;
                document.write("<br> TICKET N°: " + cantidadReservas + "<br>");
                document.write("- - - - - - - - - - <br>");
                //FECHA
                document.write("<br>Fecha de reserva : " + fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear());
                //HORA
                document.write("<br>Hora de reserva : " + fecha.getHours() + ":" + fecha.getMinutes() + " hs.<br>");
                //TRANSPORTE
                document.write("<br>Transporte seleccionado: " + transporteSeleccionado);
                document.write("<br>Número de asiento: " + asientosDisponiblesAutobus + "<br>");
                //HORA SALIDA
                document.write("<br>Horario de salida: 08:00 hs (A.M) <br>Su nombre aparecerá en la pantalla principal indicando darsena de abordo. <br>Recomendamos estar 20 minutos antes<br>");
                //PRECIO
                document.write("<br>Precio: $" + precioAutobus + "<br>");
                precioTotal = precioTotal + precioAutobus;

            }
            break;
        case 2:
            transporteSeleccionado = "Avión";
            //ASIENTOS
            if (asientosDisponiblesAvion == 0) {
                document.write("<br>Lo siento, no quedan lugares disponibles en esta aeronave :(");
                exit();
                break;
            } else {
                asientosDisponiblesAvion = asientosDisponiblesAvion - 1;
                document.write("<br> TICKET N°: " + cantidadReservas + "<br>");
                document.write("- - - - - - - - - - <br>");
                //FECHA
                document.write("<br>Fecha de reserva : " + fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear());
                //HORA RESERVA
                document.write("<br>Hora de reserva : " + fecha.getHours() + ":" + fecha.getMinutes() + " hs.<br>");
                //TRANSPORTE
                document.write("<br>Transporte seleccionado: " + transporteSeleccionado);
                document.write("<br>Número de asiento: " + asientosDisponiblesAvion + "<br>");
                //HORA SALIDA
                document.write("<br>Horario de salida: 08:00 hs (A.M) <br>Su nombre aparecerá en la pantalla principal indicando darsena de abordo. <br>Recomendamos estar 20minutos antes<br>");
                //PRECIO
                document.write("<br>Precio: $" + precioAvion + "<br>");
                precioTotal = precioTotal + precioAvion;

            }
            break;
    }

    switch (ciudadOrigen) {
        case 1:
            origenSeleccionado = "Buenos Aires";
            break;
        case 2:
            origenSeleccionado = "Córdoba";
            break;
        case 3:
            origenSeleccionado = "Rosario";
            break;
        case 4:
            origenSeleccionado = "Mar del Plata";
            break;
        case 5:
            origenSeleccionado = "San Miguel de Tucumán";
            break;
        case 6:
            origenSeleccionado = "Salta";
            break;
        case 7:
            origenSeleccionado = "Posadas";
            break;
        case 8:
            origenSeleccionado = "Mendoza";
            break;
        case 9:
            origenSeleccionado = "Neuquén";
            break;
    }

    switch (ciudadDestino) {
        case 1:
            destinoSeleccionado = "Buenos Aires";
            break;
        case 2:
            destinoSeleccionado = "Córdoba";
            break;
        case 3:
            destinoSeleccionado = "Rosario";
            break;
        case 4:
            destinoSeleccionado = "Mar del Plata";
            break;
        case 5:
            destinoSeleccionado = "San Miguel de Tucumán";
            break;
        case 6:
            destinoSeleccionado = "Salta";
            break;
        case 7:
            destinoSeleccionado = "Posadas";
            break;
        case 8:
            destinoSeleccionado = "Mendoza";
            break;
        case 9:
            destinoSeleccionado = "Neuquén";
            break;
    }

    if (usuarioYaLogueado == 0) {
        apellido = prompt("Ingrese su apellido:");
        while (apellido == "") {
            apellido = prompt("****** ERROR! ****** \nReingrese su apellido:");
        }
        nombre = prompt("Ingrese su nombre: ");
        while (nombre == "") {
            nombre = prompt("****** ERROR! ****** \nReingrese su nombre:");
        }

        dni = parseInt(prompt("Ingrese su número de DNI: "));
        while (!(/^\d{8}$/.test(dni))) {
            dni = prompt("****** ERROR! ****** \nReingrese su número de DNI (8 digitos), sin espacios ni coma:");
        }
        usuarioYaLogueado = 1;
    }

    //---------------------------------MOSTRAR---------------------------------------------------
    //DATOS USUARIO
    document.getElementById('nombreUsuario').innerHTML = nombre;
    document.write("<br>Número de DNI del responsable: " + dni);
    document.getElementById('cantidadReservas').innerHTML = cantidadReservas;

    //ORIGEN
    document.write("<br>Ciudad de origen: " + origenSeleccionado);

    //DESTINO
    document.write("<br>Ciudad de destino: " + destinoSeleccionado);



    document.write("<br>====================================================================================");
    document.write("<br>***** Si ud. no presenta el pago de la presente reserva hasta 2 dias habiles antes de la fecha de salida, esta será anulada.*****");
    document.write("<br>====================================================================================<br><br>");

    continuar = confirm("Desea comprar otro ticket?");
} while (continuar);
document.getElementById('total').innerHTML = "$" + precioTotal;