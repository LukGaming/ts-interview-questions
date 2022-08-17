class BankAccount {
  constructor(client, number) {
    if (this.constructor === BankAccount) {
      throw new Error("You cannot create an instance of an abstract class");
    }
    this.client = client;
    this.number = number;
    this.balance = 0
  }
  deposit(value){
    this.balance += value
    return this.balance
  }
  withdrawalAmount(){
    throw new Error("withdrawalAmount has to be overriten");
  }
  getBalance(){
    return this.balance
  }
}

class CheckingAccount extends BankAccount{
  constructor(client, number){
    super(client,number)
  }
}
let checkingAccount = new CheckingAccount("Paulo", 235)
console.log(checkingAccount.deposit(10))


