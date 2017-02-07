import { Controller, Get } from "../core/controller-information/controller-information.module";
import "reflect-metadata";

@Controller({ name: "someName"})
export default class SomeController {

    constructor(){}

    @Get()
    foo(){
        console.log("foo being called");
    }

}