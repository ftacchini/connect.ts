/**
 * Created by Federico on 26/4/2017.
 */

import { RoutedControllerBuilder } from "../../../metadata-core"
import { HttpControllerInformation } from "./http-controller-information";
import { Router } from "Express";

export class HttpControllerBuilder 
    implements RoutedControllerBuilder<HttpControllerInformation, Router, any, any, any> {
    
    constructor(){
    }

    public buildRoutedController() : any {
        
    }    
}