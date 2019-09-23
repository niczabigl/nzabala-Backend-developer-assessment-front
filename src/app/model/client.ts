export enum Role {
    User = "USUARIO" ,
    Admin = "ADMINISTRADOR"
}
export class Client {

    private cliid : string;
	private cliname : String;
	private cliemail : String;
	private clirole : Role;
	
	constructor(id : string, name : String, email : String, role : Role){
		this.cliid = id;
		this.cliname = name;
		this.cliemail = email;
		this.clirole = role;
	}
}
