//===========Async JavaScript===============


//const second = () => {
//    const num = 10;
//    setTimeout(() => {
//        console.log('Second');
//        console.log(num);
//        setTimeout(() => {
//            console.log('Async 2');
//            setTimeout(() => {
//                console.log('Async 3');
//            }, 2000)
//       }, 2000)
//    }, 2000, num)
//}

//const first = () => {
//    console.log('first');
//    second();
//    console.log('The End');
//}

//first();

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (error){
                reject('Error!!!');
            }else {
                resolve(10);
            }
        }, 2000);
    })
}

const getName = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`ID: ${id} Success`)
        }, 2000)
    })
}

//getData()
//    .then( id => getName(id))
//    .then(success => console.log(success))
//    .catch( error => console.log('Error'))

// async function getNameByeId {

//}

const getNameById = async () => {
    let id, success;
    try{
    id = await getData();
    success = await getName(id);
    console.log(success);
    } catch (error){
        console.log(error)
    }
    return success;
}

getNameById().then(result => console.log(result));
