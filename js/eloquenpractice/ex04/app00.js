// Your code here.
function range(a,b,c){
  var store = [];
  var i = a;
  if (c && c < 0){
    	while(i >= b){
    		store.push(i);
          	i += c;
    }
  }
else {
  		while(i <= b){
    	store.push(i);
    	if(c)
    		i += c;
    	else
      	i++;
        }
    }
  return store;
}
function sum(x){
  var y = 0;
  for(let i = 0; i < x.length; i++)
    y += x[i]
  return(y)
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55