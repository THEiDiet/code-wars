function add(num1, num2) {
    num1 = num1.toString().split('')
    num2 = num2.toString().split('')
    let long
    let arr = []
    num1.length > num2.length ? long = num1.length : long = num2.length
    for (let i = long-1; i>=0;i--){
        let a = num1.pop()
        let b = num2.pop()
        if (a == undefined) {
            a = 0
        } else if (b == undefined) {
            b =0
        }
        arr.push(+a + +b)
    }
    return Number(arr.reverse().join(''))
}