//DESTRUKTURISASI ARRAY
//====================
//cara tidak efisien 
let buah = ["mangga", "pisang", "anggur"];
let buah1 = buah[0];
let buah2 = buah[1];
let buah3 = buah[2];

console.log(buah1); //output : mangga
console.log(buah2); //output : pisang
console.log(buah3); //output : anggur
//====================

//2 CONTOH dalam mendeklarasi variabel :
//cara mendeklarasi variabel berupa array
let namaArray = [element1, element2, element3];
//cara melakukan destrukturisasi array
let [variabel1, variabel2, variabel3] = namaArray;
//=====================

let buah = ["mangga", "pisang", "anggur"];
//lakukan DESTRUKTURISASI ARRAY
//program akan lebih singkat
let [buah1, buah2, buah3] = buah;

console.log(buah1); //output : mangga
console.log(buah2); //output : pisang
console.log(buah3); //output : anggur
//======================

//menggunakan Koma untuk melewati element kedua dan keempat
let [namaDepan, , namaBelakang, , buku] = ["Joanne", "K", "Rowling", "pengarang", "Harry Potter"];
console.log(namaDepan); //output : Joanne
console.log(namaBelakang); //output : Rowling
console.log(buku); //output : Harry Potter
//=======================

//menukar dua variabel dengan lebih cepat menggunakan DESTRUKTURISASI 
let a = 10;
let b = 15;

//variabel tambahan sementara
let temp = a;
a = b; //nilai a sekarang adalah 15
b = temp //nilai b sekarang adalah 10

let a = 10;
let b = 15;
[a,b] = [b,a];
//nilai a sekarang adalah 15, dan nilai b adalah 10
//========================

//DESTRUKTURISASI OBJEK
let orang = {
    nama : "Andre",
    umur : 21,
    belumMenikah : true
};

let nama = orang.nama;
let umur = orang.umur;
let belumMenikah = orang.belumMenikah;

console.log(nama); //output : Andre
console.log(umur); //output : 21
console.log(belumMenikah); //output : true
//=========================

//pada JavaScript ES6 cara yang lebih singkat yaitu dengan DESTRUKTURISASI
let { namaProperti1, namaProperti2, namaProperti3 } = namaObjek;
//Contoh

let orang = {
    nama : "Andre",
    umur : 21,
    belumMenikah : true
};
//Destrukturisasi Objek
let { nama, umur, belumMenikah } = orang;

console.log(nama); //output : Andre
console.log(umur); //output : 21
console.log(sudahMenikah); //output : Undefined karena variabel berbeda
//==========================

//Variabel berbeda dari nama Properti : dengan menambahkan titik dua setelah nama properti dan diikuti variabel baru
let {
    namaProperti1 : namaVariabelbaru1,
    namaProperti2 : namavariabelbaru2
} = namaObjek;

//CONTOH :
let orang = {
    nama : "Andre",
    umur : 21,
};
//buat variabel nama berisi nilai dari properti nama pada orang
//buat variabel age berisi nilai dari properti umur pada orang
let { nama : name, umur : age} = orang;
console.log(name); //output : Andre
console.log(age); //output : 21
//===========================

//DESTRUKTURISASI OBJEK BERTINGKAT
//CONTOH :
let murid = {
    kellas : "12a",
    nama : ["Vanny", "Andreas", "Andreo"],
    presentasi : {
        olaraga : "juara 1",
        akademik : "juara 2"
    }
};
let {
    prestasi : { olaraga }
} = murid;

console.log(olaraga); //output : juara 1