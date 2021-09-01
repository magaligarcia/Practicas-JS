var planeta = parseInt(prompt("Ingresa el numero del planeta elegido:  \n 1) Mercurio \n 2) Venus \n 3) Marte\n 4) Júpiter\n 5) Saturno \n 6) Urano \n 7) Neptuno \n 8) Plutón "));
while (planeta < 1 || planeta > 8 || planeta == "") {
    planeta = parseInt(prompt("\nERROR! \nNo ingresaste una opcion valida. \n\nIntentalo de nuevo: \n 1) Mercurio \n 2) Venus \n 3) Marte\n 4) Jupiter\n 5) Saturno \n 6) Urano \n 7) Neptuno \n 8) Pluton "));
}

var peso_usuario = parseInt(prompt("Ingresa tu peso: "));
while (peso_usuario < 1 || peso_usuario > 600 || peso_usuario == "") {
    peso_usuario = parseInt(prompt("\nERROR! \nEl peso debe ser entre 1 y 600 kg \n\n  Intentalo de nuevo: "));
}

var g_mercurio = 3.7;
var g_venus = 8.8;
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.7;
var g_saturno = 10.4;
var g_urano = 8.8;
var g_neptuno = 11.1;
var g_pluton = 0.6;
var peso = peso_usuario;
var peso_final;

switch (planeta) {
    case 1:
        peso_final = peso * g_mercurio / g_tierra;
        planeta = "Mercurio";
        break;
    case 2:
        peso_final = peso * g_venus / g_tierra;
        planeta = "Venus";
        break;
    case 3:
        peso_final = peso * g_marte / g_tierra;
        planeta = "Marte";
        break;
    case 4:
        peso_final = peso * g_jupiter / g_tierra;
        planeta = "Júpiter";
        break;
    case 5:
        peso_final = peso * g_saturno / g_tierra;
        planeta = "Saturno";
        break;
    case 6:
        peso_final = peso * g_urano / g_tierra;
        planeta = "Urano";
        break;
    case 7:
        peso_final = peso * g_neptuno / g_tierra;
        planeta = "Neptuno";
        break;
    case 8:
        peso_final = peso * g_pluton / g_tierra;
        planeta = "Pluton";
        break;
}
if (planeta == "Pluton") {
    document.write("<br><h2> Tu peso en Pluton seria: " + peso_final + " Kg</h2> <br><h5>Recuerda que Pluton ya no se considera parte de los planetas del sistema solar. <br>Debido a que sus caracteristicas corresponden a la categoria de <strong>'Planeta enano'</strong> </h5>");
} else {
    document.write("<br><h2> Tu peso en " + planeta + " sería: <br><br><h1>" + peso_final.toFixed(2) + " Kg </h1></h2>");
}