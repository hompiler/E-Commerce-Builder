export default class ApiError extends Error {
    constructor(public status: number, public type: string, public message: string, public payload?: object) {
        super(message);
    }

    public getResponseMessage() {
        return {
            status: this.status,
            type: this.type,
            message: this.message,
            payload: this.payload,
        }
    }

}