const fs = require('fs')

fs.readFile('./inputday2.txt', 'UTF-8', function (err, data) {
  if (err) return console.log(err)
  const passwords = data.split("\r\n")
  var count = 0

  for (let i = 0; i <= passwords.length - 1; i++) {

    let splitThree = passwords[i].split(' ')  //[ "4-5" , "b:" , "xkbmb" ]
    let space = splitThree[0].split('-').map(x => Number(x))  //[4,5]
    let secondSpace = splitThree[1].split(':')  //f: => ["f" , " "] 
    let letter = secondSpace[0]  // "f"
    let makeArray = splitThree[2].split('')  // ["x","k","b","m","b"]

    if ((makeArray[space[0] - 1] != letter && makeArray[space[1] - 1] == letter) || (makeArray[space[0] - 1] == letter && makeArray[aralik[1] - 1] != letter)) {
      count++;
    }

  }
  console.log(count)

})