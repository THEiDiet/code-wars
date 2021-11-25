function findDifference(a, b) {
    return Math.abs(a.reduce((c, d) => c * d) - b.reduce((c, d) => c * d))
}