
import {Permission} from "./permission";

export class Roles {

    public code: string;
    public rolesPermissions: Permission = [];

    constructor(code:string, pers:Permission

    ){
        this.code = code;
        this.rolesPermissions.push(pers);
    }


}
