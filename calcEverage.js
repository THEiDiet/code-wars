function find_average(arr) {
    if (arr.length > 0) {
        let c = 0
        for (let i = 0; i < arr.length; i++) {
            c += arr[i]
        }
        return c / arr.length;
    } else return 0
}