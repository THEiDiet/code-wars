String.prototype.toJadenCase = () => {
    let arr = this.split(' '),
        secondArr = []
    return arr.map(item => {
        secondArr = item.split('')
        secondArr[0] = secondArr[0].toUpperCase()
        return secondArr.join('')
    }).join(' ')
}

function SeriesSum(n) {
    let sum = 1;
    if (n == 1) {
        return '1.00'
    } else if (n == 0) {
        return '0.00'
    } else {
        for (let i = 2; i <= n; i++) {
            sum += 1 / (1 + (i - 1) * 3)
        }
    }
    return sum.toFixed(2)
}
// нормальное решение
function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
        s += 1 / (1 + i * 3)
    }

    return s.toFixed(2)
}

function calculateYears(principal, interest, tax, desired) {
    debugger
    let years = 0
    if(principal == desired) {
        return years
    }
    while (principal < desired) {
        principal = principal * interest * (1 -tax) + principal
        years++
    } 
return years
}