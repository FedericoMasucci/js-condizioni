console.log("caricato");

let voto = prompt("Dammi un voto da 1 a 10");

if (voto < 6) {
    console.log("Insufficiente");
}
else if (voto == 6 || voto == 7) {
    console.log("Sufficiente");
}
else if (voto == 8 || voto == 9) {
    console.log("Buono");
}
else
    console.log("Ottimo");


