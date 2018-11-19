"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = (req, resp, err, done) => {
    console.log(err.name);
    err.toJSON = () => {
        return {
            message: err.message
        };
    };
    switch (err.name) {
        case 'MongoError':
            console.log("Entrou MongoError");
            if (err.code === 11000) {
                console.log("Mudou status code");
                resp.send(400, err.toJSON());
            }
            break;
        case 'ValidationError':
            const messages = [];
            for (let name in err.errors) {
                messages.push({ message: err.errors[name].message });
            }
            err.toJSON = () => ({
                errors: messages
            });
            resp.send(400, err.toJSON());
            break;
        case 'NotFound':
            resp.send(404, err.toJSON());
            break;
        default: resp.send(500, err.toJSON());
    }
    done();
};
