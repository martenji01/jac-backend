const fs = require("fs");
const url = require("url");

module.exports = {
    writebackSync: function(fileName, obj){
        fs.writeFileSync(fileName,JSON.stringify(obj));
    },

    readbackSync: function(fileName){
        return JSON.parse(fs.readFileSync(fileName), {encoding:"utf8"});
    },

    readadd: function(fileName,newObj){
        var obj = this.readback(fileName);
        obj.push(newObj);
        this.writeback(fileName,obj);
    },

    readAsync: function (fileName, callback) {
        fs.readFile(fileName, {encoding:"utf8"}, (err,data)=>{
            callback(JSON.parse(data));
        });
    }
}