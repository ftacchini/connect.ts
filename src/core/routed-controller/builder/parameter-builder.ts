import { ParameterReader } from './../reader/parameter-reader';
import { injectable, unmanaged } from 'inversify';
import { Parameter } from './../parameter';

@injectable()
export abstract class ParameterBuilder<Information, GenericRouter> {

    public information: Information;
    public target: any;
    public propertyKey: string;
    public arg: number;

    constructor(@unmanaged() private parameterReader: ParameterReader) {

    }

    protected abstract createParameterInstance(): Parameter<Information>;
    public abstract supportsRouter(router: GenericRouter): boolean;
    public buildParam(): Parameter<Information> {
        var paramInstance = this.createParameterInstance();
        paramInstance.information = this.information;
        paramInstance.index = this.arg;
        paramInstance.type = this.parameterReader && this.parameterReader.readParameterType(this.target, this.propertyKey, this.arg);
        
        return paramInstance;
    }
}