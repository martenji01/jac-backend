const fs = require("fs");
const url = require("url");
//includi libreria dotenv
require("dotenv").config();
//database
//let db = {data:[]};

module.exports = {
    
    //db: db,

    writebackSync: function(obj){
        fs.writeFileSync(process.env.FILENAME,JSON.stringify(obj));
    },

    //da rivedere la callback
    saveJSONStudents:function(obj, callback) {
        fs.writeFile(process.env.FILENAME,JSON.stringify(obj),callback);
    },

    readbackSync: function(){
        var studentList = JSON.parse(fs.readFileSync(process.env.FILENAME), {encoding:"utf8"});
        console.log(studentList);
        return studentList;
    },

    readaddSync: function(newObj){
        var obj = this.readbackSync();
        obj.push(newObj);
        this.writebackSync(obj);
    },

    /*
    readAsync: (callback) =>{
        fs.readFile(process.env.FILENAME, {encoding:"utf8"}, (err,data)=>{
            if(err)
                throw err;
            this.db(JSON.parse(data));
            callback();
        });
    },*/

     readAsync: function (callback) {
        fs.readFile(process.env.FILENAME, {encoding:"utf8"}, (err,data)=>{
            if(err)
                throw err;
            console.log(data);
            callback(JSON.parse(data));
        });
    },

    createStudentBase: function (myname, mysurname, mydate, myplace) {
        let myusername="@"+myname.toLowerCase() +"."+mysurname.toLowerCase();
        var newStudent= {
            username: myusername,
            name: myname,
            surname: mysurname,
            birth:{
                date:mydate,
                place: myplace
            }
        }
        return(newStudent);
    },

    createStudent: function (myusername, myname, mysurname, mydate, myplace) {

        var newStudent= {
            username: myusername,
            name: myname,
            surname: mysurname,
            birth:{
                date:mydate,
                place: myplace
            }
        }
        return(newStudent);
    }
}