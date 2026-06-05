let totale = prompt("Totale carrello");
let tot = Number(totale);
let Ntot = 0;

if (tot > 50)
    console.log("Spedizione gratuita");
else
    Ntot = tot + 5;
console.log(`Il tuo totale è: ${Ntot}`);

