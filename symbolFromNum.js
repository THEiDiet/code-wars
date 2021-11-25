function correct(str) {
    str = str.split('')
    debugger
    str = str.map(item => {
            if (item == 5) {
                return item = 'S'
            } else if (item == 0) {
                return item = 'O'
            } else if (item == 1) {
                return item = 'I'
            } else if(item =='O'){
                return item = ' '
            } else return item
        })
        return str.join('')
}
console.log(correct('IF-RUDYARDOKIPLING'))