import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount{
    private valueDeposit1: number;
    constructor(name:string,accountNumber:number,valueDeposit1:number){
        super(name,accountNumber)
        this.valueDeposit1=valueDeposit1
    }


    setDesposit = (valueDesposit1:number):void=>{
        this.valueDeposit1=valueDesposit1
        console.log("saldo atual",this.getBalance())
        console.log("valor deposito",this.valueDeposit1)
        if(this.validadeStatus()){    
            this.setBalance(this.getBalance()+valueDesposit1+10)
            console.log("seu novo saldo é ",this.getBalance())         
        }        
    } 
}

