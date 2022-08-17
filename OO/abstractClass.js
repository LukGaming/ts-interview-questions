 class Animal{
    construct(name){
        if(this.construct === Animal){
            throw new Error("Animal is an abstract class")
        }
        this.name = name
    }
    eat(){
        console.log(`the animal: ${this.name} is eating`)
    }
}
class Cat extends Animal{
    constructor(nome){
        super(nome)
    }
    showName(){
        console.log(this.name)
    }
}
let cat = new Cat("Garfield")
cat.eat()
let animal = new Animal()
