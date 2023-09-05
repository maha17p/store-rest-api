import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api";


class UnAuthorizedError extends CustomAPIError{
    constructor(message){
        super(message)
        this.status = StatusCodes.UNAUTHORIZED
    }
};

export default UnAuthorizedError;
