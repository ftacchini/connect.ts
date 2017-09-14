import { ParameterReader } from './../../reader/parameter-reader';
import { Parameter } from '../../parameter';
export declare abstract class ParameterBuilder<Information, GenericRouter> {
    private parameterReader;
    information: Information;
    target: any;
    propertyKey: string;
    arg: number;
    constructor(parameterReader: ParameterReader);
    protected abstract createParameterInstance(): Parameter<Information>;
    abstract supportsRouter(router: GenericRouter): boolean;
    buildParam(): Parameter<Information>;
}
