import { ConstantParameter } from './constant-parameter';
import { Parameter } from './../../parameter';
import { ParameterBuilder } from "./parameter-builder";

export class ConstantParameterBuilder extends ParameterBuilder<null, any> {
    
    constructor(private parameterValue: any, private index: number) {
        super(null);
    }

    protected createParameterInstance(): Parameter<null> {
        return new ConstantParameter(this.parameterValue, this.index);
    }
    
    public supportsRouter(router: any): boolean {
        return true;
    }
}