import { Parameter } from './../../../../core/routed-controller/parameter';
import { HttpNamedParameterInformation } from './../../information/http-named-parameter-information';
import { HttpEverywhereParameter } from './../../parameter/http-everywhere-parameter';
import { HttpNamedParameterBuilder } from "./http-named-parameter-builder";

export class HttpEverywhereParameterBuilder extends HttpNamedParameterBuilder {
    
    protected createParameterInstance(): Parameter<HttpNamedParameterInformation> {
        return new HttpEverywhereParameter();
    }

}