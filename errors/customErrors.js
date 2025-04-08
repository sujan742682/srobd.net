import { StatusCodes } from "http-status-codes";

export class MyNotFoundError extends Error {
    constructor(msg){
        super(msg);
        this.name='MyErrorName';
        this.StatusCode=StatusCodes.NOT_FOUND;
    }
}

export class MyBadRequestError extends Error {
    constructor(msg){
        super(msg);
        this.name='MyErrorName';
        this.StatusCode=StatusCodes.BAD_REQUEST;
    }
}
export class MyUnauthenticatedError extends Error {
    constructor(msg){
        super(msg);
        this.name='MyErrorName';
        this.StatusCode=StatusCodes.UNAUTHORIZED;
    }
}

export class MyUnauthorizedError extends Error {
    constructor(msg){
        super(msg);
        this.name='MyErrorName';
        this.StatusCode=StatusCodes.FORBIDDEN;
    }
}

export class MyConflictError extends Error{
    constructor(msg){
        super(msg);
        this.name='MyErrorName';
        this.StatusCode=StatusCodes.CONFLICT;
    }
}