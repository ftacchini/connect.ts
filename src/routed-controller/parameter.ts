export interface Parameter<Information> {
    information: Information;
    index: number;
    type: any;
    getValue(staticData: any, ...args: any[]) : any;
}