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
        let controllers = [];
        _.each(_.values(controllerFiles), (exports) => {
            let filteredExports = _.filter(exports, (value) => {
                return value.prototype.__controllerMetadata;
            });
            controllers = _.union(controllers, filteredExports);
        });
        return controllers;
    }
}
exports.DefaultControllerLoader = DefaultControllerLoader;
//# sourceMappingURL=default-controller-loader.service.js.map