import { ConstantParameter } from './constant-parameter';
import { Parameter } from './../../parameter';
import { ParameterBuilder } from "./parameter-builder";

export class ConstantParameterBuilder extends ParameterBuilder<null, any> {
    
    constructor(private parameterValue: any, arg: number) {
        super(null);
        this.arg = arg;
    }

    protected createParameterInstance(): Parameter<null> {
        return new ConstantParameter(this.parameterValue, this.arg);
    }
    
    public supportsRouter(router: any): boolean {
        return true;
    }
}