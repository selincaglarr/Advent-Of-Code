const fs = require('fs')

fs.readFile('./inputday2.txt', 'UTF-8', function (err, data) {
  if (err) return console.log(err)
  const passwords = data.split("\r\n")
  var count = 0
  for (let i = 0; i <= passwords.length - 1; i++) {

    let splitThree = passwords[i].split(' ')
    let space = splitThree[0].split('-').map(x => Number(x))
    let secondSpace = splitThree[1].split(':')
    let letter = secondSpace[0]
    let howManyLetters = splitThree[2].split('')
    let length = howManyLetters.filter(x => x == letter).length
    if (length >= space[0] && length <= space[1]) {
      count++;
    }


  }
  console.log(count)

})