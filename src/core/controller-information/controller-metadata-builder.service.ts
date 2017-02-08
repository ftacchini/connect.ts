import * as _ from "lodash";

export class ControllerMetadataBuilder{

    private static _instance: ControllerMetadataBuilder;

    static get instance(): ControllerMetadataBuilder {
        return this._instance || new ControllerMetadataBuilder();
    } 

    private constructor(){
    }

    private registry: any;

    public attachControllerInformation(target: any, moreInformation: any){
        let controllerInformation = this.controllerInformation(target.prototype);
        _.extend(controllerInformation, moreInformation);
    }

    public attachPropertyInformation(targetPrototype: any, propertyKey: string, moreInformation: any){
        let propertyInformation = this.propertyInformation(targetPrototype, propertyKey);
        _.extend(propertyInformation, moreInformation);
        
    }

    public controllerInformation(target: any): any{
        return target.__controllerMetadata || (target.__controllerMetadata = { properties: {} });
    }

    public propertyInformation(target:any, propertyKey: string){
        let controllerInformation = this.controllerInformation(target.prototype);
        return controllerInformation.properties[propertyKey] || (controllerInformation.properties[propertyKey] = {});
    }
};