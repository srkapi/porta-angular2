
import {Permission} from "./permission";

export class Roles {

    public code: string;
    public permissions: Permission=[];

    constructor(code:string, pers:Permission

    ){
        this.code = code;
        this.permissions.push(pers);
    }


}
