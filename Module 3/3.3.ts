type AlphaNumeric = number | string;

const add = (param1:AlphaNumeric,param2:AlphaNumeric): AlphaNumeric =>{
    if ( typeof param1 === 'number' && typeof param2 === 'number'){
        return param1+param2
    }
    else {
        return param1.toString() + param2.toString()
    }
}

// console.log(add('4',5))

type NormalUser = {
    name:string
}
type AdminUser = {
    name:string;
    role:'admin'
}

const getUser = (user : NormalUser | AdminUser)=>{
    if ('role' in user ){
        console.log('normal user')
    }
}
