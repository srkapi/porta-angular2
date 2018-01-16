
import {Roles} from "./roles";
import {Permission} from "./permission";

export class User {
    public id: number;
    public username: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public  email: string;
    public  attempts: number;
    public  userRoles: any[];
    public  permissions: any[];

}

