
//To be used for the Basic Level:
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


// Your code here

//Basic

function displayAllElements(array) {
    let elementList = ""
    for (let i = 0; i < array.length; i++) {
        if (i !== 0) {
            elementList = elementList + ","
        }
        elementList = elementList + array[i]
    }
    return elementList
}

console.assert(
    displayAllElements(sampleArray) === sampleArray.toString(),
    "displayAllElements does not run properly with an array of 20 numbers"
)

console.assert(
    displayAllElements([1, 7, 67]) === "1,7,67",
    "displayAllElements does not run properly for an array of 3 numbers"
)

function displayEvenElements(array) {
    let elementList = ""
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            if (elementList !== "") {
                elementList = elementList + ","
            }
            elementList = elementList + array[i]
        }
    }
    return elementList
}

console.assert(
    displayEvenElements(sampleArray) === "244,758,450,302,20,712,456,398,882,848,940,472",
    "displayEvenElements does not run properly with an array of 20 numbers"
)

console.assert(
    displayEvenElements([52, 73, 167, 2, 6]) === "52,2,6",
    "displayEvenElements does not run properly with an array of 5 numbers"
)

function displayOddElements(array) {
    let elementList = ""
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            if (elementList !== "") {
                elementList = elementList + ","
            }
            elementList = elementList + array[i]
        }
    }
    return elementList
}

console.assert(
    displayOddElements(sampleArray) === "469,755,245,71,21,339,179,535",
    "displayOddElements does not work properly with array of 20 numbers"
)

console.assert(
    displayOddElements([52, 73, 167, 2, 6]) === "73,167",
    "displayOddElements does not work properly with an array of 5 numbers"
)

function divisibleByEight(array) {
    let elementList = ""
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 8 === 0) {
            if (elementList !== "") {
                elementList = elementList + ","
            }
            elementList = elementList + array[i]
        }
    }
    return elementList
}

console.assert(
    divisibleByEight(sampleArray) === "712,456,848,472",
    "divisibleByEight does not work properly with an array of 20 numbers"
)

console.assert(
    divisibleByEight([8, 72, 73, 184, 180]) === "8,72,184",
    "divisibleByEight does not work properly with an array of 5 numbers"
)

function allElementsSquared(array) {
    let elementList = ""
    for (let i = 0; i < array.length; i++) {
        if (elementList !== "") {
            elementList = elementList + ","
        }
        let square = array[i] * array[i]
        elementList = elementList + square
    }
    return elementList
}

console.assert(
    allElementsSquared(sampleArray) === "219961,570025,59536,60025,574564,202500,91204,400,506944,5041,207936,441,158404,114921,777924,719104,32041,286225,883600,222784",
    "allElementsSquared does not work properly with an array of 20 numbers"
)

console.assert(
    allElementsSquared([1, 2, 3, 4, 5]) === "1,4,9,16,25",
    "allElementsSquared does not work properly with an array of 5 numbers"
)

function sumOfElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    return sum
}

console.assert(
    sumOfElements(sampleArray) === 9096,
    "sumOfElements does not work properly with an array of 20 numbers"
)

console.assert(
    sumOfElements([1, 2, 3, 4, 5]) === 15,
    "sumOfElements does not work properly with an array of 5 numbers"
)

function getSmallestElement(array) {
    let min = Number.MAX_VALUE //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min
}

console.assert(
    getSmallestElement(sampleArray) === 20,
    "getSmalletElement does not work properly with an array of 20 numbers"
)

console.assert(
    getSmallestElement([5, 52, 47, 3, 99]) === 3,
    "getSmallestElement does not work properly with an array of 5 numbers"
)

function getLargestElement(array) {
    let max = Number.MIN_VALUE
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}

console.assert(
    getLargestElement(sampleArray) === 940,
    "getLargestElement does not work properly with an array of 20 numbers"
)

console.assert(
    getLargestElement([5, 52, 47, 3, 99]) === 99,
    "getLargestElement does not work properly with an array of 5 numbers"
)

//Intermediate

function divisibleByThree() {
    let divisible = ""
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            if (divisible !== "") {
                divisible = divisible + ","
            }
            divisible = divisible + i
        }
    }
    return divisible
}

console.assert(
    divisibleByThree() === "3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99",
    "divisibleByThree does not return correct values"
)

console.assert(
    divisibleByThree() !== "712,456,848,472",
    "divisibleByThree does not return correct values"
)

function divisibleBySeven() {
    let divisible = ""
    for (let i = 1; i <= 100; i++) {
        if (i % 7 === 0) {
            if (divisible !== "") {
                divisible = divisible + ","
            }
            divisible = divisible + i
        }
    }
    return divisible
}

