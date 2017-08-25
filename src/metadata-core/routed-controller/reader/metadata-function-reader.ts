import { Types } from './../../../core/container/types';
import { injectable, inject } from 'inversify';
import { FunctionReader, HubContainer } from '../../../core/';

@injectable()
export class MetadataFunctionReader implements FunctionReader {

    constructor(@inject(Types.Container) private hubContainer: HubContainer) {

    }

    public readFunctionFactory(controller: any, action: string): () => Function {        
        return () => {
            var controllerInstance = this.hubContainer.bindAndGet<any>(controller.constructor);
            return controllerInstance[action];
        }
    }
}