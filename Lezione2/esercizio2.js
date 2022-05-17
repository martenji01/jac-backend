var persona = {
    identificativo:{
        nome: "Mario",
        cognome: "Bross"
    },
    nascita:{
        giorno: "10",
        mese: "gennaio",
        anno: "1900"
    }
}

function letturaPersona(personaggio){
    try{
        console.log(personaggio.identificativo.nome);
    } catch(err){
        console.log("Si e' verificato un errore: " + err);
    }
}

letturaPersona(persona);