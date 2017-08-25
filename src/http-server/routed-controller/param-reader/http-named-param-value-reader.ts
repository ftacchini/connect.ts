import { Response, Request } from 'express';

export class HttpNamedParamValueReader {

    constructor(private paramName: string) {
    }

    public readParamValue(request: Request, response: Response): any{
    }
}