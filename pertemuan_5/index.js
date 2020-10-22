/*
    //1. Array

//Deklarasi Arrya menggunakan tanda []
let angka = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(angka);
let buah = ["mangga","apel","jeruk"];
console.log(buah);

let arr = ["text", 1, true];
console.log(arr);

let myFunc = function (){ //selain bisa menyimpan elemen yang berbeda tipe data
    return "Hello Array"; //bisa juga menyimpan function yang disebut dengan method
};
let arr2 = ['text', 1, true, myFunc(), [1, 2, 3, 4, 5]];
//mengakses lement dalam array
console.log(arr2[2]);
console.log(arr2[3]);
console.log(arr2[4][2]);

console.log(typeof arr2);
console.log(arr2.length);

//deklarasi menggunakan kata kunci New
let buah2 =["Salak","Jambu","melon"];
console.log(buah2);
*/

//cara memanipulasi Array
//1.menambah isi Array
let mhs = [];
mhs[0] = "Jhon";
mhs[1] = "Andre";
mhs[2] = "Surry";
mhs[3] = "petter";

console.log(mhs);

/*
//2.mengubah isi Array
mhs[1] = "Donny";
console.log(mhs);

//3.menghapus isi Array
mhs[2] = undefined;
console.log(mhs);

//4.menampilkan isi Array
let mhs = ["Jhon", "bob", "Jane", "Riski", "Mayra"];

for (let i = 0; i < mhs.length; i++) { 
    console.log("Mahasiswa ke-" + (i + 1) "adalah" + mhs[i];
}
*/

//Method dalam Array
//1.length
//2.toString
//let mhs = ["Jhon", "bob", "Jane", "Riski"];
//console.log(mhs.toString()):
//3.join
//console.log(mhs.join(" - "));

//4.push, pop, unshift, shift
//mhs.push("mayrra");
//mhs.push("stenly");
//console.log(mhs.join(" - "));
//mhs.pop();
//mhs.pop();
//console.log(mhs.join(" - "));

//mhs.unshift("stenly");
//mhs.unshift("stenly");
//console.log(mhs.join(" - "));
//mhs.shift();
//mhs.shift();
//console.log(mhs.join(" - "));

//5.concat (menggabungkan dua Array atau lebih)
//let buah = ["Mangga", "Apel", "Anggur"];
//let sayur = ["Kangkung", "Bayam", "Buncis"];
//let biji = ["kacang_tanah", "kedelai","kacang_polong"];
//let makanan = buah.concat(sayur,biji);
//console.log(makanan);

//6.Splice dan Slice
//Splice (untuk menambah, menghapus, mengganti element dalam Array)
//let buah = ["pisang","mangga","apel","jeruk"]; //menambah melon ditengah
//buah.splice(2, 0, "melon", "semangka"); //jika element(2) maka apel dan jeruk akan dihapus
//console.log(buah.join(" - "));

//Slice (untuk memotong)
//misalkan pisang dan mangga akan diambil dan akan disimpan dalam array yang baru
//let buah2 = buah.slice(0, 2);
//console.log(buah2.join(" - "));

//7.forEach dan map
//forEach
//let angka = [1,2, 3, 4, 5, 6, 7, 8];

/*let tampilAngka = function(el){
    console.log(el)
}
angka.forEach(tampilAngka); // menggunakan Ekspresion
*/
/*
angka.forEach(function (el) {
    console.log(el);
});
*/

/*
//map
let angka2 = angka.map(function(el){
    return el;
});

console.log(angka2);
*/

//8.sort (mengurutkan)
//let angka = [1, 2, 5, 3, 7, 8];
//let mhs = ["Jhon", "bob", "erick", "andre"]
//mhs.sort();
//console.log(mhs);
//angka.sort(function (a, b){
//    return b - a;
//});
//console.log(angka);


/*
//filter
let angka2 = [1, 2, 5, 3, 7, 8];
angka.filter(function(el){
    return el> 5;
})
console.log(angka2);
*/

//Refrensi (w3schools.com dan mdn javaScript) tentang method array