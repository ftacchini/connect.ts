import { Response, Request } from 'express';

export class HttpNamedParamValueReader {

    constructor(private paramName: string) {
    }

    public readParamValue(request: Request, response: Response): any{
        console.log(this.paramName);
        console.log(request.query[this.paramName]);
        return request.query[this.paramName];
    }
}