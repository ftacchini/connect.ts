"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class ControllerMetadataReader {
    static get instance() {
        return this._instance || (this._instance = new ControllerMetadataReader());
    }
    constructor() {
    }
    readControllerLevelMetadata(metadataTags, target) {
        return this.readMetadata(metadataTags, target);
    }
    readMethodLevelMetadata(metadataTags, target, property) {
        return this.readMetadata(metadataTags, target, property);
    }
    readArgumentLevelMetadata(metadataTags, target, property) {
        return this.readMetadata(metadataTags, target, property);
    }
    readMetadata(metadataTags, target, property) {
        return _.flatten(metadataTags.map((key) => {
            return property ? Reflect.getMetadata(key, target, property) : Reflect.getMetadata(key, target);
        }));
    }
}
exports.ControllerMetadataReader = ControllerMetadataReader;
//# sourceMappingURL=controller-metadata-reader.js.map