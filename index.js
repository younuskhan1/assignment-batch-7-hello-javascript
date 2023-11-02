// Problem 1: Let’s play a mind game....


function mindGame(x) {
    if (typeof x !== 'number') {
        return "Please provide me a positive numeric input ";
    } else if (x < 0) {
        return "Please provide me a positive number"
    } else {
        const number = ((((x * 3) + 10) / 2) - 5);
        return number;
    }
}

console.log(mindGame(33));


// Problem 2: Finding even or odd....


function evenOdd(x) {
    if (typeof x !== 'string') {
        return "Please provide me a textual value";
    } else {
        const stringCharacters = x.length;
        if (stringCharacters % 2 === 0) {
            return "even";
        } else {
            return "odd";
        }
    }

}
console.log(evenOdd("amar sonar bangla"));


// Problem 3: Is Less or Greater than seven....


function isLGSeven(x) {
    if (typeof x !== "number") {
        return "Please provide me a number";
    } else {
        const variation = x - 7;
        if (variation < 7) {
            return variation;
        } else {
            return x * 2;
        }
    }
}
console.log(isLGSeven(15));



// Problem 4: Finding Bad data...

function findingBadData(x) {
    if (!Array.isArray(x)) {
        return "Please provide me an array of numbers";
    } else {
        let badData = 0;
        for (let i = 0; i < x.length; i++) {
            const arrayNums = x[i];
            if (arrayNums < 0) {
                badData++;
            }
        }
        return badData;
    }
}
console.log(findingBadData([-4, -9, -5, -33, -55]));