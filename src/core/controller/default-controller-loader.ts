import {ControllerLoader} from "./controller-loader";
import {ControllerBuilder} from "./controller-builder";
var includeAll = require("include-all");
import * as _ from "lodash";
import * as ControllerMetadata from "./controller-metadata";

export class DefaultControllerLoader implements ControllerLoader {

    constructor(
        private filePattern?: RegExp,
        private ignorePattern?: RegExp){
        
        }

    loadControllerBuilders() : ControllerBuilder[] {
        
        let controllerFiles = includeAll(<any>{
            dirname: process.cwd(),
            filter: this.filePattern || /(.+)\-controller\.js$/,
            excludeDirs: this.ignorePattern || /^\.(git|svn)$/,
            flatten: true
        });

        let controllers: any[] = [];
        
        _.each(_.values(controllerFiles), (exports: any) => {


            let filteredExports = _.filter(exports, (value: any) => {
                return Reflect.hasMetadata(ControllerMetadata.CONTROLLER_BUILDER, value);
            });
            
            controllers = _.union(controllers, filteredExports);
        });


        return controllers;
    }

    
}