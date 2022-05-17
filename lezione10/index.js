
//Esercizio 1
let array = [5, 25, 35 , -5, 30];

function testArray(array){
  let sum = 0;

  array.forEach(element => {
    sum += element;
  });

  if(sum%2==0 & sum%3==0 & sum%5==0)
    console.log(1);
  else
    console.log(0);
}

//Esercizio 2
let stringa = "addac";

function testString(stringa){
  let lunghezza = stringa.length;
  
  let control = false;
  let cont = 0;
  let listChar = [];

  for(var i = 0; i < lunghezza; i++){
      control = false;
      if(i!=0){
        listChar.forEach(element => {
          if(stringa.charAt(i) == element)
            control = true;
        });
      } 

      if(!control){
        cont ++;
        listChar.push(stringa.charAt(i));
      }
  }
  
  if(cont == 3)
    console.log("Wonderful");
  else
    console.log(-1);
    
}

//Esercizio 2 (con Obj)
function testStringObj(stringa){
  let count = 0;
  let listChar = {};
  stringa = stringa.split(" ").join("").toLowerCase();
  for(var i = 0; i < stringa.length; i++){
      if(!listChar[stringa.charAt(i)]){
        listChar[stringa.charAt(i)] = true;
        count ++;
      }
  }
  
  if(count == 3)
    console.log("Wonderful");
  else
    console.log(-1);
}


//Esercizio 3

function stringSplit(stringa){
  stringa = stringa.split(" ");
  let newString = [];
  newString.push(stringa[0]);
  for(var i = 1; i < stringa.length - 1 ; i++){
      if(stringa[i] != stringa[i-1]){
        newString.push(stringa[i]);
      }
  }
  console.log(newString.join(" "));
}

//Esercizio 3 Bonus
stringSplit("I am John Cena Cena John am");
function stringSplit(stringa){
  stringa = stringa.split(" ");
  let newString = [];
  let control = false;
  for(var i = 0; i < stringa.length - 1 ; i++){
      if(stringa[i] != stringa[i+1]){
        newString.push(stringa[i]);
      } else{
        i++;
        control = true;
      }
  }

  stringa = newString.join(" ");

  if(control){
    stringSplit(stringa);
  } else{
    console.log(stringa);
  }
  
}