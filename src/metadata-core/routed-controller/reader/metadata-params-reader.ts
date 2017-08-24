import { injectable } from 'inversify';
import { ParamsReader } from './../../../core';

@injectable()
export class MetadataParamsReader implements ParamsReader {
    public readParams(target: any, propertyKey: string): {}[] {
        return [];
    }
}