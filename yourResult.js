function betterThanAverage(cl, y) {
    cl.push(y)
    let summ = 0
    for (let i = 0; i < cl.length; i++) {
        summ += cl[i]
    }
    return summ / cl.length < y ? true : false
}