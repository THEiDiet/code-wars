function validParentheses(parens) {
    parens = parens.split('')
    let arr = {'(': [], ')':[]}
    let res = true
    parens.forEach((el,index) => el === '(' ? arr['('].push(index) : arr[')'].push(index))
    if (arr['('].length !== arr[')'].length) return false
    for (let i = 0; i < arr['('].length; i++) {
        if (arr['('][i] > arr[')'][i]) {
            return res = false
            }
    }
    return res
}

console.log(validParentheses('())((())'))

//  it(`values: "("`, () => assert.strictEqual(validParentheses( "(" ), false));
//   it(`values: ")"`, () => assert.strictEqual( validParentheses( ")" ), false));
//   it(`values: ""`, () => assert.strictEqual(validParentheses( "" ), true));
//   it(`values: "()"`, () => assert.strictEqual(validParentheses( "()" ), true));
//   it(`values: "())"`, () => assert.strictEqual(validParentheses( "())" ), false));