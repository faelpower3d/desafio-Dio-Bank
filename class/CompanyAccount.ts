import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
    loan: number
    constructor(name:string, accountNumber:number){
        super(name,accountNumber)
        this.loan=0
    }
    getLoan = (loan:number):void=> {
        this.loan=loan        
        if(this.validadeStatus()){    
            console.log("saldo anterior ",this.getBalance())   
            console.log("valor emprestimo",this.loan)         
            this.setBalance(this.getBalance()+loan)
            console.log("seu novo saldo é ",this.getBalance())                     
        }   
        
    }

    desposit = ():void=>{
        console.log("A empresa Depositou")
    }
    despsit2 = ():number=>{
        return 1
    }
}