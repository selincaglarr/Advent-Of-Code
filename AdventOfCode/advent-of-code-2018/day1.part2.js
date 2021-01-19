function element(arr) {
    let arr2 = [];
    let sum = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        sum = sum + arr[i];

        if (arr2.includes(sum) && sum != 1) {
            return console.log(sum);
        }
        else
            arr2.push(sum);
    }
};
element([1, -1, +3, +3, +4, -2, -4, -6, +3, +8, +5, -6, +7, +7, -2, -7, -4]);
