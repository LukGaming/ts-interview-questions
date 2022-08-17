class Dog{
    constructor(name){
        this.name = name
    }
    static eat(){
        console.log("eating...")
        this.drink()
    }
    static drink(){
        console.log("drinking...")
    }
}
Dog.eat()