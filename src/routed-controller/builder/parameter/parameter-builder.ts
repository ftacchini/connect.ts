import { ParameterReader } from './../../reader/parameter-reader';
import { Parameter } from '../../parameter';

export interface ParameterBuilder<Information, GenericRouter> {
    getArgumentIndex(): number;
    withInformation(information: Information) : this;
    withTarget(target: any) : this;
    withPropertyKey(propertyKey: string) : this;
    withArgumentIndex(arg: number) : this;
    
    supportsRouter(router: GenericRouter): boolean;
    buildParam(): Parameter<Information>;
}