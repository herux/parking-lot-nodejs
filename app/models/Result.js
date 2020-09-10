class Result {
    constructor(isSuccess, message, data) {
        this.isSuccess = isSuccess;
        this.message = message;
        this.data = data;
    }

    response() {
        if (this.isSuccess) {
            return {r: true, message: this.message, data: this.data}
        } else {
            return {r: false, message: this.message}
        }
    }
}

module.exports = Result;