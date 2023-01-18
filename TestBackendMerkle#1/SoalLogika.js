function Aritmatika (nilai_awal, selisih, jumlah){
    let hasil = nilai_awal + (jumlah - 1) * selisih
    let data = []
    
    while (nilai_awal <= hasil) {
        data.push(nilai_awal)
        nilai_awal += selisih
    }

    return data.toString()
}

console.log(Aritmatika(1, 1, 5))
console.log(Aritmatika(2, 2, 5))
console.log(Aritmatika(3, 3, 5))
console.log(Aritmatika(4, 4, 5))
console.log(Aritmatika(5, 5, 5))