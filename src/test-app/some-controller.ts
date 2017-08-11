import { HttpHandler, HttpGet } from "../http-server";
import "reflect-metadata";

@HttpHandler({ name: "someName"})
export class SomeController {

    constructor(){}

    @HttpGet()
    foo( param: string){
        console.log("foo being called");
    }

}