module.exports = function longestConsecutiveLength(array) {
  let c = 1;
  let count = [];
  if (array.length == 0){
    return 0;
  }
  let arraySort = array.sort(function(a, b) {
    return a-b;
  });
  for (let i = 0; i<arraySort.length; i++){
    while (arraySort[i] == arraySort[i+1]){
      i++;
    }
    if (arraySort[i] + 1 == arraySort[i+1]){
      c++;
    }
    else {
      count.push(c);
      c = 1;
    }
  }
  let max = count[0];
  for (let i = 0; i<count.length; i++){
    if (count[i] > max){
      max = count[i]
    }
  }
  return max;
}
