function isPowerOfTwo(n) {
    if (n == 1) return true
    while (n > 2) {
        n /= 2
    }
    return n == 2 ? true : false
}