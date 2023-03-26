export default class ApiError extends Error {
    message: string;
    errors: string[];

    constructor(data: any) {
        super(data.message);
        this.message = data.message;
        this.errors = data.errors;
    }
}
