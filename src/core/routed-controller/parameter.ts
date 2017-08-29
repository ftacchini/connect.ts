export interface Parameter<Information, > {
    information: Information;
    index: number;
    getValue(...args: any[]) : any;
}