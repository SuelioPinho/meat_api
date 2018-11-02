"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server/server");
var server = new server_1.Server();
server.bootstrap().then(function (server) {
    console.log('Server is listening on:', server.application.address());
}).catch(function (error) {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
});
