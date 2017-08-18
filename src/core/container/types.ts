interface TypesDictionary {
    [propName: string]: symbol,
    MiddlewareReader: symbol,
    RouteReader: symbol,
    ControllerActivator: symbol
}
//This should be TypesDcitionary but the compiler is not working fine...
export var Types: TypesDictionary = {
    MiddlewareReader: Symbol("MiddlewareReader"),
    RouteReader: Symbol("RouteReader"),
    Container: Symbol("Container"),
    ControllerActivator: null
};