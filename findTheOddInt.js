// doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
// doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
// doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
// doTest([10], 10);
// doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
// doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
// });

const findOdd = (a) => {
    const arr = Array.from(new Set(a))
    let temp = {}
    let result
    arr.forEach(el => temp[el] = a.filter(item => item === el).length)
    for(let elem in temp){
        if (temp[elem] % 2) result = elem
    }
    return +result
}

console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));