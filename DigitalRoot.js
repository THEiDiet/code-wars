
const digital_root = (n) => {
    while(n.toString().length > 1) {
         n = n.toString().split('').reduce((acc,el) => +acc + +el)
    }
    return n
}
console.log(digital_root(456));