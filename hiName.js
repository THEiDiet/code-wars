function hello(name = '') {
    debugger
    if (name == '') {
        return 'Hello, World!'
    } else {
        name.toLowerCase()
        let a = name.split('')
        let n = a[0].toUpperCase()
        a.shift()
        a.unshift(n)
        a.join('')
        return `Hello, ${a}!`
    }
}
hello('alice')