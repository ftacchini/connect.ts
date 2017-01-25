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
        target.__controllerMetadata || (target.__controllerMetadata = {});
        
        var metadata = propertyKey ? target.__controllerMetadata[propertyKey] : target.__controllerMetadata;
        metadata = _.extend(metadata, information);
        target.__controllerMetadata = metadata;
    }

    public controllerInformation(target: any): any{
        return target.__controllerMetadata;
    }
};