//1. menggunakan if, else if dan else

//SANGAT MEMUASKAN jika nilai di atas 80
//MEMUASKAN jika nilai berada di antara 60 hingga 80, dan
//JANGAN MENYERAH, COBA LAGI!" jika nilai di bawah 60
//let nilaiAndi = 95;

//if (nilaiAndi > 80) {
//  console.log("SANGAT MEMUASKAN");
//} else if (nilaiAndi >= 60 && nilaiAndi <= 80) {
//  console.log("MEMUASKAN");
//} else {
//  console.log("JANGAN MENYERAH, COBA LAGI!");
//}
// Output: SANGAT MEMUASKAN

//contoh sendiri
let umurAndre = 21;

if (umurAndre >= 45) {
    console.log("Lansia");
}
else if (umurAndre >= 26 && umur <= 44) {
    console.log("Dewasa");
}
else if (umurAndre >= 12 && umur <= 25) {
    console.log("Remaja");
}
else if (umurAndre >= 11 && umur <= 11) {
    console.log("Kanak-kanak");
}
//Output : Remaja

//=================================================
//2. menggunakan Switch dan case
//contoh ke-1

//let seragamSekolah;
//let hari = "senin";

//switch (hari) {
//  case "senin":
//    seragamSekolah = "kemeja putih bawahan merah";
//    break;
//  case "selasa":
//    seragamSekolah = "kemeja hijau bawahan hitam";
//    break;
//  case "rabu":
//    seragamSekolah = "kemeja putih bawahan putih";
//    break;
//  case "kamis":
//    seragamSekolah = "kemeja batik merah bawahan hitam";
//    break;
//  case "jumat":
//    seragamSekolah = "baju pramuka";
//    break;
//  default:
//    seragamSekolah = "baju bebas";
//}

//console.log(seragamSekolah); // Output: kemeja putih bawahan merah

//contoh sendiri
let rasaBuah;
let jenisBuah = "Duku";

switch (jenisBuah){
    case "Mangga":
        rasaBuah = "Asam_manis";
        break;
    case "jeruk":
        rasaBuah = "Asam";
        break;
    case "Duku":
        rasaBuah = "Manis";
        break;
}

console.log(rasaBuah); //Output : Manis

//===============================================
//contoh ke-2
//let seragamSekolah;
//let hari = "senin";

//switch (hari) {
//  case "senin":
//  case "selasa":
//  case "rabu":
//  case "kamis":
//    seragamSekolah = "kemeja putih bawahan merah";
//    break;
//  case "jumat":
//    seragamSekolah = "baju pramuka";
//    break;
//  default:
//    seragamSekolah = "baju bebas";
//}

//console.log(seragamSekolah); // Output: kemeja putih bawahan merah

//================================================
//bagian a --> jika tidak menggunakan perulangan
/*
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

//bagian b --> jika menggunakan perulangan for
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

Output a dan b sama!!!
1
2
3
4
5
6
7
8
9
10
*/

//================================================
//for/In Loop

//const buku = {
//    judul: "Harry Potter The Philosopher's Stone",
//    pengarang: "J. K. Rowling",
//    tahun: 1997;
//};
//for (x in buku) {
//    console.log(x, ':', buku[x]);
//}

/*output :
judul : Harry Potter and The Philosopher's Stone
pengarang : J. K. Rowling
tahun : 1997
*/

//================================================
//For/Of Loop

//const buku = ["Game of Thrones: A Song of Ice and Fire",  
//   "Harry Potter and The Philosopher's Stone", 
//   "Lord of The Rings: The Fellowship of The Ring"
//];

//for (x of buku) {
//  console.log(x);
//}

/*
Output:
Game of Thrones: A Song of Ice and Fire
Harry Potter and The Philosopher's Stone
Lord of The Rings: The Fellowship of The Ring
*/

//=================================================
//While Loop

//let i = 1;

//while (i <= 10) {
//  console.log(i);
//  i++;
//}

/*
Output:
1
2
3
4
5
6
7
8
9
10
*/

//===================================================
//Do While Loop

//let i = 1;

//do {
//  console.log(i);
//  i++;
//} while (i <= 10);

/*
Output:
1
2
3
4
5
6
7
8
9
10
*/