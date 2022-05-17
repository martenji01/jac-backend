const modelBooks = require("../models/modelBooks");
const modelAuthors = require("../models/modelAuthors");
const { response } = require("express");

//da rivedere
module.exports= {
    filterBooksByAuthor: function (req,res) {
        var filter = req.params.PIVA;
        
        modelBooks.filterByPIVA(filter,(result)=>{
            console.log(result);
            if(result == null){
                res.status=404;
                res.send("Problemi avvenuti.")
            } else{
                res.send(result);
            }
           
        });
    },

    filterAuthorsByBook: function (req,res) {
        var filter = req.params.ISBN;
        
        modelBooks.filterByISBN(filter,(result)=>{
            console.log(result);
            if(result == null){
                res.status=404;
                res.send("Problemi avvenuti.")
            } else{
                res.send(result);
            }
           
        })
    }
}