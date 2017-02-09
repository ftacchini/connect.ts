import { Controller, Get } from "../core/controller-information/controller-information.module";
import "reflect-metadata";

@Controller({ name: "someName"})
export class SomeController {

    constructor(){}

    @Get()
    foo( param: string){
        console.log("foo being called");
    }

}