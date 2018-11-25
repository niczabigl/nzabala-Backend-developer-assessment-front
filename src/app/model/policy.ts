export class Policy {

    private id : string;
	private amountInsured : number;
	private email : String;
    private inceptionDate : Date;
    private installmentPayment : boolean;
    private clientId : string;
	
	constructor(id : string, amountInsured : number, email : String, installmentPayment : boolean, clientId : string){
        this.id = id;
        this.amountInsured = amountInsured;
		this.email = email;
		this.installmentPayment = installmentPayment;
		this.clientId = clientId;
	}
}