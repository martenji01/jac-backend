var obj = {}; //dichiarazione oggetto vuoto, si usano le graffe
obj = {
    name: "nome",
    congome: "cognome",
    writeread: function(){
        console.log("funzione dell'oggetto");
        console.log(this.name);
    }
};

function writeread(){
    console.log("funzione esterna");
}

obj.writeread();
writeread();
//le due funzioni possono avere stesso nome identificativo perchè hanno scope (visibilità) diverse
