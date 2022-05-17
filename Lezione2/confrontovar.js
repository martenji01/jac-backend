var a = 1;
var b = "1";

console.log("Controllo 1:");
if(a == b) //confronta contenuto delle due variabili
    console.log("Contenuto uguale");
else
    console.log("Contenuto non uguale");

console.log("Controllo 2:");
if(a === b) //confronta anche il tipo della variabile, oltre al contenuto
    console.log("Contenuto uguale");
else
    console.log("Contenuto non uguale");

console.log("Controllo 3:");
if(a == b && typeof a == typeof b) // stessa funzione di a===b
    console.log("Contenuto uguale");
else
    console.log("Contenuto non uguale");

console.log("Controllo 4:");
if(a!==b) // contenuto e tipo diverso
    console.log("Contenuto diverso");
else
    console.log("Contenuto non diverso");

var c = false;
console.log("Controllo 5:");
if(c) // contenuto == vero
    console.log("c = true");
else
    console.log("c = false");

console.log("Controllo 6:");
if(!c) // contenuto == non vero
    console.log("c = false");
else
    console.log("c = true"); 