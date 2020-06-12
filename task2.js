'use strict'
let database;
function name(c){
    if(c.users.userOne.name.length>3 ){
        console.log('YES');
    }
}
function password(c){
    if(c.users.userOne.password.length>6){
        console.log('yesn');
    }
}
function check(c){
    if(c.users.userOne.name=='MrMemnydoctor'){
        if(c.users.userOne.password=='dibilkakoito'){
            console.log('YESn');
        }
    }
}
database ={
    users:{
        userOne:{
            name:'MrMemnydoctor',
            password:'dibilkakoito',
            age:'12'
        }
    }
}
name(database);
password(database);
check(database);