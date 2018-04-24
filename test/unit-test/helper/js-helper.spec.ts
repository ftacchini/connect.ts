import 'reflect-metadata';

import { JsHelper } from './../../../src/helper/js-helper';


describe("JsHelper", () => {

    describe("readFunctionParamNames", () => {

        it("should return an array of parameter names if there is more than one", () => {
            //arrange
            function something(a: any, b: any, c: any){}

            //act
            var paramNames = JsHelper.instance.readFunctionParamNames(something);

            //assert
            expect(paramNames).toEqual(["a","b","c"]);
        })

        it("should return the correct names for autoinitialized params", () => {
            //arrange
            function something(a = 2, b = "fasda"){}
            
            //act
            var paramNames = JsHelper.instance.readFunctionParamNames(something);
            
            //assert
            expect(paramNames).toEqual(["a", "b"]);
        })

        it("should strip comments out from function", () => {
            //arrange
            function something/*comment2*/(/*comment1*/a: any, b: any) //another comment
            {}
            
            //act
            var paramNames = JsHelper.instance.readFunctionParamNames(something);
            
            //assert
            expect(paramNames).toEqual(["a", "b"]);
        })

        it("should return an empty array if ther are no parameter names", () => {
            //arrange
            function something(){}
            
            //act
            var paramNames = JsHelper.instance.readFunctionParamNames(something);
            
            //assert
            expect(paramNames).toEqual([]);
        })

    });


})
