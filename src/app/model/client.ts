export enum Role {
    User = "USUARIO" ,
    Admin = "ADMINISTRADOR"
}
export class Client {

    private id : string;
	private name : String;
	private email : String;
	private role : Role;
	
	constructor(id : string, name : String, email : String, role : Role){
		this.id = id;
		this.name = name;
		this.email = email;
		this.role = role;
	}
}
