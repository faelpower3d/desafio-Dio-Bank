export abstract class DioAccount{ //classe  abstrata não pode ser iniciado
    private readonly name:string
    private readonly accountNumber:number
    private balance:number   
    private status:boolean=true
     private valueWithdraw:number 
     private valueDesposit:number   
     loan:number 

    constructor(name:string,accontNumber:number){
        this.name=name
        this.accountNumber=accontNumber  
        this.balance=10
        this.valueWithdraw=0
        this.valueDesposit=0
        this.loan=0
           
    }       
    
    setWithdraw = (valueWithdraw:number):void=>{
        this.valueWithdraw=valueWithdraw
        console.log("saldo atual",this.getBalance()) 
        console.log("valor saque",this.valueWithdraw)

        if (this.validadeStatus()) {
            this.balance=this.balance-valueWithdraw
            console.log("seu novo saldo é ",this.getBalance())                                      
        }                
    }
    public setBalance = (balance:number):number=>{
        return this.balance=balance   
    }
        
    getName = ():string=>{        
        return this.name
    }

    setDesposit = (valueDesposit:number):void=>{
        this.valueDesposit=valueDesposit
        console.log("saldo atual",this.getBalance())
        console.log("valor deposito",this.valueDesposit)
        if(this.validadeStatus()){    
            this.balance=this.balance+valueDesposit
            console.log("seu novo saldo é ",this.getBalance())         
            
        }        
    }    
    getBalance=():number=>{        
        return this.balance
    }    

    validadeStatus=():boolean=>{
        if(this.status){
            return this.status
        }
        
        throw new Error("conta invalida")
    }
}
