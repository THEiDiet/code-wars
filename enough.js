function enough(cap, on, wait) {
    let a = cap - on - wait
    return a > 0 ? 0 : Math.abs(a)
}