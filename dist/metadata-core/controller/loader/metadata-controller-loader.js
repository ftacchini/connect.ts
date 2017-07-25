"use strict";
var includeAll = require("include-all");
const _ = require("lodash");
const ControllerMetadataKeys = require("../../helpers/controller-metadata-keys");
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
            let filteredExports = _.filter(exports, (value) => {
                return Reflect.hasMetadata(ControllerMetadataKeys.CONTROLLER_BUILDER, value)
                    && Reflect.getMetadata(ControllerMetadataKeys.CONTROLLER_BUILDER, value);
            });
            controllerBuilderFactory = _.union(controllerBuilderFactory, filteredExports);
        });
        return controllerBuilderFactory.map(factory => factory(container));
    }
}
exports.MetadataControllerLoader = MetadataControllerLoader;
//# sourceMappingURL=metadata-controller-loader.js.map