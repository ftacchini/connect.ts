import { Controller, Get, FromBody } from "../core/controller-information/controller-information.module";
import "reflect-metadata";

@Controller({ name: "someName"})
export default class SomeController {

    constructor(){}

    @Get()
    foo(@FromBody() param: string){
        console.log("foo being called");
    }

}