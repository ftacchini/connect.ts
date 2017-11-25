import { Parameter } from './../../parameter';
export class ConstantParameter implements Parameter<null> {
    information: null;
    type: any;

    constructor(private value: any, public index: number) {

    }

    getValue(...args: any[]) : any {
        return this.value;
    }
}