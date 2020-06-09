'use strict'
let database;
database ={
    users:{
        userOne:{
            name:'MrMemnydoctor',
            password:'dibilkakoito',
            age:'12'
        },
        userTwo:{
            name:'Mr.Smith',
            password:'teatea',
            age:'58',
        },
        userThree:{
            name:'KotickShomtick',
            password:'Instagramforever',
            age:'20',
        }
    }
}
let difference = 46;
console.log(`Count users: ${database.users}`);
console.log(`Name user one is: ${database.users.userOne.name}`);
console.log(`Name user two is: ${database.users.userTwo.name}`);
console.log(`Name user three is :${database.users.userThree.name}`);
console.log(`Age user one is: ${database.users.userOne.age}`);
console.log(`Age user two is: ${database.users.userTwo.age}`);
console.log(`Age user three is : ${database.users.userThree.age}`);
console.log(`Difference between user one and user two is : ${difference}`);