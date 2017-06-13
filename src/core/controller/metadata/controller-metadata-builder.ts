import {ControllerMetadata, DefaultControllerBuilderFactory} from "./";
import {ControllerBuilder} from "../builder";

export class ControllerMetadataBuilder {

    private static _instance: ControllerMetadataBuilder;
    public static get instance(): ControllerMetadataBuilder {
        return this._instance || (this._instance = new ControllerMetadataBuilder());
    }

    private constructor() {

    }

    

    public buildControllerMetadata<T>(
        constructor: new (target: any, information?: T) => ControllerBuilder,
        extraMetadataTags?: symbol[]) {

        return function attributeDefinition(information?: T) {

            return function (target: any) {
                var controllerBuilder = (container: Container) => { return new constructor(target, information) };
                Reflect.defineMetadata(ControllerMetadata.CONTROLLER_BUILDER, controllerBuilder, target);

                extraMetadataTags.forEach((metadata) => {
                    Reflect.defineMetadata(metadata, controllerBuilder, target);
                });
            }
        }
    }

    public buildRouteMetadata<T>(
        constructor: new (target: any, propertyKey: string, information?: T) => RouteBuilder,
        extraMetadataTags?: symbol[]) {

        return function attributeDefinition(information?: T) {

            return function (target: any, propertyKey: string) {
                var controllerBuilder = new constructor(target, propertyKey, information);
                Reflect.defineMetadata(ControllerMetadata.CONTROLLER_BUILDER, controllerBuilder, target);

                extraMetadataTags.forEach((metadata) => {
                    Reflect.defineMetadata(metadata, controllerBuilder, target);
                });
            }
        }
    }

    public buildMiddlewareMetadata<T>(
        constructor: new (target: any, propertyKey: string, information?: T) => MiddlewareBuilder,
        extraMetadataTags?: symbol[]) {

        return function attributeDefinition(information?: T) {

            return function (target: any, propertyKey: string) {
                var controllerBuilder = new constructor(target, propertyKey, information);
                Reflect.defineMetadata(ControllerMetadata.CONTROLLER_BUILDER, controllerBuilder, target);

                extraMetadataTags.forEach((metadata) => {
                    Reflect.defineMetadata(metadata, controllerBuilder, target);
                });
            }
        }
    }

    public buildParamsReaderMetadata<T>(
        constructor: new (target: any, propertyKey: string, arg: number, information?: T) => ParamsReaderBuilder,
        extraMetadataTags?: symbol[]) {

        return function attributeDefinition(information?: T) {

            return function (target: any, propertyKey: string, arg: number) {
                var controllerBuilder = new constructor(target, propertyKey, arg, information);
                Reflect.defineMetadata(ControllerMetadata.CONTROLLER_BUILDER, controllerBuilder, target);

                extraMetadataTags.forEach((metadata) => {
                    Reflect.defineMetadata(metadata, controllerBuilder, target);
                });
            }
        }
    }
}