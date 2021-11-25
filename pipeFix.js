function pipeFix(arr) {
    debugger
    let first = arr[0]
    let last = arr[arr.length - 1]
    const newarr = []
    for (let i = first; i <= last; i++) {
        newarr.push(i)
    }
    return newarr
}