class RateLimiter {
    constructor(count) {
        this.count = count;
        this._regLogs = [];
    }

    set regLogs(reqLogs) {
        this._regLogs = reqLogs;
    }

    get regLogs() {
        return this._regLogs;
    }

    addReq(reqLog) {
        let rlTmps = [];
        for (let i = 0; i < this._regLogs.length; i++) {
            const rl = this._regLogs[i];
            if (rl.ipaddress == reqLog.ipaddress) {
                rl.index = i;
                rlTmps.push(rl);        
            }
        }
        rlTmps.sort(function(reqLogA, reqLogB){
            return reqLogA.time - reqLogB.time;
        });
        if (rlTmps.length == this.count) {
            this._regLogs.splice(rlTmps[0].index, 1);
        }
        this._regLogs.push(reqLog);
    }


    limiter(ipaddress, callback){
        let rlTmps = [];
        for (let i = 0; i < this._regLogs.length; i++) {
            const reqLog = this._regLogs[i];
            if (reqLog.ipaddress == ipaddress) 
                rlTmps.push(reqLog);        
        }
        rlTmps.sort(function(reqLogA, reqLogB){
            return reqLogA.time - reqLogB.time;
        })

        let res = (rlTmps[rlTmps.length - 1].time - rlTmps[0].time) / 1000;
        let hit = rlTmps.length;
        // console.log('you hit ', rlTmps.length, ' in ',  res);
        return callback(hit, res);
    }


}

module.exports = RateLimiter;