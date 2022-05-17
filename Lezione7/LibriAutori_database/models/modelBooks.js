//includi libreria dotenv
require("dotenv").config();

//libreria mongoose
const mongoose = require("mongoose");
const { middlewareFunctions } = require("mongoose/lib/helpers/query/applyQueryMiddleware");

//includi costanti connessione
const conn = process.env.CONNECTION_DB;

//struttura book
const bookStructure = mongoose.Schema({
    ISBN: {type:Number, required:true, unique: true},
    title: {type:String},
    publishingHouse:{type:String},
    date: {type: String}
});

const bookModel = mongoose.model("book", bookStructure);

//model writtenBy
const modelWrittenBy = require("./modelWrittenBy");

module.exports = {

    addNewbook: async function (myisbn, mytitle, mypublishingHouse, mydate, callback) {
        let db = await mongoose.connect(conn);

        await this.filterByISBN(myisbn, (result)=>{
            if(result!=null)
                callback(null);
            else{
                var book = new bookModel();
                book.ISBN= myisbn;
                book.title= mytitle;
                book.publishingHouse= mypublishingHouse;
                book.date= mydate;

                book.save();
                callback(book);
                    }
        })
        
        
    },

    filterByISBN: async function (filter, callback) {
        let db = await mongoose.connect(conn);
        bookModel.findOne({ISBN:filter},function (err,result) {
            if(err)
            console.log(err);
        console.log(result);
        callback(result);
        });
    },

    filterManyByISBN: async function (filter, callback) {
        let db = await mongoose.connect(conn);
        bookModel.find({ISBN:filter},function (err,result) {
            if(err)
            console.log(err);
        console.log(result);
        callback(result);
        });
    },

    readAllbooks: async function (callback) {
        let db = await mongoose.connect(conn);
        bookModel.find(function (err,result) {
            if(err)
            console.log(err);
        callback(result);
        });
    },

    createbookStructure: async function (myisbn, mytitle, mypublishingHouse, mydate, callback) {
        let db = await mongoose.connect(conn);
        var book = new bookModel();
        book.ISBN= myisbn;
        book.title= mytitle;
        book.publishingHouse= mypublishingHouse;
        book.date= mydate;
        callback(book);
    },

    bookModify: async function (book, callback) {
        let db = await mongoose.connect(conn);
        bookModel.findOne({ISBN:book.ISBN},function (err,singlebook) {
            if(err)
            console.log(err);
            singlebook.title=book.title;
            singlebook.publishingHouse=book.publishingHouse;
            singlebook.date=book.date;
            singlebook.place=book.place;
            singlebook.save(function (err,result) {
                if(err)
                    console.log(err);
                
                callback(result);
            });
        
        });
    },

    //modifica delete
    deleteBook: async function (filter, callback) {

        let db = await mongoose.connect(conn);
        this.filterByISBN(filter, (result)=>{
            if(result==null)
                callback(null);
            else{
                modelWrittenBy.deletewrittenBy(filter,(result)=>{
                    console.log(result);
                })

                bookModel.findOneAndRemove({ISBN:filter},function (err,result) {
                    if(err)
                    console.log(err);
                callback(result);
                });
            }
        });

        
    }
    
}