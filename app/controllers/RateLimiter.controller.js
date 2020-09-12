const RateLimiter = require('../services/RateLimiter.service');
const RegLog = require('../models/ReqLog');
const Result = require('../models/Result');

const count = 10;
const secReq = 10;
let rateLimiter = new RateLimiter(count);

let rateLogger = (req, res, next) => {
    let reqLog = new RegLog(req.ip, new Date());
    rateLimiter.addReq(reqLog);
    rateLimiter.limiter(req.ip, (hit, second) => {
        if (hit == count && second < secReq) {
            result = new Result(false, 'You have exceeded the '+ count +' request in '+ secReq + ' second limit');
            result.statusCode = 404;
            res.status(result.statusCode).json(result.response());
        }else{
            next();
        }
    });
}

module.exports = rateLogger;