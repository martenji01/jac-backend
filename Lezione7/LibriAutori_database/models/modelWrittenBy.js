//includi libreria dotenv
require("dotenv").config();

//libreria mongoose
const mongoose = require("mongoose");
const { middlewareFunctions } = require("mongoose/lib/helpers/query/applyQueryMiddleware");
const modelAuthors = require("./modelAuthors");
const modelBooks = require("./modelBooks");

//includi costanti connessione
const conn = process.env.CONNECTION_DB;

//struttura writtenBy
const writtenByStructure = mongoose.Schema({
    ISBN: {type:Number, required:true},
    PIVA: {type:Number, required:true}
});

const writtenByModel = mongoose.model("writtenBy", writtenByStructure);

module.exports = {

    addNewWrittenBy: async function (myisbn, mypiva, callback) {
        let db = await mongoose.connect(conn);

        var writtenBy = new writtenByModel();
        writtenBy.ISBN= myisbn;
        writtenBy.PIVA= mypiva;

        await writtenBy.save();
        callback(writtenBy);
    },

    filterByISBN: async function (filter, callback) {
        let db = await mongoose.connect(conn);
        
        await writtenByModel.find({ISBN:filter},(err, result)=>{
            var listAuthorsPIVA=[];
            for(let singleConn of result){
                listAuthorsPIVA.push(singleConn.PIVA);
            }

            modelAuthors.filterManyByPIVA(listAuthorsPIVA,(listAuthors)=>{
                callback(listAuthors);
            })
            
        }).clone().catch(function(err){ console.log(err)});
        
    },

    filterByPIVA: async function (filter, callback) {
        let db = await mongoose.connect(conn);
        await writtenByModel.find({PIVA:filter},function (err,result) {
            var listBooksISBN=[];
            for(let singleConn of result){
                listBooksISBN.push(singleConn.ISBN);
            }

            modelBooks.filterManyByISBN(listBooksISBN,(listBooks)=>{
                callback(listBooks);
            })
        }).clone().catch(function(err){ console.log(err)});
        
    },

    readAllwrittenBy: async function (callback) {
        let db = await mongoose.connect(conn);
        writtenByModel.find(function (err,result) {
            if(err)
            console.log(err);
        callback(result);
        });
    },

    createwrittenByStructure: async function (myisbn, mypiva, callback) {
        let db = await mongoose.connect(conn);
        var writtenBy = new writtenByModel();
        writtenBy.ISBN= myisbn;
        writtenBy.PIVA= mypiva;
        callback(writtenBy);
    },

    writtenByModify: async function (writtenBy, callback) {
        let db = await mongoose.connect(conn);
        writtenByModel.findOne({ISBN:writtenBy.ISBN, PIVA:writtenBy.PIVA},function (err,singlewrittenBy) {
            if(err)
            console.log(err);
            singlewrittenBy.PIVA=writtenBy.PIVA;
            singlewrittenBy.ISBN=writtenBy.ISBN;

            singlewrittenBy.save(function (err,result) {
                if(err)
                    console.log(err);
                
                callback(result);
            });
        
        });
    },

    //modifica delete
    deletewrittenBy: async function (filter, callback) {
        let db = await mongoose.connect(conn);
        
        writtenByModel.deleteMany({ISBN:filter},function (err,result) {
            if(err)
            console.log(err);
        callback(result);
        });
    }
}