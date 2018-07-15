export interface TypesDictionary {
    [propName: string]: symbol,
    MiddlewareReader: symbol,
    RouteReader: symbol,
    ActivationContextProvider: symbol,
    ParamsReader: symbol,
    TsHubLogger: symbol
}

export var Types: TypesDictionary = {
    MiddlewareReader: Symbol("MiddlewareReader"),
    RouteReader: Symbol("RouteReader"),
    Container: Symbol("Container"),
    ActivationContextProvider: Symbol("ActivationContextProvider"),
    ParamsReader: Symbol("ParamsReader"),
    TsHubLogger: Symbol("TsHubLogger")
};