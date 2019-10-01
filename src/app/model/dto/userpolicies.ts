import { Policy } from "../policy";

export class Userpolicies {

    private cliid : string;
	private cliname : string;
	private clipolicies : Policy[];
	
	constructor(id : string, name : string, policies : Policy[]){
		this.cliid = id;
		this.cliname = name;
		this.clipolicies = policies;
	}

	getCliid() : string {
		return this.cliid
	}

	getCliname() : string {
		return this.cliname
	}

	getClipolicies() : Policy[] {
		return this.clipolicies
	}
}