import { MiddlewareHandler } from './some-middleware';
import { injectable } from 'inversify';
import { HttpHandler, HttpGet, FromHttpRequest, HttpResponse } from "../http-server";
import "reflect-metadata";

@HttpHandler({ name: "someName" })
@injectable()
export class SomeController {

    constructor(){}

    @HttpGet({path: "foorecopada" })
    @MiddlewareHandler({
        
    })
    public foo(
        @HttpResponse() param: string, 
        @FromHttpRequest() param2: SomeController){

        console.log("foo being called " + param + param2);
        
    }
}