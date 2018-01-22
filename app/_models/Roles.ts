
import {Permission} from "./Permission";

export class Roles {

    public code: string;
    public permissions: Array<Permission> = new Array();

    constructor(code:string, pers:Permission

    ){
        this.code = code;
        this.permissions.push(pers);
    }


}
