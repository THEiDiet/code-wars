function bmi(w, h) {
    let bm = w / (h * h)
    return bm <= 18.5 ? 'Underweight' : bm <= 25 ? 'Normal' : bm <= 30 ? 'Overweight' : 'Obese'
}