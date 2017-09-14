export declare class ControllerMetadataReader {
    private static _instance;
    static readonly instance: ControllerMetadataReader;
    private constructor();
    readControllerLevelMetadata<T>(metadataTags: symbol[], target: Object): T[];
    readMethodLevelMetadata<T>(metadataTags: symbol[], target: Object, property: string): T[];
    readArgumentLevelMetadata<T>(metadataTags: symbol[], target: Object, property: string): T[];
    readMetadata<T>(metadataTags: symbol[], target: Object, property?: string): T[];
}
