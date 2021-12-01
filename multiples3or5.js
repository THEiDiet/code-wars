function solution(n){
    let sum = 0
    if (n<=0) return 0
    for (let i = 1; i < n; i++){
        if (i%3 ===0 || i%5 === 0){
            sum += i
        }
    }
    return sum
}