/**
 * Created by matthigbee on 5/10/16.
 */

// Functions 2.3
// Write a function called isPrime that accepts 1 parameter and checks if that parameter is a prime number. If the number is prime return true else return false
function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
//Use the isPrime function to check if a number is prime. If the number is prime then push that number to the primeNumbers array. The listPrimes function takes a number as a parameter then returns all the prime numbers up to the given number

function isPrime(num) {
    if(num <= 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i===0) {
            return false;
        }
    }
    return true;
}

function listPrimes(max) {
    var primeNumbers = []
    for(var i = 0; i < max; i++){
        var iIsPrime = isPrime(i);
        if (iIsPrime === true){
            primeNumbers.push(i);
        }
    }
    return primeNumbers
}

// Write a function called longestWord that will find the the longest word in a string

function longestWord(str)
{
    var stringToArray = str.match(/\w[a-z]{0,}/gi);
    var result = stringToArray[0];

    for(var i = 1 ; i < stringToArray.length ; i++)
    {
        if (result.length < stringToArray[i].length) {
            result = stringToArray[i];
        }

        // If the length of result is less than the length of stringToArray[i] then set the result variable to  stringToArray[i]

    }
    return result;
}

// Functions 2.6
// Below we have a function called sum that will take an unknown number of arguments and loop over them. Inside the for loop add each argument to the total. Example sum(1,2,3,4) should equal 10
function sum() {
    var i,
        n = arguments.length,
        total = 0;
    for(i = 0; i < n; i++) {
        total = total + arguments[i];
    }
    return total

}