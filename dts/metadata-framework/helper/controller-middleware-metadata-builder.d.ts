import { ConstructorMiddlewareBuilder, Handler } from './../../core';
export declare class ControllerMiddlewareMetadataBuilder {
    private static _instance;
    static readonly instance: ControllerMiddlewareMetadataBuilder;
    private constructor();
    buildServerSpecificMiddleware<T>(middlewareBuilderConstructor: new (...args: any[]) => ConstructorMiddlewareBuilder<T, any, any>, middlewareConstructor: new (...args: any[]) => Handler<T>, metadataTags?: symbol[]): (information?: T) => any;
}
