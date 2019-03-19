/*

*/


const main = (i) => {
 for (a=0; a<i; a++) {
   var types = [];
   if (odd(a)==true) {
     types.push("odd")
   } else {
     types.push("even")
   }
   if (prime(a)==true) {
     types.push("prime")
   }
   console.log(a, types);
 }
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




main(101);
