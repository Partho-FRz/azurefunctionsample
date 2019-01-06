const dataConnection = require('../database/dataConnection');
const {
    ServerLessPoc
} = require('../database/dataModel');
module.exports = function (context, req) {
    try {
        dataConnection.connect().then(() => {
            console.log('connected to cosmosdb');
        }).catch(err => {
            context.res = returnObj(
                400, {
                    message: err.message
                }
            );
            context.done();
        });
        const serverLessPoc = new ServerLessPoc({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dateOfBirth: req.body.dateOfBirth,
            passportId: req.body.passportId,
            nId: req.body.nId,
            createdAt: Date.now()
        });
        serverLessPoc.save().then(() => {
            context.res = returnObj(
                200,
                serverLessPoc
            );
            context.done();
        }).catch(err => {
            context.res = returnObj(
                400, {
                    message: err.message
                }
            );
            context.done();
        });
    } catch (ex) {
        context.res = returnObj(
            400, {
                message: ex.message
            }
        );
        context.done();

    }

    returnObj = (status, body) => {
        return {
            status,
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }
};