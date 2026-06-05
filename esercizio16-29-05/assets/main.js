let saldo = prompt("Forniscimi il tuo saldo");
let imp = prompt("Forniscimi l'iporto da prelevare");

if (imp <= 0) {
    console.error("Importo dato NEGATIVO");
}
else if (saldo > imp) {
    saldo = saldo - imp;
    console.log("Prelievo Effetuato, il tuo nuovo saldo è", saldo);
}
else
    console.warn("Saldo Insufficiente");