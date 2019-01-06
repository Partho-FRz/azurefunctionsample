const dataConnection = require('../database/dataConnection');
const {
    ServerLessPoc
} = require('../database/dataModel');
module.exports = function (context) {
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
        ServerLessPoc.find().then(res => {
            context.res = returnObj(
                200, res
            );
            context.done();
        }).catch(err => {
            context.res = returnObj(
                400, {
                    message: err.message
                }
            );
            context.done();
        })
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