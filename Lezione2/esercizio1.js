var studente ={
    nome: "Marta",
    cognome: "Cereda"
}

//metodi alternativi di visualizzare le proprieta' dell'oggetto
console.log("Metodi alternativi di visualizzare le proprieta' dell'oggetto");
console.log(studente);
for(var persona in studente){
    console.log(persona);
}

//metodi alternativi per visualizzare il contenuto delle prorpieta' dell'oggetto
console.log("Metodi alternativi per visualizzare il contenuto delle prorpieta' dell'oggetto");
var property="nome";
console.log(studente.nome, studente.cognome);
console.log(studente[property]);
