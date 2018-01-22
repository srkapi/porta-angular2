"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(username, password, firstName, lastName, email, attempts) {
        this.roles = [];
        this.permissions = [];
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.attempts = attempts;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map