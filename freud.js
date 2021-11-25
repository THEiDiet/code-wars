function toFreud(s) {
    if (s != '') {
        s = s.split(' ')
        const arr = []
        for (let i = 0; i < s.length; i++) {
            arr.push('sex')
        }
        return arr.join(' ')
    } else return s
}