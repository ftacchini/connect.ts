import {Request, Response} from "express";
import {HttpParametersReader} from "./http-parameters-reader";

export class HttpDataParametersReader implements HttpParametersReader {
    public readHttpParams(requestHandler: Function, req: Request, res: Response): any[]{
        return [];
    }
}