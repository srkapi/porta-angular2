

export class UserForm {
    public username: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public attempts: number;
    public userRoles: string;
    public rolesPermissions:string;

    constructor(
                username: string,
                password: string,
                firstName: string,
                lastName: string,
                email: string,
                attempts: number,
                userRoles: string,
                permissions: string) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.attempts = attempts;
        this.userRoles = userRoles;
        this.rolesPermissions= permissions;

    }


}

