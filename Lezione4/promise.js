//PRIMO METODO per simulare un ritardo di funzione

function callback(){
    console.log("Ciao");
}

function test(){
    setTimeout(callback, 1000); //ritarda una funzione di qualche millisecondo
}

test();

//SECONDO METODO per simulare un ritardo di funzione
//creazione promise
const myPromise = new Promise( function(resolve, reject){
   setTimeout(resolve("Fine promise",1000));
   setTimeout(reject("errore",1000));
});

myPromise.then(function(result){
    console.log(result);
}).catch();

//TERZO METODO per simulare un ritardo di funzione
async function asyncfunc() {
    //crea alle spalle una promise
    setTimeout(function () {
        console.log("async");
    },1000);
    
}

async function main() {
    await asyncfunc(); //posso chiamarlo solo in altre funzioni asincrone
    console.log("test");
}

main();

//QUARTO METODO
async function asyncF() {
    return "Uno";
}

async function main2() {
    let testAsync = await asyncF();
    console.log("Due", testAsync);
}

main2();