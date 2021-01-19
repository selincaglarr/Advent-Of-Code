let range = []
function getArray(start, stop) {
  for (let num = start; num < stop; num++) {
    range.push(num);
  };
  let newarray = range.filter(num => toArray(num) == (num));
  console.log(newarray.filter(a => Double(toArray2(a)) === true));
};
function toArray(num) {
  return [...num.toString()].map(s => Number(s)).sort().join("");
};
function toArray2(num) {
  return [...num.toString()].map(s => Number(s));
};
function Double(array) {

  if (array[0] == array[1] || array[2] == array[3] || array[4] == array[5])
    return true;
  else if (array[1] == array[2] || array[3] == array[4])
    return true;
  else if (array[2] == array[3] || array[5] == array[4])
    return true;
  else
    return false;
};

getArray(240298, 784956);
