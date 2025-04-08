import { StatusCodes } from "http-status-codes";
const errorHandlerMiddleware=(err, req, res, next) => {
    const StatusCode=err.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR
    const msg=err.message || 'Something went wrong'
    res.status(StatusCode).json({ msg});
};

export default errorHandlerMiddleware