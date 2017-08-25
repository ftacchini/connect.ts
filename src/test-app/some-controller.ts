import { injectable } from 'inversify';
import { HttpHandler, HttpGet } from "../http-server";
import "reflect-metadata";

@HttpHandler({ name: "someName"})
@injectable()
export class SomeController {

    constructor(){}

    @HttpGet({path: "foorecopada" })
    foo(param: string){
        console.log("foo being called " + param);
    }
}