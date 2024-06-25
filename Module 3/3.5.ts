{
    //access modifiers
    class BankAccount{
        public readonly id:number;
        public name:string;
        private _balance: number

        constructor(id:number,name:string,balance:number){
            this.id= id;
            this.name= name;
            this._balance= balance
        }

        addDeposit(amount:number){
            this._balance = this._balance + amount
        }

        get balance(){
            return this._balance
        }
        set deposit(amount : number){
            this._balance= this._balance+amount
            return;
        }
    }


    class StundentBankAccount extends BankAccount{

    }
    const accOne = new BankAccount(444,'manik mia',5000)
    accOne.deposit = 300
    console.log(accOne.balance)
    
}