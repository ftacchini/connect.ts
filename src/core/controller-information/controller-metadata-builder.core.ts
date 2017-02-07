import * as _ from "lodash";

export class ControllerMetadataBuilder{

    private static _instance: ControllerMetadataBuilder;

    static get instance(): ControllerMetadataBuilder {
        return this._instance || new ControllerMetadataBuilder();
    } 

    private constructor(){
    }

    private registry: any;

    public attachInformation(target: any, propertyKey: string, information: any){
        console.log(target);
        console.log(target.__controllerMetadata);
        target.__controllerMetadata || (target.__controllerMetadata = { properties: {} });
        console.log(target.__controllerMetadata);
        var metadata = propertyKey ? 
        (target.__controllerMetadata.properties[propertyKey] || (target.__controllerMetadata.properties[propertyKey] = {})) : 
        target.__controllerMetadata;
        _.extend(metadata, information);
        console.log(target.__controllerMetadata);
    }

    public controllerInformation(target: any): any{
        return target.__controllerMetadata;
    }
};