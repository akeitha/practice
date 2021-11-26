console.log(12 + 14 + '12');
console.log(3 + 2 - '1');
console.log('3' + 2 - 1)
console.log(undefined + 2)
var a = "$100$";
console.log(parseInt(a));
if (!parseInt(a))
  console.log("kek");
a ? console.log('idi') : console.log('nahui')
var i = -1;
while(++i < 10)
  console.log(i);
  let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  for (let num of arr) {
    if (num % 2) {
      console.log(num);
    }
  }
  console.log(typeof(null))
  console.log(+2 + '-')
  console.log(typeof(NaN));
