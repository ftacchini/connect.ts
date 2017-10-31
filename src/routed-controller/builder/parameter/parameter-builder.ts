import { ParameterReader } from './../../reader/parameter-reader';
import { Parameter } from '../../parameter';

export interface ParameterBuilder<Information, GenericRouter> {

    information: Information;
    target: any;
    propertyKey: string;
    arg: number;

    supportsRouter(router: GenericRouter): boolean;
    buildParam(): Parameter<Information>;
}