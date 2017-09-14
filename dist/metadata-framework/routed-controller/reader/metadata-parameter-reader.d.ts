import { ParameterReader, ParameterBuilder, HubContainer } from '../../../core';
export declare class MetadataParameterReader implements ParameterReader {
    private container;
    private metadataTags;
    constructor(container: HubContainer);
    readParameters<GenericRouter>(target: any, propertyKey: string, router: GenericRouter): ParameterBuilder<any, GenericRouter>[];
    readParameterType(target: any, propertyKey: any, arg: number): any;
}
