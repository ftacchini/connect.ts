interface TypesDictionary {
    [propName: string]: symbol,
    MiddlewareReader: symbol,
    RouteReader: symbol,
    ControllerActivator: symbol
}
//This should be TypesDcitionary but the compiler is not working fine...
export var TYPES: TypesDictionary = {
    MiddlewareReader: null,
    RouteReader: null,
    ControllerActivator: null
};