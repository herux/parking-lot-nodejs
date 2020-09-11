class Result {
    constructor(isSuccess, message, data) {
        this.isSuccess = isSuccess;
        this.message = message;
        this.data = data;
    }

    set statusCode(code) {
        this._statusCode = code;
    }

    get statusCode() {
        return this._statusCode;
    }

    response() {
        if (this.isSuccess) {
            return {r: true, m: this.message, d: this.data}
        } else {
            return {r: false, m: this.message}
        }
    }
}

module.exports = Result;