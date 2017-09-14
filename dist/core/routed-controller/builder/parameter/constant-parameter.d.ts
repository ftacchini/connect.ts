import { Parameter } from './../../parameter';
export declare class ConstantParameter implements Parameter<null> {
    private value;
    index: number;
    information: null;
    type: any;
    constructor(value: any, index: number);
    getValue(...args: any[]): any;
}
