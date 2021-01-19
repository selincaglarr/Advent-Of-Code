const fs = require('fs')

fs.readFile('./inputday1.txt', 'UTF-8', function (err, data) {
    if (err) return console.log(err)
    const valuesArr = data.split("\r\n")
    const lastInput = valuesArr.map(x => Number(x))

    for (let i = 0; i < lastInput.length - 1; i++) {
        for (let j = 1; j < lastInput.length - 1; j++) {
            for (let k = 2; k < lastInput.length - 2; k++) {
                if ((lastInput[i] + lastInput[j] + lastInput[k]) == 2020) {
                    console.log(lastInput[i] * lastInput[j] * lastInput[k])
                    break;
                }


            }

        }

    }

})