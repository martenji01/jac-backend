const fs = require("fs");

module.exports = {
    writeback: function(fileName, obj){
        fs.writeFileSync(fileName,JSON.stringify(obj));
    },

    readback: function(fileName){
        return JSON.parse(fs.readFileSync(fileName), {encoding:"utf8"});
    },

    readadd: function(fileName,newObj){
        var obj = this.readback(fileName);
        obj.push(newObj);
        this.writeback(fileName,obj);
    },

    orderList: function(fileName, thisList){
        //var orderedList=[];
        var p1=thisList[0];
        var p2;

        for(var i=1; i<thisList.lenght(); i++){
            for(var j=2; j< thisList.lenght();j++){
                p2=thisList[j];
                if(p1.name<p2.name){
                    thisList[i]=p2; 
                    thisList[j]=p1;
                }  
            }
            var p1=thisList[i];
        }



        for(var persona1 in thisList){
            for(var persona2 in thisList){
                if(persona1.name < persona2.name){
                    persona1=persona2;
                }
            }
            orderedList.push(persona1);
        }
        this.writeback(fileName,orderedList);
    }
}