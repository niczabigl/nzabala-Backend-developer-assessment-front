export class Policy {

    private polid : string;
	private polamountInsured : number;
	private polemail : String;
    private polinceptionDate : Date;
    private polinstallmentPayment : boolean;
    private polcliid : string;
	
	constructor(id : string, amountInsured : number, email : String, installmentPayment : boolean, clientId : string){
        this.polid = id;
        this.polamountInsured = amountInsured;
		this.polemail = email;
		this.polinstallmentPayment = installmentPayment;
		this.polcliid = clientId;
	}
}