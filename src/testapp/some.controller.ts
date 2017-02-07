import { Controller, Get } from "../core/controller-information/controller-information.module";

@Controller({ name: "someName"})
export class SomeController {

    constructor(){}

    @Get()
    foo(){
        console.log("foo being called");
    }

}