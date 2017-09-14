"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var includeAll = require("include-all");
const _ = require("lodash");
const ControllerMetadataKeys = require("../../helper/controller-metadata-keys");
class MetadataControllerLoader {
    constructor(filePattern, ignorePattern) {
        this.filePattern = filePattern;
        this.ignorePattern = ignorePattern;
    }
    loadControllerBuilders(container) {
        let controllerFiles = includeAll({
            dirname: process.cwd(),
            filter: this.filePattern || /(.+)\-controller\.js$/,
            excludeDirs: this.ignorePattern || /^\.(git|svn)$/,
            flatten: true
        });
        let controllerBuilderFactory = [];
        _.each(_.values(controllerFiles), (exports) => {
            let filteredExports = _.filter(_.flatten(_.map(exports, (value) => {
                return Reflect.getMetadata(ControllerMetadataKeys.CONTROLLER_BUILDER, value);
            })), metadata => metadata);
            controllerBuilderFactory = _.union(controllerBuilderFactory, filteredExports);
        });
        return controllerBuilderFactory.map(factory => factory(container));
    }
}
exports.MetadataControllerLoader = MetadataControllerLoader;
//# sourceMappingURL=metadata-controller-loader.js.map