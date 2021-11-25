function positiveSum(arr) {
    let c = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            c += arr[i]
        }
    }
    return c
}