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
        ServerLessPoc.findByIdAndRemove(req.params.id).then(() => {
            context.res = returnObj(
                200, {
                    isDeleted: true
                }
            );
            context.done();
        }).catch(() => {
            context.res = returnObj(
                400, {
                    isDeleted: false
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