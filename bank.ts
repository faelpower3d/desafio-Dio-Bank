import { CompanyAccount } from './class/CompanyAccount'
import { NewAccount } from './class/NewAccount'
import { PeopleAccount } from './class/PeopleAccount'


const companyAccount:CompanyAccount = new CompanyAccount("jao",1)
//companyAccount.despsit()
//console.log(companyAccount.despsit2())

const peopleAccount:PeopleAccount = new PeopleAccount (555,"Farilo",555)
const newAccount:NewAccount = new NewAccount("felipe",15,0)
//peopleAccount.despsit()

/*console.log("***")
console.log(peopleAccount)
peopleAccount.setName("pedro")
console.log(peopleAccount)
console.log(peopleAccount.getName())

console.log("***")
console.log("***")
console.log(peopleAccount)
peopleAccount.despsit()
console.log("***")*/

//console.log(peopleAccount.setWithdraw(9))
//peopleAccount.setName("pedro")
//console.log(peopleAccount.getBalance())
console.log("****************************************************************")
console.log("Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito")
console.log(peopleAccount.setDesposit(20))
console.log("****************************************************************")
console.log("Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques")
console.log(peopleAccount.setWithdraw(9))
//console.log(newAccount.setDesposit(500))
console.log("****************************************************************")
console.log("Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo a classe CompanyAccount")
console.log(companyAccount.setLoan(500))
console.log("****************************************************************")
console.log("Criar um novo tipo de conta a partir da DioAccount Esta conta não deve receber novos atributos Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito.")
console.log(newAccount.setDesposit(500))
console.log("****************************************************************")
