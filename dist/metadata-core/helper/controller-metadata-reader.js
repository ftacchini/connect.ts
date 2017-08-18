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
        return this.readMetadata(metadataTags, target);
    }
    readArgumentLevelMetadata(metadataTags, target) {
        return this.readMetadata(metadataTags, target);
    }
    readMetadata(metadataTags, target) {
        return _.flatten(metadataTags.map((key) => { return Reflect.getMetadata(key, target, "asd"); }));
    }
}
exports.ControllerMetadataReader = ControllerMetadataReader;
//# sourceMappingURL=controller-metadata-reader.js.map