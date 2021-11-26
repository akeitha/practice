function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(null,null));
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

function order(words){
  var kek = words.split(" ");
  var key = /\d+/;
  var shpek = [];
  for (var i = 0; i < kek.length; i++){
    for(var j = 0; j<kek.length - 1; j++) {
    if(Number((kek[i].match(key))) < Number((kek[j].match(key)))){      
       var c = kek[i];
       kek [i] = kek[j];
        kek[j] = c;
      }
      }
}
  return(kek.join(" "))
  }


  