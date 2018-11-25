import { Policy } from "../policy";

export class Userpolicies {

    private id : string;
	private name : String;
	private policies : Policy[];
	
	constructor(id : string, name : String, policies : Policy[]){
		this.id = id;
		this.name = name;
		this.policies = policies;
	}
}