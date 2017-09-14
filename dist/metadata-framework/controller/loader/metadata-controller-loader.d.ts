import { ControllerBuilder, HubContainer, ControllerLoader } from "../../../core";
export declare class MetadataControllerLoader implements ControllerLoader {
    private filePattern;
    private ignorePattern;
    constructor(filePattern?: RegExp, ignorePattern?: RegExp);
    loadControllerBuilders(container: HubContainer): ControllerBuilder[];
}
