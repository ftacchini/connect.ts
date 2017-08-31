import { injectable } from 'inversify';
import { HttpHandler, HttpGet, FromHttpRequest } from "../http-server";
import "reflect-metadata";

@HttpHandler({ name: "someName" })
@injectable()
export class SomeController {

    constructor(){}

    @HttpGet({path: "foorecopada" })
    public foo(param: string, 
        @FromHttpRequest() param2: string){
        console.log("foo being called " + param + param2);
    }
}