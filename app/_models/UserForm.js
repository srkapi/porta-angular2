"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserForm = (function () {
    function UserForm(username, password, firstName, lastName, email, userRoles, permissions) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userRoles = userRoles;
        this.rolesPermissions = permissions;
    }
    return UserForm;
}());
exports.UserForm = UserForm;
//# sourceMappingURL=UserForm.js.map