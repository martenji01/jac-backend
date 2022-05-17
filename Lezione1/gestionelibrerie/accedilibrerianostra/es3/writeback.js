//Crea file asincrono
const fs = require("fs");

module.exports = {
    writeback: function(filename1,finename2){
        
        var contenuto = fs.readFile(filename1, {encoding:"utf8"}, function(err,data){
            if(err)
                throw err;
            return data;
        });
        
        var contenuto2="";
        for(var i=contenuto.length;i>0;i--){
            contenuto2+=contenuto.substring(contenuto.length-i);
        }

        fs.writeFile(filename2, contenuto2, function(err){
            if(err) throw err;
            console.log("File scritto con successo!")
            //leggi file
            fs.readFile(filename2, {encoding:"utf8"}, function(err,data){
                if(err)
                    throw err;
                return data;
            });
        });
  }
}