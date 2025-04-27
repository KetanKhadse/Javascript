//Declaration
let MyArr = [0,1,2,3,4,5];
//unlike c# we do not have to strictly type declare them
let NewArr = [0,10,"2",3.234];
//Also It Is Type independany
//console.log(NewArr);
//console.log(typeof(NewArr));
const Marvel = ["Iron-Man","SpiderMan","BlackWidow"];
const Dc = ["Superman","Batman","Flash"];
Marvel.push(Dc);
//console.log(Marvel);
//console.log(Marvel[3][1][1]);
//const newheroes = marvel,concat(Dc);
const NewHeroes = [...Dc,...Marvel]
const NumArr = [1,2,3,[2,3,4],[2,3,4,[5,6,7]]];
const RealWorldArr = NumArr.flat(Infinity);
//console.log(RealWorldArr);
console.log(Array.isArray(NumArr));
console.log(Array.isArray("Ketan"));
console.log(Array.from("Ketan"));
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));






