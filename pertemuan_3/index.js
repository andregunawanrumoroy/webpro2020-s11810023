/*
Dasar-dasar pemrograman javascript
1.variabel dan tipe data
2.operator
3.array
4.object
5.fungsi
6.javascript conditional
7.javascript loop
*/

//==================================
//console.log("hello world, from eksternal file");

/*
    1.variabel dan tipe data
    let=masih bisa diganti
    const=tidak bisa diganti
*/

const firstName = "Andre";
let age = 21;
age = 22; 
const isMarried = false;

//konsep perubahan tipe data
//typeof = info variabel

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMarrid);
console.log(age + " " + isMarrid);

const info =
"my name is" + firstName + ",i'm" + age + "years old" + isMarrid;
console.log(typeof info);

console.log("my name is" + firstName + ",i'm" + age + "years old" + isMarrid);

/*penjelasan
function helloWorld; {
    var hello="helloWorld";
    console.log(hello);
}
helloWorld;

//let digunakan didalam Blog bukan di function
//var digunakan didalam function bukan di Blog

for var i = 0; i<10; i++; {
    console.log(i);
}
console.log(i);
*/

/*
 let bilangan = 10;
 console.log(bilangan == "10"); //louse equlity
 console.log(bilangan === "10"); //strict quality, lebih bagus untuk diguanakan
 */