//const mahasiswa1 = ["John", "Doe", 31, true];
//1. Object Literals
const mhs1 = {
    namaDepan: "John",
    namaBelakang: "Doe",
    umur: 31,
    sudahLulus: true,
    alamat: {
        jalan: "Jln. Arnold Mononutu",
        kecamatan: "Airmadidi",
        kabupaten: 'Minahasa Utara',
    },
    IPSemester: [3.05, 3.25, 3.0, 3.4],
    hitungIPK: function()
    {
        // console.log(this.IPSemester);
        let total = 0;
        this.IPSemester.forEach(function(el)
        {
            total = total + el;
        });
        this.IPKumulatif = total /4;
    }
};

delete mhs1.namaBelakang;
console.log(mhs1);

// 2. Kata kunci new
// const mh2 = new Object();
// mhs2.namaDepan = "Jane";
// mhs2.namaBelakang = "Smith";

//mengakses Properti Objek
//1. Dot notation
// console.log(mhs1.umur);
//2.bracket notation
// console.log(mhs1["namaBelakang"]);

// console.log(mhs1.alamat.jalan);
// console.log(mhs1.IPSemester[2]);
// console.log(mhs1.hitungIPK());
// mhs1.hitungIPK();
// console.log(mhs1); 