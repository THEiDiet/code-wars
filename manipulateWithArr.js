function array(arr) {
    arr = arr.split(',')
    if (arr.length <= 2) {
        return null
    } else {
        arr.shift()
        arr.pop()
        return arr.join(' ')
    }
}