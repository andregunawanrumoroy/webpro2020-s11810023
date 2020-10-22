/* Desturisasi Array */
//---------------------------

//Memecah item atau propery pada array atau object ke dalama variable yang 
//berbeda

//1. Array
// const colors = ["merah", "kuning", "hijau"];

//let satu = colors[0];
//let satu = colors[1];
//let satu = colors[2];

//let [satu,dua,tiga] = colors;
//console.log[satu,dua,tiga];

// let [satu, ,tiga] = colors;
// console.log(satu,tigas);

//2. Object

// const user = {
//   name: "John",
//   gender: "male",
//   age: 33,
// };

//let name = user.name
//let name = user.gender
//let name = user.age

// let {name, gender, age } = user;
// console.log(name,gender,age);

// let {name, gender,age,born="Manado"} = user;
// console.log(name,gender,age,born);

// let{name,age} = user;
// console.log(name, age);

// let {name: nama, age: umur} = user;
// console.log(name,umur);

// const display = ({ name, age }) => {
//   console.log('Nama saya adalah ${name}. Umur saya adalah ${age}');
// };

// display(user);

// 3. Array Object

// const users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Jane"},
//   {id: 3, name: "Bob"},
// ];

//let [user1,user2,user3]= users;
//console.log(user1,user2,user3);

// let [{id: idUser1, name: nameUser1},
//      {id: idUser2, name: nameUser2},
//      {id: idUser3, name: nameUser3}, 
//     ] = users;
//     console.log(idUser1, nameUser1);

const colors = ["merah", "kuning", "hijau", "biru"];
let[satu, ...lainnya] = colors;

console.log(satu);
console.log(lainnya);