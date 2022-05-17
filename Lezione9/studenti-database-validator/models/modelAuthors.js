
//includi libreria dotenv
require("dotenv").config();

//libreria mongoose
const mongoose = require("mongoose");
const { middlewareFunctions } = require("mongoose/lib/helpers/query/applyQueryMiddleware");

//includi costanti connessione
const conn = process.env.CONNECTION_DB;

//struttura author
const authorStructure = mongoose.Schema({
    PIVA: {type:Number, required:true, unique: true},
    name: {type:String},
    surname:{type:String},
    birth:{
        date: {type: String},
        place: {type: String}
    }
});

const authorModel = mongoose.model("Author", authorStructure);


module.exports = {

    addNewAuthor: async function (mypiva, myname, mysurname, mydate, myplace, callback) {
        let db = await mongoose.connect(conn);
        
        await this.filterByPIVA(mypiva,(result)=>{
            if(result!=null)
                callback(null);
            else{
                this.createAuthorStructure(mypiva, myname, mysurname, mydate, myplace,(author)=>{
                    author.save();
                    callback(author);
                    });
            }
        });
        
    },

    filterByPIVA: async function (filter, callback) {
        let db = await mongoose.connect(conn);
        authorModel.findOne({PIVA:filter},function (err,result) {
            if(err)
            console.log(err);
        console.log(result);
        callback(result);
        });
    },

    filterManyByPIVA: async function (filter, callback) {
        let db = await mongoose.connect(conn);
        authorModel.find({PIVA:filter},function (err,result) {
            if(err)
            console.log(err);
        console.log(result);
        callback(result);
        });
    },

    readAllauthors: async function (callback) {
        let db = await mongoose.connect(conn);
        authorModel.find(function (err,result) {
            if(err)
            console.log(err);
        callback(result);
        });
    },

    createAuthorStructure: async function (mypiva, myname, mysurname, mydate, myplace, callback) {
        let db = await mongoose.connect(conn);
        var author = new authorModel();
        author.PIVA= mypiva;
        author.name= myname;
        author.surname= mysurname;
        author.birth.date= mydate;
        author.birth.place= myplace;
        callback(author);
    },

    authorModify: async function (mypiva, myname, mysurname, mydate, myplace, callback) {
        let db = await mongoose.connect(conn);

        this.filterByPIVA(mypiva,(result)=>{
            if(result==null)
                callback(result);
            else{

                this.createAuthorStructure(mypiva, myname, mysurname, mydate, myplace,(authorModified)=>{
                    authorModel.findOne({PIVA:authorModified.PIVA},function (err,singleauthor) {
                        if(err)
                        console.log(err);
                        singleauthor.name=authorModified.name;
                        singleauthor.surname=authorModified.surname;
                        singleauthor.birth.date= authorModified.birth.date;
                        singleauthor.birth.place= authorModified.birth.place;
                        singleauthor.save(function (err,result) {
                            if(err)
                                console.log(err);
                            
                            callback(result);
                        });
                    
                    });
                })
            }
        })
        
        
    },

    //modifica delete
    deleteauthor: async function (filter, callback) {
        let db = await mongoose.connect(conn);
        this.filterByPIVA(filter, (result)=>{
            if(result==null)
                callback(result);
            else{
                authorModel.findOneAndRemove({PIVA:filter},function (err,result) {
                    if(err)
                    console.log(err);
                callback(result);
                });
            }
        })
        
    }
}