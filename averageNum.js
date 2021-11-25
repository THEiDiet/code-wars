function getAverage(a) {
    let count = a.reduce((a, b) => a + b)
    return Math.floor(count / a.length)
}