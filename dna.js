function DNAtoRNA(dna) {
    dna = dna.split('')
    for (let i =0;i<dna.length;i++) {
        if (dna[i] == 'T') {
            dna[i]= 'U'
        }
    }
    return dna.join('')
}
DNAtoRNA('TTTT')