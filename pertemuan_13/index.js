//REST AND SPREAD OPERATOR

// REST PARAMETER 
//Old way
const hitung = (a, b, c, d, e) =>{
    const angka = [a, b, c, d, e]
    let total = 0
    for(let i = 0;i<5;i++){
        total = total + angka[i]
    }
    return total
}
console.log(hitung(1, 2, 3, 4, 5, 6, 7))

//New way
const count1 = (...number) =>{
    console.log(number)
    let total = 0
    number.forEach((el) =>{
        total = total + el
    })
    return total
}
console.log(count1(1, 2, 3, 4, 5, 6, 7))


//rest parameter
// Harus berada di paling terakhir
const count2 = (par1, par2, ...pars) =>{
    console.log(par1)
    console.log(par2)
    console.log(pars)
    let total = 0
    pars.forEach((el) =>{
        total = total + el
    })
    return total
}
console.log(count2(1, 2, 3, 4, 5, 6, 7))


//SPREAD OPERATOR
console.log("---Spread Operator---")

// 1. Duplicate an array
const number1 = [1, 2, 3, 4, 5]
const number2 = [...number1]
number1[0] = 10
console.log(number1)
console.log(number2)

// 2. Merge an array
const numberA = [1, 2, 3, 4, 5]
const numberB = [6, 7, 8, 9, 10]
const numberC = [12, 13]

const mergeAll = [...numberA, ...numberB, 11, ...numberC]
console.log(mergeAll)

// 3. Fill Object
let orang = {
    nama: "John",
    umur: 20,
}
orang = {...orang, pekerjaan: "Guru", pendidikan: "S2"}
console.log(orang)

// 4. Merge Object
const obj1 = {a:1, b:2}
const obj2 = {c:3, d:4}
const mergeObj = {...obj1, ...obj2}
console.log(mergeObj)