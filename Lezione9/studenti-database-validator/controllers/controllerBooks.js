const modelBooks = require("../models/modelBooks");
const modelAuthors = require("../models/modelAuthors");

module.exports = {
    readAllBooks: function (req,res) {
        modelBooks.readAllbooks((listBooks)=>{
            res.send(listBooks);
        })
    },

    addNewBook: async function (req,res) {
        var filterPIVA = req.body.PIVA;

        await modelAuthors.filterManyByPIVA(filterPIVA,(listAuthors)=>{
            if(listAuthors==null){
                res.statusCode = 404;
                res.send("PIVA non trovata, controlla.");
            }
            else{
                var filterISBN = req.body.ISBN;

                modelBooks.addNewbook(
                    filterISBN,
                    req.body.title,
                    req.body.house,
                    req.body.date, listAuthors, (singleBook)=>{
                        if(singleBook==null){
                            res.statusCode = 409;
                            res.send("ISBN già in uso, libro presente nel database.");
                        } else{
                            console.log(singleBook);
                            res.send(singleBook);
                        }
                        
                    });
    
            }

        })
        
            
        
    },

    modifiedBook: function name(req,res) {
        var filter = req.params.ISBN;
        var control = true;
        modelBooks.filterByISBN(filter,(result)=>{
            if(result==null)
                control = false;
        });

        if(!control){
            res.statusCode = 404;
            res.send("Codice ISBN non trovato, libro non nel database.");
        } else{
            modelBooks.createbookStructure(
                filter,
                req.body.title,
                req.body.house,
                req.body.date, (newBook)=>{
                    modelBooks.bookModify(newBook,(result)=>{
                        res.send(result);
                    })
                });
            
        }

    },

    deleteBook: function (req,res) {
        var filter = req.params.ISBN;
        
        modelBooks.deleteBook(filter,(result)=>{
            if(result==null){
                res.statusCode = 404;
                res.send("Codice ISBN non trovato, libro non nel database.");
            }
            else
                res.send(result);
        })

    }
    
}