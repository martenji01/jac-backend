//libreria lettura JSON
const fs = require("fs");
//file json autori
const fileBooks = process.env.BOOKSFILENAME;
//includi libreria dotenv
require("dotenv").config();

module.exports = {

    writebackSync: function(obj){
        fs.writeFileSync(fileBooks,JSON.stringify(obj));
    },

    //saveJSON
    saveJSONBooks:function(obj, callback) {
        fs.writeFile(fileBooks,JSON.stringify(obj),callback);
    },

    //lettura file JSON Asincrona
    readAsync: function (callback) {
        fs.readFile(fileBooks, {encoding:"utf8"}, (err,data)=>{
            if(err)
                throw err;
            console.log(data);
            callback(JSON.parse(data));
        });
    },

    //lettura file JSON Sincrona
    readbackSync: function(){
        return JSON.parse(fs.readFileSync(fileBooks), {encoding:"utf8"});
    },

    createBook: function (myisbn, myhouse, mytitle, mydate) {
        let newBook = {
            ISBN: myisbn,
            publishingHouse: myhouse,
            title: mytitle,
            date: mydate
            };
        
        return(newBook);
    },

    filterBook: function (filter, callback) {
        var bookRequired=null;
        var listBooks = this.readbackSync();
        for(let singleBook of listBooks){
            if(singleBook.ISBN===filter)
                bookRequired=singleBook;
        };
        callback(bookRequired); 
    }

}