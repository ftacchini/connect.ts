import {Request, Response} from "express";

export interface HttpParametersReader {
    readHttpParams(requestHandler: Function, req: Request, res: Response): any[];
}