console.assert(
    divisibleBySeven() === "7,14,21,28,35,42,49,56,63,70,77,84,91,98",
    "divisibleBySeven does not return correct values"
)

console.assert(
    divisibleBySeven() !== "3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99",
    "divisibleBySeven does not return correct values"
)

function divisibleByThreeAndSeven() {
    let divisible = ""
    for (let i = 100; i >= 1; i--) {
        if (i % 7 === 0 || i % 3 === 0) {
            if (divisible !== "") {
                divisible = divisible + ","
            }
            divisible = divisible + i
        }
    }
    return divisible
}

console.assert(
    divisibleByThreeAndSeven() === "99,98,96,93,91,90,87,84,81,78,77,75,72,70,69,66,63,60,57,56,54,51,49,48,45,42,39,36,35,33,30,28,27,24,21,18,15,14,12,9,7,6,3",
    "divisibleByThreeAndSeven does not return correct values"
)

console.assert(
    divisibleByThreeAndSeven() !== "3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99",
    "divisibleByThreeAndSeven does not return correct values"
)

function sumToTwenty() {
    let sum = 0
    for (let i = 1; i <= 20; i++) {
        sum = sum + i
    }
    return sum
}

console.assert(
    sumToTwenty() === 210,
    "sumToTwenty does not return correct values"
)

console.assert(
    sumToTwenty() !== 9096,
    "sumToTwenty does not return correct values"
)

function ascendingPositive(start, end) {
    if (start > end || start < 0) {
        return null
    }
    let list = ""
    for (let i = start; i <= end; i++) {
        if (list !== "") {
            list = list + ","
        }
        list = list + i
    }
    return list
}

console.assert(
    ascendingPositive(1, 6) === "1,2,3,4,5,6",
    "ascendingPositive does not work properly with valid values"
)

console.assert(
    ascendingPositive(6, 1) === null,
    "ascendingPositive does not work properly if the start is greater than the end"
)

console.assert(
    ascendingPositive(-1, 6) === null,
    "ascendingPositive does not work properly if the start is a negative number"
)

function descendingPositive(start, end) {
    if (start < end || end < 0) {
        return null
    }
    let list = ""
    for (let i = start; i >= end; i--) {
        if (list !== "") {
            list = list + ","
        }
        list = list + i
    }
    return list
}

console.assert(
    descendingPositive(6, 1) === "6,5,4,3,2,1",
    "descendingPositive does not work properly with valid inputs"
)

console.assert(
    descendingPositive(1, 6) === null,
    "descendingPositive does not work properly if the start is less than the end"
)

console.assert(
    descendingPositive(6, -1) === null,
    "descendingPositive does not work properly if the end is a negative"
)

function ascendingNegative(start, end) {
    if (start > end || end >= 0) {
        return null
    }
    let list = ""
    for (let i = start; i <= end; i++) {
        if (list !== "") {
            list = list + ","
        }
        list = list + i
    }
    return list
}

console.assert(
    ascendingNegative(-6, -1) === "-6,-5,-4,-3,-2,-1",
    "ascendingNegative does not work properly with valid values"
)

console.assert(
    ascendingNegative(-1, -6) === null,
    "ascendingNegative does not work properly if start is greater than end"
)

console.assert(
    ascendingNegative(-6, 1) === null,
    "ascendingNegative does not work properly if end is positive"
)

function descendingNegative(start, end) {
    if (start < end || start >= 0) {
        return null
    }
    let list = ""
    for (let i = start; i >= end; i--) {
        if (list !== "") {
            list = list + ","
        }
        list = list + i
    }
    return list
}

console.assert(
    descendingNegative(-1, -6) === "-1,-2,-3,-4,-5,-6",
    "descendingNegative does not work properly with valid values"
)

console.assert(
    descendingNegative(-6, -1) === null,
    "descendingNegative does not work properly if start is less than end"
)

console.assert(
    descendingNegative(1, -6) === null,
    "descendingNegative does not work properly if start is positive"
)

function descendingOdds(start, end) {
    if (start <= end) {
        return null
    }
    let list = ""
    for (let i = start; i >= end; i--) {
        if (Math.abs(i) % 2 === 1) { //https://www.w3schools.com/jsref/jsref_abs.asp
            if (list !== "") {
                list = list + ","
            }
            list = list + i
        }
    }
    return list
}



console.assert(
    descendingOdds(5, -5) === "5,3,1,-1,-3,-5",
    "descendingOdds does not work properly with valid inputs"
)

console.assert(
    descendingOdds(-5, 5) === null,
    "descendingOdds does not work properly if start is less than end"
)

console.assert(
    descendingOdds(5, 5) === null,
    "descendingOdds does not work properly if start and end are equal"
)