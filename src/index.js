 module.exports = function multiply(first, second) {
  let firstArray = first.split("").reverse();
  let secondArray = second.split("").reverse();
  let steck = [];

  for (let firstCounter = 0; firstCounter < firstArray.length; firstCounter++) {
    for (let secondCounter = 0; secondCounter < secondArray.length; secondCounter++) {
      let multi = Number(firstArray[firstCounter]) * Number(secondArray[secondCounter]);
      if (steck[firstCounter + secondCounter] == null) {
        steck[firstCounter + secondCounter] = multi;
      } else {steck[firstCounter + secondCounter] += multi; }
      
      if (steck[firstCounter + secondCounter] >= 10) {
        if (steck[firstCounter + secondCounter + 1] == null) {
          steck[firstCounter + secondCounter + 1] = Math.floor(steck[firstCounter + secondCounter] / 10);
        } else {steck[firstCounter + secondCounter + 1] += Math.floor(steck[firstCounter + secondCounter] / 10);}
        steck[firstCounter + secondCounter] = steck[firstCounter + secondCounter] % 10;
      }      
    }
  }
  return steck.reverse().join("");
}