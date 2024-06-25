{
    type Vehicle = {
        bike : string;
        car : string;
        ship : string;
    }
    type Owner = 'bike' | 'car' | 'ship';
    type Owner2 = keyof Vehicle;
    
    const getPropertyValue =<X,Y extends keyof X> (obj:X,key:Y) =>{
        return obj[key];
    }

    const user = {
        name : 'efti',
        age : 20,
        address: 'J blk'
    }
    const car ={
        brand : 'toyota',
        year : 3030
    }

    const result1 = getPropertyValue(user,'name')
    console.log(result1)
}