class Parent {
    name: string;
    age: number;
    address: string;
    constructor(name:string,age:number,address:string){
        this.name= name;
        this.age = age;
        this.address= address;
    }
    getSleep(numOfHour:number){
        console.log(`${this.name} will sleep for ${numOfHour}`)
    }
}

class Student extends Parent{
    constructor(name:string,age:number,address:string){
        super(name,age,address)
    }
}

class Teacher extends Parent{
    designation : string;
    constructor(name:string,age:number,address:string,designation:string){
        super(name,age,address);
        this.designation = designation
    }
    takeClass(numOfClass:number){
        console.log(`${this.name} will take ${numOfClass} classes`)
    }
}

const teacher = new Teacher('David J Malan',40,'Harverd','Professor')
teacher.takeClass(10)