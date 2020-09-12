const RateLimiter = require('../services/RateLimiter.service');
const RegLog = require('../models/ReqLog');
const Result = require('../models/Result');

const RATE_LIMIT_COUNT = process.env.RATE_LIMIT_COUNT || 10;
const RATE_LIMIT_SECREQ = process.env.RATE_LIMIT_SECREQ || 10;
let rateLimiter = new RateLimiter(RATE_LIMIT_COUNT);

let rateLogger = (req, res, next) => {
    let reqLog = new RegLog(req.ip, new Date());
    rateLimiter.addReq(reqLog);
    rateLimiter.limiter(req.ip, (hit, second) => {
        if (hit == RATE_LIMIT_COUNT && second < RATE_LIMIT_SECREQ) {
            result = new Result(false, 'You have exceeded the '+ RATE_LIMIT_COUNT +' request in '+ RATE_LIMIT_SECREQ + ' second limit');
            result.statusCode = 404;
            res.status(result.statusCode).json(result.response());
        }else{
            next();
        }
    });
}

module.exports = rateLogger;