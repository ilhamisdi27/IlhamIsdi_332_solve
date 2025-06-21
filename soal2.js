/** Question 1
 * Menentukan bilangan ganjil dan genap
 * 
 * Buatlah program untuk menentukan input bilangan apakah ganjil atau genap. Gunakan if-else dan function yang mengembalikan hasil "ganjil"/"genap"
 */

/** Answer 1 */
console.log("Answer 1")
function checkOddEven(angka) {
    let result1 = "";
    if (typeof angka === "number") {
        if (angka % 2 == 0) {
            result1 = "genap"
        } else {
            result1 = "ganjil"
        }
    }else{
        result1 = "invalid input"
    }
    return result1
}
console.log(checkOddEven(5)); // ganjil
console.log(checkOddEven(2)); // genap
console.log(checkOddEven("enam")); // invalid input
console.log("")



/** Question 2
 * Menentukan usia dewasa
 * 
 * Buat sebuah program yang meminta usia seseorang, lalu gunakan if-else untuk menampilkan apakah seseorang tersebut sudah dewasa (>=18 tahun) atau belum. Gunakan if-else dan function yang mengembalikan string
 */

/** Answer 2 */
console.log("Answer 2")
function checkMature(umur) {
    let isDewasa = ""
    if (typeof umur === "number" && umur > 0) {
        if (umur >= 18) {
            isDewasa = "Dewasa"
        } else {
            isDewasa = "Belum dewasa"
        }
    } else {
        isDewasa = "invalid input"
    }
    return isDewasa
}
console.log(checkMature(18)); // Dewasa
console.log(checkMature(17)); // Belum dewasa
console.log(checkMature("enam")); // invalid input
console.log(checkMature(-1)); // invalid input
console.log("")



/** Question 3
 * Menentukan score student
 * 
 * Buat program yang mengubah nilai angka ke dalam nilai huruf (A, B, C, D, E) berdasarkan rentang berikut:
 * 90 - 100: A
 * 80 - 89: B
 * 70 - 79: C
 * 60 - 69: D
 * < 60: E
 * Gunakan if-else dan function yang mengembalikan string
 */

/** Answer 3 */
console.log("Answer 3")
function scoreReport(input) {
    let nilai = "";
    if (typeof input === "number" && input > 0 && input < 101) {
        if (input >= 90) {
            nilai = "A";
        } else if (input >= 80) {
            nilai = "B";
        } else if (input >= 70) {
            nilai = "C";
        } else if (input >= 60) {
            nilai = "D";
        } else {
            nilai = "E";
        }
    } else {
        nilai = "invalid input";
    }
    return nilai;
}
console.log(scoreReport(90)); // A
console.log(scoreReport(89)); // B
console.log(scoreReport(75)); // C
console.log(scoreReport(59)); // E
console.log(scoreReport(101)); // invalid input
console.log(scoreReport(-1)); // invalid input
console.log(scoreReport("sembilan puluh")); // invalid input
console.log("")



/** Question 4
 * Menampilkan Bilangan Ganjil dari 1 sampai 20
 * 
 * Buat program yang menampilkan semua bilangan ganjil dari 1 sampai 20 menggunakan for loop
 */

/** Answer 4 */
console.log("Answer 4")
function loopCheckOddEven(inputNum) {
    if (typeof inputNum === "number") {
        i = 1;
        while (i <= inputNum) {
            if (i % 2 !== 0) {
                console.log(`${i} => Bilangan Ganjil`)
            }
            i++;
        } 
    } else {
        console.log("invalid input")
    }
}
loopCheckOddEven(5)
// 1 => Bilangan Ganjil
// 2 => Bilangan Genap
// 3 => Bilangan Ganjil
// 4 => Bilangan Genap
// 5 => Bilangan Ganjil
loopCheckOddEven("lima") // invalid input
console.log("")



/** Question 5
 * Menghitung Total Jumlah Angka
 * 
 * Buat program yang menjumlahkan semua angka dari 1 sampai dengan 100 menggunakan loop. Gunakan function yang mengirimkan value hasil penjumlahan tersebut
 */

/** Answer 5 */
console.log("Answer 5")
function totalValue(inputNumber) {
    if (typeof inputNumber === "number"){
        let totalNumber = 0
        for (let index = 1; index <=inputNumber;  index++){
            totalNumber = totalNumber + index
        }
        console.log(totalNumber)
    }else {
        console.log("Invalid Number")
    }

}
console.log(totalValue(100)); // 5050
console.log(totalValue("empat")); // invalid input
console.log("")



/** Question 6
 * Menghitung huruf vokal
 * 
 * Buat program yang menerima sebuah string, lalu hitung berapa banyak huruf vokal (a, e, i, o, u) di dalam string tersebut. Gunakan function untuk mengembalikan value total jumlah huruf vocal
 */

/** Answer 6 */
console.log("Answer 6")
let vocals = ["a", "i", "u", "e", "o"];
function checkVowels(input) {
    let countVocal = 0;
    if (typeof input !== "string") {
        return "invalid input";
    } else {
        i = 0;
        while (i < input.length) {
            let char = input[i].toLowerCase();

            if (vocals.includes(char)) {
                countVocal++;
            }
            i++;
        }
    }
    return countVocal;
}
console.log(checkVowels("I Love JavaScript")); // 6
console.log(checkVowels("mie ayam")); //4
console.log("")



