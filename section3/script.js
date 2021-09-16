/* use strict 
---Sctivating Strict Mode--- 
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
//reserves these words not for variable 
//const interface = 'Audio';
//const private = 534;
//const if = 23

---Functions---
function logger(){
    console.log('My name is Raelle')
}

//---Calling / running / invoking function---

logger();
logger();
logger();

//peramaters apples, oranges
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);  
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)


---Function Declarations vs. Expressions--- 
//Function declaration 

function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}

const age1 = calcAge1(1991);
//fucntion is just a value

//Function expression
//varible holds function value
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}

const age2 = calcAge2(1991);

console.log(age1, age2);


---Arrow functions---
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  
  return retirement;
  return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));


---Functions Calling Other Functions--- 
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

---Reviewing Functions--- 
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
/*
---Coding Challenge #1---
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".

4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.

5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀

*/


//1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

const calcAverage = (a, b, c) => a + b + c / 3;
console.log(calcAverage(3, 4, 5));

//Use the function to calculate the average for both teams
//Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

let dolphinsAverage = calcAverage(44,23,71)
console.log(dolphinsAverage);

let koalasAverage = calcAverage(65,54,49);
console.log(koalasAverage);

//3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. 