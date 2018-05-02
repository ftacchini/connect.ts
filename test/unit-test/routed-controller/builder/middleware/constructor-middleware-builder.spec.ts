import 'reflect-metadata';

import { DEFAULT_MIDDLEWARE_PRIORITY, HANDLE_REQUEST, Middleware, ExecutionOrder } from '../../../../../src';
import { TsHubLogger } from './../../../../../src/logging/ts-hub-logger';
import { ControllerActivator } from './../../../../../src/routed-controller/activator/controller-activator';
import { ConstructorMiddlewareBuilder } from './../../../../../src/routed-controller/builder/middleware';

describe("ConstructorMiddlewareBuilder", () => {

    class DummyConstructorMiddlewareBuilder extends ConstructorMiddlewareBuilder<any, any, any> {
        protected priority: number = 0;
        public supportsRouter(router: any): boolean {
            return true;
        }
    }

    let constructorMiddlewareBuilder: ConstructorMiddlewareBuilder<any, any, any>;
    let logger: TsHubLogger;
    let controllerActivator: ControllerActivator<any, any>;

    beforeEach(() => {
        controllerActivator = jasmine.createSpyObj<ControllerActivator<any, any>>(
            "controllerActivator", 
            ["buildControllerActivationMiddleware"]);
        logger = jasmine.createSpyObj<TsHubLogger>("logger", ["debug"]);
        constructorMiddlewareBuilder = new DummyConstructorMiddlewareBuilder(controllerActivator, logger);
    })

    describe("buildMiddleware", () => {

        it("should build a new activator passing information as the first parameter", () => {
            //arrange
            var router = {};
            var middleware = <Middleware<any,any>>{};
            var middlewareConstructor = class ImMiddleware { handleRequest(): void { }; };
            var priority = 21;
            var info = {};
            var middlewareAction = "something";
            var executionOrder = ExecutionOrder.PreActivation;
            
            constructorMiddlewareBuilder.withTarget(middlewareConstructor)
                .withInformation(info)      
                .withPropertyKey(middlewareAction)
                .withExecutionOrder(executionOrder)                  
                .withPriority(priority);
            (<any>controllerActivator.buildControllerActivationMiddleware)
                .and.returnValue(middleware)

            //act
            var result = constructorMiddlewareBuilder.buildMiddleware(router);

            //assert
            expect(controllerActivator.buildControllerActivationMiddleware).toHaveBeenCalledWith(
                middlewareConstructor.prototype,
                middlewareAction,
                router,
                { information: info }
            );
            expect(middleware.priority).toEqual(priority);
            expect(middleware.executionOrder).toEqual(executionOrder);
        })

        it("should build a new activator with default handler and priority", () => {
            //arrange
            var router = {};
            var middleware = <Middleware<any,any>>{};
            var middlewareConstructor = class ImMiddleware { handleRequest(): void { }; };
            var info = {};

            constructorMiddlewareBuilder.withTarget(middlewareConstructor)
                .withInformation(info);
            (<any>controllerActivator.buildControllerActivationMiddleware)
                .and.returnValue(middleware)

            //act
            var result = constructorMiddlewareBuilder.buildMiddleware(router);

            //assert
            expect(controllerActivator.buildControllerActivationMiddleware).toHaveBeenCalledWith(
                middlewareConstructor.prototype,
                HANDLE_REQUEST,
                router,
                { information: info }
            );
            expect(middleware.priority).toEqual(DEFAULT_MIDDLEWARE_PRIORITY);
        })

    })

})