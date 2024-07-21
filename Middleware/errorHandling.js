const { constant } = require("../constant")

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode)

    switch (statusCode) {
        case constant.FORBIDDEN:
            res.json({ title: "FORBIDDEN", message: err.message, StackTrack: err.stack });
            break;
        case constant.NOT_FOUND:
            res.json({ title: "NOT FOUND", message: err.message, stackTrace: err.stack });
            break;
        case constant.UNAUTHORIZED:
            res.json({ title: "UNAUTHORIZED", message: err.message, stackTrace: err.stack });
            break;
        case constant.VALIDATION_ERROR:
            res.json({ title: "VALIDATION ERROR", message: err.message, stackTrace: err.stack });
            break;
        case constant.SERVER_ERROR:
            res.json({ title: "SERVER ERROR", message: err.message, stackTrace: err.stack });
            break;
        default:
            console.log("No Error Found Every thing is ok !");
            break;
    }
}
module.exports = errorHandler