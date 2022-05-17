//libreria lettura JSON
const fs = require("fs");
//file json autori
const fileAuthors = process.env.AUTHORSFILENAME;
//includi libreria dotenv
require("dotenv").config();

module.exports = {

    writebackSync: function(obj){
        fs.writeFileSync(fileAuthors,JSON.stringify(obj));
    },

    //saveJSON
    saveJSONAuthors:function(obj, callback) {
        fs.writeFile(fileAuthors,JSON.stringify(obj),callback);
    },

    //lettura file JSON Asincrona
    readAsync: function (callback) {
        fs.readFile(fileAuthors, {encoding:"utf8"}, (err,data)=>{
            if(err)
                throw err;
            console.log(data);
            callback(JSON.parse(data));
        });
    },

    //lettura file JSON Sincrona
    readbackSync: function(){
        return JSON.parse(fs.readFileSync(fileAuthors), {encoding:"utf8"});
    },

    createAuthor: function (mypiva, myname, mysurname, mydate, myplace) {
        let newAuthor = {
            PIVA: mypiva,
            name: myname,
            surname: mysurname,
            birth:{
                date: mydate,
                place: myplace
            }
        };
        
        return(newAuthor);
    },

    filterAuthor: function (filter, callback) {
        var authorRequired=null;
        var  listAuthors = this.readbackSync();
        
        for(singleAuthor of listAuthors){
            if(singleAuthor.PIVA===filter)
                authorRequired=singleAuthor;
        };
        callback(authorRequired);
    },

    //da rivedere!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //controllo esistenza JSON
    controlJson: function (callback) {
        if (fs.existsSync(fileAuthors)) {
            console.log('Found file');
        }else{
            saveJSONAuthors([],callback);
        }
    }
}