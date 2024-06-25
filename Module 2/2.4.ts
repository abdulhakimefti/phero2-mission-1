interface Developer<T,X> {
    name:string;
    computer : {
        brand:string;
        model: string;
        releaseYear: number;
    }
    smartWatch:T;
    bike?:X;

}
interface SmartWatch {
    brand : string;
    model: string;
    price: number;
    heartTrack: boolean;
}
type Bike ={
    brand : String;
    cc: number;
}
const developer:Developer<SmartWatch,Bike>={
    name:"Efti",
    computer: {
        brand: "HP",
        model : "xkd34",
        releaseYear: 2019
    },
    smartWatch:{
        brand : 'Apple',
        model: 'M2',
        price: 200,
        heartTrack: true
    },
    bike: {
        brand:"Yamaha",
        cc: 360
    }
}