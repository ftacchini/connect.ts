export interface ParamsDictionary {
    [index: number]: any;
}

export interface ParamsReader {
    readParams(target: any, propertyKey: string): {}[];
}