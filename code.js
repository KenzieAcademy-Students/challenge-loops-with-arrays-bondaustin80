
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