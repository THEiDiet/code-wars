function pigIt(str){
    return str.split(' ').map(a => {
        let b = a
        return a.match(/\w/) ? b.slice(1) + a.slice(0, 1) + 'ay' : a
    }).join(' ')
}

console.log(pigIt('This is my string'));
