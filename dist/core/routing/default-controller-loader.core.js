"use strict";
var includeAll = require("include-all");
const _ = require("lodash");
class DefaultControllerLoader {
    loadControllers() {
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
exports.DefaultControllerLoader = DefaultControllerLoader;
//# sourceMappingURL=default-controller-loader.core.js.map