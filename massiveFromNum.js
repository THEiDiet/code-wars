function digitize(n) {
    let arr = n.toString().split('').reverse()
    for (let i in arr) {
        arr[i] = +arr[i]
    }
    return arr
}