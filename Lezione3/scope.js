/*
var a; //troppa liberta'
const b; //valore invariato
let c;
*/

//esempio1 con var
try {
    if(true)
        var a=1;
    console.log(a);
} catch (error) {
    console.log("Errore: "+error);
}
//output --> 1; Ovvero non da' errore.

//esempio1 con let
try {
    if(true)
        let c = 1;
    console.log(c);
} catch (error) {
    console.log("Errore: "+error);
}
//output --> SyntaxError

//esempio1 con const
try {
    if(true)
        const b;
    console.log(b);
} catch (error) {
    console.log("Errore: "+error);
}
/*output --> error, quando si dichiara deve essere inizializzata,
successivamente posso solo richiamarla e non posso cambiare il contenuto.
*/