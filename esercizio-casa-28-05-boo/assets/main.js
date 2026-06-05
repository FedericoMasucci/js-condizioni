let temp = prompt("Qual è la temperatura esterna?");
if (temp < 15) {
    let piove = prompt("Sta Piovendo? Puoi utilizzare solo SI/NO");
    if (piove == "SI") {
        console.log("Metti l'impermeabile");
    }
    else
        console.log("Metti la giacca");

}
else
    console.log("Vai leggero");
