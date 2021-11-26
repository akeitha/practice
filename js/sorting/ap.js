var a = [7, 9, 8, 7, 6, 5, 13, 11, 6, 3]
function kek(a){
  for(var x = 0; i < a.length; i++){
    for(var j = 0; j < a.length-1; j++){
      if(a[i] < a[j]){
        const c = a[i];
        a[i] = a[j];
        a[j] = c; 
      }
    }
  }
}

console.log(a);
kek(a);
console.log(a);
var r = /\d+/;
var s = "you can enter maximum 500 choices";
alert (s.match(r));


