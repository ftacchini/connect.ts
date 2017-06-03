"use strict";
var includeAll = require("include-all");
const _ = require("lodash");
const ControllerMetadata = require("./controller-metadata");
class DefaultControllerLoader {
    constructor(filePattern, ignorePattern) {
        this.filePattern = filePattern;
        this.ignorePattern = ignorePattern;
    }
    loadControllerBuilders() {
        let controllerFiles = includeAll({
            dirname: process.cwd(),
            filter: this.filePattern || /(.+)\-controller\.js$/,
            excludeDirs: this.ignorePattern || /^\.(git|svn)$/,
            flatten: true
        });
        let controllers = [];
        _.each(_.values(controllerFiles), (exports) => {
            let filteredExports = _.filter(exports, (value) => {
                return Reflect.hasMetadata(ControllerMetadata.CONTROLLER_BUILDER, value);
            });
            controllers = _.union(controllers, filteredExports);
        });
        return controllers;
    }
}
exports.DefaultControllerLoader = DefaultControllerLoader;
//# sourceMappingURL=default-controller-loader.js.map