/** Question 7
 * Cek karakter vokal atau konsonan
 * 
 * Buatlah sebuah fungsi untuk memeriksa apakah sebuah karakter adalah vokal atau konsonan
 * 
 * Langkah:
 * 1. Buat sebuah fungsi bernama checkVowelConsonant.
 * 2. Fungsi tersebut harus menerima satu parameter, contoh nama parameternya "char".
 * 3. Gunakan pernyataan if, else if, dan else untuk memeriksa apakah char adalah vokal atau konsonan.
 * 4. Anggap bahwa input selalu berupa SATU KARAKTER HURUF.
 * 5. RETURN string "Vokal" atau "Konsonan" sesuai dengan nilai char.
 */

/** Answer 7 */
console.log("Answer 7")
function checkVowelConsonant(char) {
    if (typeof char !== "string") {
        return "invalid input";
    } else {
        for (let i = 0; i < char.length; i++){
            const charI = char[i].toLowerCase();
            if (vocals.includes(charI)) {
                return "Vokal";
            } else {
                return "Konsonan";
            }
        }
    }
}
console.log(checkVowelConsonant('A')); // Output: "Vokal"
console.log(checkVowelConsonant('b')); // Output: "Konsonan"
console.log(checkVowelConsonant('a')); // Output: "Vokal"
console.log("")



/** Question 8
 * Menentukan kelayakan Voting
 * 
 * Buatlah sebuah fungsi JavaScript yang memeriksa apakah seseorang memenuhi syarat untuk memberikan suara dalam pemilihan berdasarkan usia.
 * 
 * Langkah:
 * 1. Buat sebuah fungsi bernama canVote.
 * 2. Fungsi tersebut harus menerima satu parameter age.
 * 3. Gunakan pernyataan if dan else untuk memeriksa apakah age lebih besar atau sama dengan 18.
 * 4. RETURN tipe data BOOLEAN, true jika age >= 18, dan false jika tidak.
 */

/** Answer 8 */
console.log("Answer 8")
function canVote(age) {
    if (typeof age === "number" || age > 0) {
        return age >= 18;
    } else {
        return "invalid input"
    }
}
console.log(canVote(20)); // true
console.log(canVote(17)); // false
console.log("")



/** Question 9
 * Menentukan Hari dalam Seminggu
 * 
 * Buatlah sebuah fungsi JavaScript yang menerima angka dan mengembalikan nama hari dalam seminggu.
 * 
 * Langkah:
 * 1. Buat sebuah fungsi bernama getDayName.
 * 2. Fungsi tersebut harus menerima satu parameter dayNumber (1 sampai 7).
 * 3. Gunakan pernyataan if, else if, dan else untuk mengembalikan nama hari dalam seminggu:
 *      a. 1: "Senin"
 *      b. 2: "Selasa"
 *      c. 3: "Rabu"
 *      d. 4: "Kamis"
 *      e. 5: "Jumat"
 *      f. 6: "Sabtu"
 *      g. 7: "Minggu"
 * 4. RETURN "Nomor hari tidak valid" jika dayNumber tidak berada dalam rentang 1 sampai 7.
 */

/** Answer 9 */
console.log("Answer 9")
const daysofWeek = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
function getDayName(dayNumber) {
    if (typeof dayNumber === "number" && dayNumber > 0 && dayNumber < 8) {
        console.log (`Output: ${daysofWeek[dayNumber - 1]}`);
    } else {
        console.log ("Output: Nomor hari tidak valid")
    }
}
console.log(getDayName(1)); // Output: "Senin"
console.log(getDayName(5)); // Output: "Jumat"
console.log(getDayName(8)); // Output: "Nomor hari tidak valid"
console.log("")



/** Question 10
 * Membalikkan Array
 * 
 * Buatlah sebuah fungsi JavaScript yang membalikkan urutan elemen dalam sebuah array menggunakan loop.
 * 
 * Langkah: 
 * 1. Buat sebuah fungsi bernama reverseArray.
 * 2. Fungsi tersebut harus menerima satu parameter berupa array arr.
 * 3. Boleh menggunakan built in function, setelah itu dicoba mengunakan loop untuk membalikkan urutan elemen dalam array tersebut.
 * 4. RETURN array yang telah dibalik.
 */

/** Answer 10 */
console.log("Answer 10")
function reverseArray(arr) {
    
}

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray(['a', 'b', 'c'])); // Output: ['c', 'b', 'a']
console.log("")



/** Question 11
 * Buat function untuk mengecek apakah input tersebut palindrome, return true jika palindrome, dan jika tidak palindrome maka return false
 * 
 */

/** Answer 11 */
console.log("Answer 11")
const isPalindrome = (inputUser) => {

}

console.log(isPalindrome("kasur rusak")); // true
console.log(isPalindrome("kodok")); // true
console.log(isPalindrome("makan malam")); // false
console.log("")