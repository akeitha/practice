const kek = {
  kawpaw: "shpek",
  hello: 'goodbye'
}
const shpek = {
  shroud: kek
}
alert(shpek.shroud.kawpaw);
console.log(kek['kawpaw']);
shpek['shalava'] = "daaaaamn";
console.log(shpek.shalava);
console.log("shalava" in shpek);
console.log (shpek.keys);
let journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
   squirrel: true},
  /* and so on... */
];
alert(journal[1].events)
let hellow = 'rat';
hellow[0] = 'c';
console.log(hellow);
let x = 23;
let y = 23;
console.log(x == y);
var object1 = {
  x: 23
}
var object2 = object1;
object2.kek = 'hello world';
console.log(object1);
var i = [5, 6 , 7, 8, 9];
for (let j of i)
  console.log(i[j]);
var bitcoin = [1,2,3,4,5];
bitcoin.pop();
bitcoin.unshift(5);
console.log(bitcoin);
var abc = "hellobitches";
var jojo = abc.split("");
console.log(jojo);




