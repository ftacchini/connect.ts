import { Controller, Get } from "../core/controller-information/controller-information.module";
import "reflect-metadata";

@Controller({ name: "someName"})
export class SomeController1 {

    constructor(){}

    @Get()
    public foo(){
        console.log("foo being called");
    }

}