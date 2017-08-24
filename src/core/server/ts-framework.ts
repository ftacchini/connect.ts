import { ControllerLoader} from './../controller';
import { RouteReader, MiddlewareReader, FunctionReader, ParamsReader } from './../routed-controller';
import { interfaces } from 'inversify';


export interface TsFramework {
    setupFramework(): ControllerLoader;
}