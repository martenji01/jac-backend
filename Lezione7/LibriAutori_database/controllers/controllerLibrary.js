const modelBooks = require("../models/modelBooks");
const modelAuthors = require("../models/modelAuthors");
const modelWhoWrites = require("../models/modelWrittenBy");
const { response } = require("express");

//da rivedere
module.exports= {
    filterBooksByAuthor: function (req,res) {
        var filter = req.params.PIVA;
        
        modelWhoWrites.filterByPIVA(filter,(result)=>{
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
        
        modelWhoWrites.filterByISBN(filter,(result)=>{
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