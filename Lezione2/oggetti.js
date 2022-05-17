var obj = {}; //dichiarazione oggetto vuoto, si usano le graffe
obj = {
    name: "nome",
    surname: "cognome"

}; //name è una proprietà
console.log(obj); //stampa proprietà con relativi valori
console.log(obj.name); //stampa valore proprietà

//for su oggetto
for(var key in obj){
    console.log(key); //elenco chiavi
}