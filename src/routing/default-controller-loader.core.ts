import { injectable, inject } from "inversify";
var includeAll = require("include-all");
import { ControllerLoader } from "./controller-loader.core";

@injectable()
export class DefaultControllerLoader implements ControllerLoader {

    loadControllers() : any {
        let controllers = includeAll({
            dirname: process.cwd(),
            filter: /^\.controller\.js$/,
            excludeDirs: /^\.(git|svn)$/
        });

        return controllers;
    }

}