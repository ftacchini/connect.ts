import { TsHubLogger } from './../../../../src/logging/ts-hub-logger';
import { Parameter } from './../../../../src/routed-controller/parameter';
import { ParameterBuilder } from './../../../../src/routed-controller/builder/parameter/parameter-builder';
import { Middleware } from './../../../../src/routed-controller/middleware';
import { ParameterReader } from './../../../../src/routed-controller/reader/parameter-reader';
import { FunctionReader } from './../../../../src/routed-controller/reader/function-reader';
import { ClassMethodControllerActivator } from "../../../../src/routed-controller/activator/class-method-controller-activator"


describe("ClassMethodControllerActivator", () => {

    var paramBuilders: jasmine.SpyObj<ParameterBuilder<any, any>>[];;
    function createParameterBuilderStub(argIndex: number) : ParameterBuilder<any, any> {
        var paramBuilder = jasmine.createSpyObj<ParameterBuilder<any,any>>(
            "paramBuilder" + paramBuilders.length, 
            ["buildParam", "supportsRouter", "getArgumentIndex"]);
        (<any>paramBuilder.getArgumentIndex).and.returnValue(argIndex);
        return paramBuilders[paramBuilders.length] = paramBuilder;
    }
    
    
    var params: jasmine.SpyObj<Parameter<any>>[];
    function createParameterStub(paramValue: any) : Parameter<any> {
        var parameter = jasmine.createSpyObj<Parameter<any>>("parameter" + params.length, ["getValue"]);
        (<any>parameter.getValue).and.returnValue(paramValue);
        
        return params[params.length] = parameter;
    }
    
    
    class DummyClassMethodControllerActivatorImplementation extends ClassMethodControllerActivator<any, any> {
    
        constructor(
            functionReader: FunctionReader,
            paramsReader: ParameterReader,
            logger: TsHubLogger) {
                super(functionReader, paramsReader, logger);
        }
    
    
        createDefaultParameterBuilder(target: any, propertyKey: string, name: string, index: number) : ParameterBuilder<any, any>{
            var parameterBuilder = createParameterBuilderStub(0);
            (<any>parameterBuilder.buildParam).and.returnValue(createParameterStub("defaultParamValue"));
    
            return parameterBuilder;
        }
    
        turnIntoMiddleware(action: Function) : Middleware<any, any> {
            var parameterBuilder = jasmine.createSpyObj<Middleware<any, any>>("middleware", ["getRequestHandler"]);
            parameterBuilder.getRequestHandler = <any>function() { return action; };
    
            return parameterBuilder;
        }
    
    }

    let functionReader: FunctionReader;
    let paramsReader: ParameterReader;
    let logger: TsHubLogger;
    let controllerActivator: ClassMethodControllerActivator<any, any>;

    beforeEach(() => {
        params = [];
        paramBuilders = [];
        functionReader = jasmine.createSpyObj<FunctionReader>("functionReader", ["readFunction"]);
        paramsReader = jasmine.createSpyObj<ParameterReader>("paramsReader", ["readParameters"]);
        logger = jasmine.createSpyObj<TsHubLogger>("logger", ["debug"]);
        var parameterBuilder = createParameterBuilderStub(2);
        (<any>parameterBuilder.buildParam).and.returnValue(createParameterStub("readerParamValue"));
        (<any>paramsReader.readParameters).and.returnValue([parameterBuilder]);

        controllerActivator = new DummyClassMethodControllerActivatorImplementation(
            functionReader,
            paramsReader,
            logger
        );
    })

    describe("buildControllerActivationMiddleware", () => {

        it("should return a middleware function", () => {
            //arrange
            var target = { foo: function(){} };
            var property = "foo";
            var router = {};


            //act
            var middleware = controllerActivator.buildControllerActivationMiddleware(
                target, 
                property,
                router
            );
            
            //assert
            expect(middleware.getRequestHandler).toBeDefined();
        })

        describe("middleware invocation", () => {
            
            let middleware: Middleware<any, any>;
            let target: any;
            let property: string;
            let router: any;
            let staticData: any;
            let activatorFunction: jasmine.Spy;

            beforeEach(() => {
                
                target = { foo: function(arg1: any, arg2: any, arg3: any){} };
                property = "foo";
                router = {};
                staticData = { something: "something" };

                activatorFunction = jasmine.createSpy("activatorFunction");
                (<any>functionReader.readFunction).and.returnValue(activatorFunction);
                

                middleware = controllerActivator.buildControllerActivationMiddleware(
                    target, 
                    property,
                    router,
                    staticData
                );  
            })
            
            it("should activate target with obtained params", async () => {
                //arrange
                var request = {};

                //act
                await middleware.getRequestHandler()(request);

                //assert
                params.forEach(x => expect(x.getValue).toHaveBeenCalledWith(staticData, request));
                expect(activatorFunction).toHaveBeenCalledWith("defaultParamValue", "defaultParamValue", "readerParamValue");
                
            })

            it("should return activated function value", async () => {
                 //arrange
                var request = {};
                var expected = "result";
                activatorFunction.and.returnValue(expected)

                //act
                var actual = await middleware.getRequestHandler()(request);

                //assert
                expect(expected).toEqual(actual);
            })

            it("should not obtain params twice", () => {
                //arrange
               var request = {};
               var expected = "result";
               activatorFunction.and.returnValue(expected)

               //act
               var requestHandler = middleware.getRequestHandler();
               requestHandler(request);
               requestHandler(request);

               //assert
                paramBuilders.forEach(x => expect(x.buildParam).toHaveBeenCalledTimes(1));
            })
        })

    })

})