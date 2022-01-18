function solution(input, markers) {
    let arr = input.split('\n')
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let indexArray = []
        for (let j = 0; j < markers.length; j++) {
            let index = arr[i].split('').findIndex(el => el === markers[j])
            index !== -1 && indexArray.push(index)
        }
        indexArray.length !== 0 ? newArr.push(arr[i].slice(0, Math.min(...indexArray)).trim()) : newArr.push(arr[i])
    }
    return newArr.join('\n')
};
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]));
