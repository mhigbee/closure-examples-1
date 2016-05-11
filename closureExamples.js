/**
 * Created by matthigbee on 5/10/16.
 */
function titleMe (title) {
    return function nameMe(name){
        console.log(title + " " + name);
    };
}

var resultsFromTitleMe = titleMe("Mr");
resultsFromTitleMe('Friend');//console.log(title ...) is now ran
resultsFromTitleMe('Car');


//   return keyword stops everything. Left return or stop and return what's on the right. We can return a variable var temp = "b";. The value is returned.
//   Code is completely new to human beings and so it makes it hard.
//   Snapshot
/* var resultsFromTitleMe = function nameMe(name) {
 console.log(title + " " + name);
 };
 */

function titleMe (title) {
    return function nameMe(name){
        console.log(title + " " + name);
        title = title + ".";
    };
}

var resultsFromTitleMe = titleMe("Mr");
resultsFromTitleMe('Friend');//console.log(title ...) is now ran
resultsFromTitleMe('Car');


//   return keyword stops everything. Left return or stop and return what's on the right. We can return a variable var temp = "b";. The value is returned.
//   Code is completely new to human beings and so it makes it hard.
//   Snapshot
/* var resultsFromTitleMe = function nameMe(name) {
 console.log(title + " " + name);
 };
 */

function makeQuiddichTeam(houseName){
    var players = [];
    return function (playerName){
        players.push(playerName);
        console.log(players);
    }
};

//Final Code
var slythernPlayers = makeQuiddichTeam();
slythernPlayers("Malfoy");//console ["Malfoy"]
slythernPlayers("Goyle");//console ["Malfoy", "Goyle"]
slythernPlayers("Snape");//console ["Malfoy", "Goyle", "Snape"]

var gryffindoorPlayers = makeQuiddichTeam();
gryffindoorPlayers("Potter");
gryffindoorPlayers("Ron");
gryffindoorPlayers("The twins");


function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
