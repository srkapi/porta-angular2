"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, username, password, firstName, lastName, email, attempts, userRoles, permissions) {
        this.permissions = [];
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.attempts = attempts;
        this.userRoles = userRoles;
        this.permissions.push(permissions);
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map