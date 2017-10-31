import * as _ from "lodash";

export class TypesHelper {
    
    private static _instance: TypesHelper;
    public static get instance() {
        return this._instance || (this._instance = new TypesHelper());
    }

    public castToType(value: any, type: any): any {
        switch(type) {
            case String:
            case Number:
            case Boolean:
                return type(value);
            case Object:
            case Function:
            case null:
            case undefined:
                return value;
            default:
                var instance = new type();
                _.merge(instance, value);
                return instance;
        }
    }
}