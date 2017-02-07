var includeAll = require("include-all");
import { ControllerLoader } from "./controller-loader.core";
import * as _ from "lodash";

export class DefaultControllerLoader implements ControllerLoader {

    loadControllers() : any {
        let controllerFiles = includeAll({
            dirname: process.cwd(),
            filter: /(.+)\.controller\.js$/,
            excludeDirs: /^\.(git|svn)$/,
            flatten: true
        });

        let controllers = _.values(controllerFiles);

        return controllers;
    }

}