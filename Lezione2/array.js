var a=[]; // solo dichiarazione, l'array è vuoto
a = [1, 2, 3];
console.log("La dimensione dell'array a è " + a.length); // dimensione array = 3
var elemento = a.pop(); //toglie ultimo elemento dalla coda e ce lo ritorna
console.log("L'ultimo elemento dell'array a è " + elemento);
a.push(elemento); //metti elemento in coda

for(var el in a){
    console.log(el); //stampa indice-chiave (che parte da zero)
    console.log(a[el]); //stampa contenuto
}

for(var el of a){
    console.log(el); //stampa contenuto
}