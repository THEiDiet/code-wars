function specialNumber(n){
    //your code here
    let reg = new RegExp('^[0-5]+$')
    return reg.test(n) ? "Special!!" :  "NOT!!"
}