import { Parameter } from './../../parameter';
import { ParameterBuilder } from "./parameter-builder";
export declare class ConstantParameterBuilder extends ParameterBuilder<null, any> {
    private parameterValue;
    constructor(parameterValue: any, arg: number);
    protected createParameterInstance(): Parameter<null>;
    supportsRouter(router: any): boolean;
}
