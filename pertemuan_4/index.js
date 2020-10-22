/*
1. Function

let a= 8;
let b= 3;
//tidak efisien jika program diulang-ulang!!!
let c= 10;
let d= 5;

let LuasA= a * a;
let LuasB= b * b;
let LuasC= c * c;
let LuasD= d * d;

let total= LuasA + LuasB;
let total= LuasC + LuasD;

console.log(total);
*/

function penjumlahanDuaBujurSangkar (a,b){
    let LuasA= a * a;
    let LuasB= b * b;

    let total= LuasA + LuasB;

    return total;
}
console.log(penjumlahanDuaBujurSangkar(8,3));

/*Refactoring = menghilangkan bagian" yang tidak diperluhkan
cara 1 :
function penjumlahanDuaBujurSangkar (a,b){
    let total= a * a + b * b;

    return total;
}
console.log(penjumlahanDuaBujurSangkar(8,3));
console.log(penjumlahanDuaBujurSangkar(10,5));

cara 2 :
function penjumlahanDuaBujurSangkar (a,b){
    return a * a + b * b;
}
console.log(penjumlahanDuaBujurSangkar(8,3));
console.log(penjumlahanDuaBujurSangkar(10,5));
*/

function tamba(a, b){
    return a + b;
}
function kali(a, b){
    return a * b;
}

console.log(tamba (kali (5,2),kali(10,2))); 

/*function Expression 

const penjumlahanDuaBujurSangkar = function  (a,b){
    return a * a + b * b;
};
console.log(penjumlahanDuaBujurSangkar(8,3));
console.log(penjumlahanDuaBujurSangkar(10,5));

//contoh program 
    //Lingkup Global
const olahraga = 'basketball';
function namaAlet(){
    const noMessi= 10;
    console.log(olahraga); //output : basketball
    if (olahraga === 'basketball'){
        atlet= 'kobe bryant';
        const noKobe= 24;
        console.log(olahraga); //output : basketball
    }
    return atlet;
}
console.log(namaAtlet()); //output: kobe bryant
console.log(olahraga); //output : bosketball
*/

    //Lingkup lokal
    const olahraga = 'basketball';
    function namaAtlet (){
    let atlet= 'Lionel Messi'; //lingkup fungsi
    const noMessi= 10; //lingkup fungsi
        if (olahraga === 'basketball'){
            atlet= 'kobe bryant';
            const noKobe= 24; //lingkup blok
            console.log(noMessi); //output : 10
        }
        console.log(noKobe); //output : Uncaught Reference Error!!!
        return atlet;
    }
    namaAtlet();