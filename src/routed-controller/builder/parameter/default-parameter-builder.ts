import { ParameterBuilder } from './parameter-builder';
import { ParameterReader } from './../../reader/parameter-reader';
import { injectable, unmanaged } from 'inversify';
import { Parameter } from '../../parameter';

@injectable()
export abstract class DefaultParameterBuilder<Information, GenericRouter> implements ParameterBuilder<Information, GenericRouter> {

    protected information: Information;
    protected target: any;
    protected propertyKey: string;
    protected arg: number;

    constructor(@unmanaged() private parameterReader: ParameterReader) {

    }

    public withInformation(information: Information) : this {
        this.information = information;
        return this;
    }

    public getArgumentIndex(): number {
        return this.arg;
    }

    public withTarget(target: any) : this {
        this.target = target;
        return this;
    }

    public withPropertyKey(propertyKey: string) : this {
        this.propertyKey = propertyKey;
        return this;
    }

    public withArgumentIndex(arg: number) : this {
        this.arg = arg;
        return this;
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