"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mpContextType = 'application/merge-patch+json';
exports.mergePatchBodyParser = (req, resp, next) => {
    if (req.getContentType() == mpContextType && req.method === 'PATCH') {
        req.rawBody = req.body;
        try {
            req.body = JSON.parse(req.body);
        }
        catch (e) {
            return next(new Error(`invalid content: ${e.message}`));
        }
    }
    return next();
};
