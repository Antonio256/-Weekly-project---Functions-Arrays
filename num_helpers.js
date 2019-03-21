/*
prints the numbers from 1 to 100
for multiples of three, print "Fizz"instead of the number
for the multiples of five, print "Buzz".
For numbers which are multiples of both three and five, print "FizzBuzz".

*/

var countOdd = 0;
var countEven = 0;
var countPrime = 0;
var countFizz = 0;
var countBuzz = 0;
var countFizzbuzz = 0;

const main = (i) => {
for (a=0; a<i+1; a++) {
 var types = [];
 if (odd(a)==true) {
   types.push("odd");
   countOdd++
   //countForOdd++;
 } else {
   types.push("even");
   countEven++

   //countfor Even
 }
 if (prime(a)==true) {
   types.push("prime");
   countPrime++

   //count for prime
 }
 if (fizz(a)==true){
   types.push("fizz");
   countFizz++
 }
 if (fizzbuzz(a)==true){
   types.push("fizzBuzz")
   countFizzbuzz++
 }
 if (buzz(a)==true){
   types.push("buzz");
   countBuzz++
 }
 console.log(a, types);
}
console.log(countPrime + " number of primes ", countOdd + " number of odds " + countEven + " number of evens ", countBuzz + " number of buzz ", countFizz + " number of fizz ", countFizzbuzz + " number of fizzBuzz ");
}
var odd = (n) => {
if (n%2 == 0) {
 return false
} else{
 return true
}
}
var prime = (n) => {
  for (var x = 2; x < n; x++) {
    // console.log(x);
    if (n%x==0) {
      return false;
      }
 }
 if (n>1){
   return true;
}};
var fizz=(n)=>{
if(n%3==0 && n%5!=0){
  return true
}
}
var buzz=(n)=>{
if(n%5==0 && n%3!=0){
  return true
}
}
var fizzbuzz=(n)=>{
if(n%5==0 && n%3==0&& n!==0){
  return true
}
}
//console.log(countForOdd);
main(100);
