export interface Parameter<Information> {
    information: Information;
    index: number;
    type: any;
    getValue(...args: any[]): any;
}
