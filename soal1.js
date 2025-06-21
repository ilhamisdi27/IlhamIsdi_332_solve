/** Question 1 */
// Jumlahkan semua angka genap dalam array berikut
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let resultOne

/** Answer 1 */
console.log ("Answer 1")
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne = 0;
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 0) {
         resultOne = numbers[index] + resultOne;
    }
}
console.log ("Hasil penjumlahan semua angka genap adalah ", resultOne)
console.log ("")


/** Question 2 */
// const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
// Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
// let resultTwo

/** Answer 2 */
console.log ("Answer 2")
const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
resultTwo = 0;
for (let index = 0; index < numbersTwo.length; index++) {
    if (numbersTwo[index] % 2 !== 0) {
        resultTwo = numbersTwo[index] + resultTwo;
        console.log ("Angka Ganjil =", numbersTwo[index])
    }
}
console.log ("Hasil penjumlahan semua angka ganjil adalah ", resultTwo)
console.log ("")


/** Question 3 */
// Ubah semua huruf kecil dalam array menjadi huruf besar
// let students = ["Tito", "arY", "Bostang"]
// let resultThree

/** Answer 3 */
console.log ("Answer 3")
let students = ["Tito", "arY", "Bostang"]
let resultThree =[]

for (let i = 0; i < students.length; i++) {
    let name = students[i];
    resultThree.push(name.toUpperCase())
}
console.log ("Array student dalam huruf besar :", resultThree)
console.log ("")


/** Question 4 */
// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
// const people = [
//     { name: 'Andi', age: 17 },
//     { name: 'Tito Alexsta', age: 20 },
//     { name: 'Bostang', age: 22 },
//     { name: 'Cici', age: 17 }
// ];

/** Answer 4 */
console.log ("Answer 4")
const people = [
    { name: 'Andi', age: 17 },
    { name: 'Tito Alexsta', age: 20 },
    { name: 'Bostang', age: 22 },
    { name: 'Cici', age: 17 }
];

let age18plus = [];
for (let index = 0; index < people.length; index++) {
    if (people[index].age > 18) {
        age18plus.push(people[index].name);
    }
}
console.log ("Orang2 yang umurnya diatas 18 adalah", age18plus)

let name5plus = [];
for (let index = 0; index < people.length; index++) {
    if (people[index].name.length > 5) {
        name5plus.push(people[index].name);
    }
}
console.log ("Orang2 panjang namanya lebih dari 5 adalah", name5plus)
console.log ("")


/** Question 5 */
// Hitung total harga semua barang
// const items = [
//     { name: 'Book', price: 10000 },
//     { name: 'Pen', price: 5000 },
//     { name: 'Pencil', price: 3000 },
// ];

/** Answer 5 */
console.log ("Answer 5")
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];
let resultFive = 0;
for (index = 0; index < items.length; index++) {
    resultFive = items[index].price + resultFive;
}
console.log ("Harga total semua barang adalah", resultFive, "(Delapan Belas Ribu)")
console.log ("")


/** Question 6 */
//Ambil hanya angka unik dari array (hapus duplikat).
// const numbersThree = [1, 2, 2, 3, 4, 4, 5];

/** Answer 6 */
console.log ("Answer 6")
const numbersThree = [1, 2, 2, 3, 4, 4, 5];

let resultSix = [];
let i = 0;
while (i < numbersThree.length) {
    if (resultSix.includes(numbersThree[i]) !== true) {
        resultSix.push(numbersThree[i]);
    }
    i++;
}
console.log ("Angka unik dari array-nya adalah", resultSix)
console.log ("")


/** Question 7 */
// Ambil nama produk dengan harga tertinggi
// const products = [
//     { name: 'Laptop', price: 15000000 },
//     { name: 'Phone', price: 8000000 },
//     { name: 'Monitor', price: 3000000 },
// ];

/** Answer 7 */
console.log ("Answer 7")
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];
let resultSeven = 0;
i = 0;
while (i < products.length) {
    if (typeof resultSeven !== "number" || products[i].price > resultSeven) {
        resultSeven = products[i].price;
        result = products[i].name;
    }
    i++;
}
console.log ("Produk dengan harga tertinggi adalah", resultSeven, "yaitu", result)
console.log ("")


/** Question 8 */
// Buat kalimat dari array kata.
// const words = ['Belajar', 'array', 'itu', 'menyenangkan'];

/** Answer 8 */
console.log ("Answer 8")
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];
let resultEight = [];
for (index = 0; index < words.length; index++) {
    resultEight = resultEight + " " + words[index]
}
console.log ("Setelah digabungkan menjadi","'",resultEight,"'")
console.log ("")


/** Question 9 */
// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
// const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];

/** Answer 9 */
console.log ("Answer 9")
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];
let resultNine = [];
for (i = 0; i < names.length; i++) {
    const lowerNames = names[i].toLocaleLowerCase();

    if (lowerNames.includes("a") && resultNine.length < 3) {
        resultNine.push(names[i]);
    }
}
console.log (`3 nama awal yang memiliki huruf a adalah ${resultNine}`)
console.log ("")


/** Question 10 */
// Hitung total karakter dari semua nama dalam array.
// const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter

/** Answer 10 */
console.log ("Answer 10")
const namesTwo = ['Ani', 'Budi', 'Citra'];
let resultTen = [];
for (i = 0; i < namesTwo.length; i++) {
    resultTen = resultTen + namesTwo[i];
}
lenTen = resultTen.length
console.log ("Jumlah karakter dari", resultTen, "adalah", lenTen)
console.log ("")


/** Question 11 */
// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
// const peopleTwo = [
//     { name: 'Tono', age: 22 },
//     { name: 'Tini', age: 19 },
//     { name: 'Tara', age: 25 },
// ];

/** Answer 11 */
console.log ("Answer 11")
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];
let result11 = [];
peopleTwo.forEach((person) => {
    if (person.age > 21) {
        result11.push(`${person.name} (${person.age})`)
    }
})
console.log ("Array string yang memiliki umur > 21 adalah", result11)
console.log ("")
