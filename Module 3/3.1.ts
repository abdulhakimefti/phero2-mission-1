{
    class Animal {
        constructor(public name:string,public species : string, public sound : string){}
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal("Germna Shephard","dog","Ghew Ghew")
    dog.makeSound()
}   
