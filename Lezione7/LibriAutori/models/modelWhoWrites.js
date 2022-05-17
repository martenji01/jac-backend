//libreria lettura JSON
const fs = require("fs");
//file json autori
const fileWhoWrites = process.env.WHOWRITESFILENAME;
//includi libreria dotenv
require("dotenv").config();

module.exports = {

    writebackSync: function(obj){
        fs.writeFileSync(fileWhoWrites,JSON.stringify(obj));
    },

    //saveJSON
    saveJSONWhoWrites:function(obj, callback) {
        fs.writeFile(fileWhoWrites,JSON.stringify(obj),callback);
    },

    //lettura file JSON Asincrona
    readAsync: function (callback) {
        fs.readFile(fileWhoWrites, {encoding:"utf8"}, (err,data)=>{
            if(err)
                throw err;
            console.log(data);
            callback(JSON.parse(data));
        });
    },

    //lettura file JSON Sincrona
    readbackSync: function(){
        return JSON.parse(fs.readFileSync(fileWhoWrites), {encoding:"utf8"});
    },

    createWhoWrites: function (myisbn, mypiva) {
        let newConnection = {
            ISBN: myisbn,
            PIVA: mypiva
            };
        return newConnection;
    },

    
    searchAutor: function (params) {
        
    }
}