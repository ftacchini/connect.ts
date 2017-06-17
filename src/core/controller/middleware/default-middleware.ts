import {Middleware} from "./middleware";

export class DefaultMiddleware implements Middleware{
    constructor(public requestHandler: () => any){
    }
}
