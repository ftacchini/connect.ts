import { FunctionReader, HubContainer } from '../../../core/';
export declare class MetadataFunctionReader implements FunctionReader {
    private hubContainer;
    constructor(hubContainer: HubContainer);
    readFunction(controller: any, action: string): Function;
}
