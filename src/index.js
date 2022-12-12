const regex1 = RegExp("foo*", "g");
const str1 = "table football, foosball";
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
