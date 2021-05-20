
// Task1
function filter_list(list) {
    return list.filter( str => typeof str != 'string');
}

// Task2
function first_non_repeating_letter(string) {
    let low_str = [];
    for (let i in string) {
        low_str.push(string[i].toLowerCase())
    }
    for(let i in string) {
        if (low_str.filter(x => x=== string[i].toLowerCase()).length === 1) {
            return string[i]
        }
    }
    return ''
}

// Task3
function findDigitalRoot(number) {
    if(number > 10){
        let sum = number%10 + findDigitalRoot(Math.floor(number/10));
        if(sum>10){
            return findDigitalRoot(sum);
        }else{
            return sum;
        }
    }else{
        return number;
    }
}

// Task4
function numberOfTargetPairs(array, target) {
    let count = 0;
    for (let i = 0; i < array.length; i++)
        for (let j = i + 1; j < array.length; j++)
            if (array[i] + array[j] === target)
                count++;

    return count;
}

// Task 5
function invitedFriends(string) {
    return string.toUpperCase().split(';')
        .map(name => name.split(':').reverse())
        .sort()
        .reduce((accumulator, name) => ( accumulator += `(${name[0]}, ${name[1]})`), "");
}

// Run
console.log(filter_list([1,2,'aasf','1','123',123]));
console.log(first_non_repeating_letter('sTreSS'));
console.log(findDigitalRoot(493193));
console.log(numberOfTargetPairs([1, 3, 6, 2, 2, 0, 4, 5], 5));
console.log(invitedFriends("Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))