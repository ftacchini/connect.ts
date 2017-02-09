var includeAll = require("include-all");
import { ControllerLoader } from "../controller-loader.service";
import * as _ from "lodash";

export class DefaultControllerLoader implements ControllerLoader {

    loadControllers() : any {
        let controllerFiles = includeAll({
            dirname: process.cwd(),
            filter: /(.+)\.controller\.js$/,
            excludeDirs: /^\.(git|svn)$/,
            flatten: true
        });

        let controllers: any[] = [];
        
        _.each(_.values(controllerFiles), (exports: any) => {


            let filteredExports = _.filter(exports, (value: any) => {
                return value.prototype.__controllerMetadata
            });
            
            controllers = _.union(controllers, filteredExports);
        });


        return controllers;
    }

}