finction countPositivesSumNegatives(input) {
    if (input ==null || input=='') {
      return []}
    let count = 0
    let sum = 0
    for (let i = 0; i < input.length;i++) {
      if (input[i]>0) {
        count++
        } else if (input[i]<0) {
        sum+= input[i]
        }
    }
  }