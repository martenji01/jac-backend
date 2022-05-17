export function sumArray(numbers) {
    var isThereANull = false;
    var sum = 0;
    var index = 0;
    if(numbers === null)
        return "Array is null"
    else if (numbers === undefined)
        return "Array is undefined"
    else if (numbers.length < 1)
        return "Array is empty"
    
    do {
        if(numbers[index] === null || isNaN(numbers[index]) )
            isThereANull=true;
        else
            sum += numbers[index]
        index++
    } while (!isThereANull & index < numbers.length);
    
    if(!isThereANull)
        return sum;
    else
        throw new Error("Error, array is filled with not-number parameters")
}

export function diffDates(date1, date2){
    
}