var regex1 = RegExp("foo*", "g");
var str1 = "table football, foosball";
let array1 = regex1.exec(str1);

while (array1 !== null) {
  console.log(array1, regex1.lastIndex);
  array1 = regex1.exec(str1);
  // expected output: "Found foo. Next starts at 9."
  // expected output: "Found foo. Next starts at 19."
}

let str = "I love JavaScript";
let result = str.match(/Java(Script)/);
console.log(result);
console.log({ a: 1, b: 2, c: 3, d: 4, eeeee: 565, ffffff: 66666 });

/////////////////////////////////////////////////////////////////////////

regex1 = RegExp("foo*", "g");
str1 = "table foootball, foosball";
//let array1;

array1 = regex1.exec(str1);
console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);

array1 = regex1.exec(str1);
console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);

console.log(regex1, array1[0].length);
console.log(
  str1[regex1.lastIndex - array1[0].length],
  str1[regex1.lastIndex - 1]
);

/////////////////////////////////////
