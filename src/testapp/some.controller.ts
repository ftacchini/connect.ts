import { Controller } from "../controller-information/controller.core";
import { Get } from "../controller-information/get-action.core";

@Controller({ name: "someName"})
export class SomeController {

    constructor(){

    }

    @Get()
    foo(){
        console.log("foo being called");
    }

}