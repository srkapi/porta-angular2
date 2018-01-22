"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(username, password, firstName, lastName, email, attempts) {
        this.roles = new Array();
        this.permissions = new Array();
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
//# sourceMappingURL=User.js.map