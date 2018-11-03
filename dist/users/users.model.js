"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = [
    { id: '1', name: 'Peter Parker', email: 'peter@marvel.com' },
    { id: '2', name: 'Bruce Wayne', email: 'bruce@dc' }
];
var User = /** @class */ (function () {
    function User() {
    }
    User.findAll = function () {
        return Promise.resolve(users);
    };
    User.findById = function (id) {
        return new Promise(function (resolve) {
            var filtered = users.filter(function (user) { return user.id === id; });
            var user = undefined;
            if (filtered.length > 0) {
                user = filtered[0];
            }
            resolve(user);
        });
    };
    return User;
}());
exports.User = User;
