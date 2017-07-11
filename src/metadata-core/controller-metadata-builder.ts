import {ClassMetadata} from "./class-metadata";
import {MethodMetadata} from "./method-metadata";
import {ArgumentMetadata} from "./argument-metadata";
import {HubContainer} from "../core";

export class ControllerMetadataBuilder {

    private static _instance: ControllerMetadataBuilder;
    public static get instance(): ControllerMetadataBuilder {
        return this._instance || (this._instance = new ControllerMetadataBuilder());
    }

    private constructor() {

    }

    public buildControllerLevelMetadata<T>(
        constructor: new (...args: any[]) => ClassMetadata<T>,
        metadataTags: symbol[]) {

        return function attributeDefinition(information?: T) {

            return function (target: any) {
                var controllerBuilder = (container: HubContainer): any => { 
                    var instance =  container.bindAndGet<ClassMetadata<T>>(constructor); 
                    instance.target = target;
                    instance.information = information;

                    return instance;
                };

                metadataTags && metadataTags.forEach((metadata) => {
                    Reflect.defineMetadata(metadata, controllerBuilder, target);
                });
            }
        }
    }

    public buildMethodLevelMetadata<T>(
        constructor: new (...args: any[]) => MethodMetadata<T>,
        metadataTags: symbol[]) {

        return function attributeDefinition(information?: T) {

            return function (target: any, propertyKey: string) {
                var controllerBuilder = (container: HubContainer): any => { 
                    var instance =  container.bindAndGet<MethodMetadata<T>>(constructor); 
                    instance.target = target;
                    instance.information = information;
                    instance.propertyKey = propertyKey;

                    return instance;
                };

                metadataTags && metadataTags.forEach((metadata) => {
                    Reflect.defineMetadata(metadata, controllerBuilder, target);
                });
            }
        }
    }

    public buildArgumentLevelMetadata<T>(
        constructor: new (...args: any[]) => ArgumentMetadata<T>,
        metadataTags: symbol[]) {

        return function attributeDefinition(information?: T) {

            return function (target: any, propertyKey: string, arg: number) {
                var controllerBuilder = (container: HubContainer): any => { 
                    var instance =  container.bindAndGet<ArgumentMetadata<T>>(constructor); 
                    instance.target = target;
                    instance.information = information;
                    instance.propertyKey = propertyKey;
                    instance.arg = arg;

                    return instance;
                };

                metadataTags && metadataTags.forEach((metadata) => {
                    Reflect.defineMetadata(metadata, controllerBuilder, target);
                });
            }
        }
    }
}