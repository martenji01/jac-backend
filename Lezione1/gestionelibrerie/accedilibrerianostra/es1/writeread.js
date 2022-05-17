//Crea file asincrono
const fs = require("fs");

module.exports = {
    writeread: function(filename,filetext){
        // scrivi file --> parte thread (crea file, scrive, chiude file)
        // poi fa la back-call (conferma la scrittura file, parte la lettura del file)
        fs.writeFile(filename, filetext, function(err){
            if(err) throw err;
            console.log("File scritto con successo!")
            //leggi file
            fs.readFile(filename, {encoding:"utf8"}, function(err,data){
                if(err)
                    throw err;
                return data;
            });
        });
        
    }
}