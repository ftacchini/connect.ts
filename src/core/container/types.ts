interface TypesDictionary {
    [propName: string]: symbol,
    MiddlewareReader: symbol,
    RouteReader: symbol,
    FunctionReader: symbol,
    ParamsReader: symbol
}

export var Types: TypesDictionary = {
    MiddlewareReader: Symbol("MiddlewareReader"),
    RouteReader: Symbol("RouteReader"),
    Container: Symbol("Container"),
    FunctionReader: Symbol("FunctionReader"),
    ParamsReader: Symbol("ParamsReader")
};