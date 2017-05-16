import { HttpController, HttpGet } from "../core/core-module";
import "reflect-metadata";

@HttpController({ name: "someName"})
export class SomeController {

    constructor(){}

    @HttpGet()
    foo( param: string){
        console.log("foo being called");
    }

}