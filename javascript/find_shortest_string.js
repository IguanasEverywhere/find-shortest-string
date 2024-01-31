function findShortestString(arr) {
  // type your code here

  // have array for string lengths = []
  // iterate over arr
    // for each element, push length of element to lengths array
    // sort the lengths array
  // iterate over arr again
    // return first element that has length of first element from lengths

  let lengths = [];

  for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }

  let sortedLengths = lengths.sort();

  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length === sortedLengths[0]) {
      return arr[j];
    }
  }


}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  console.log("");

  console.log("Expecting: ''");
  console.log("=>", findShortestString(['flower', "", 'juniper', 'lily', 'dadelion']));

  console.log("");

  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['a']));

  // BENCHMARK HERE
  let longArr = [];
  for (let j = 0; j < 100; j++) {
    longArr.push("a" * Math.floor(Math.random() * 30))
  }

  let startTime = Date.now();
  for (let i = 0; i < 1000; i++) {
    findShortestString("aaa", "aa", "a");
    findShortestString(longArr);
  }
  let endTime = Date.now()

  let averageTime = ((endTime-startTime) / 2000);
  console.log(averageTime)


}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
