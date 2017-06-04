import { Controller, Get } from "../core/controller-information";
import "reflect-metadata";

@Controller({ name: "someName"})
export class SomeController1 {

    constructor(){}

    @Get()
    public foo(){
        console.log("foo being called");
    }

}