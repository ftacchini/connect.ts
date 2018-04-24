import 'reflect-metadata';

import { TypesHelper } from './../../../src/helper/types-helper';


describe("TypesHelper", () => {

    describe("castToType", () => {

        it("should return the value as string if type is String", () => {
            //arrange
            var value = 123;
            var type = String;

            //act
            var result = TypesHelper.instance.castToType(value, type);

            //assert
            expect(result).toBe("123")
        })

        it("should return the value as number if type is Number", () => {
            //arrange
            var value = "123";
            var type = Number;

            //act
            var result = TypesHelper.instance.castToType(value, type);

            //assert
            expect(result).toBe(123)
        })

        it("should return the value as boolean if type is Boolean", () => {
            //arrange
            var value = "true";
            var type = Boolean;

            //act
            var result = TypesHelper.instance.castToType(value, type);

            //assert
            expect(result).toBe(true)
        })

        it("should return the object as is if the type is Object", () => {
            //arrange
            var value = { something: "" };
            var type = Object;

            //act
            var result = TypesHelper.instance.castToType(value, type);

            //assert
            expect(result).toBe(value)
        })

        it("should return the object as is if the type is Function", () => {
            //arrange
            var value = function(){};
            var type = Function;

            //act
            var result = TypesHelper.instance.castToType(value, type);

            //assert
            expect(result).toBe(value)
        })

        it("should return the object as is if the type is null", () => {
            //arrange
            var value = null;
            var type = null;

            //act
            var result = TypesHelper.instance.castToType(value, type);

            //assert
            expect(result).toBeNull()
        })

        it("should return the object as is if the type is undefined", () => {
            //arrange
            var value = undefined;
            var type = undefined;

            //act
            var result = TypesHelper.instance.castToType(value, type);

            //assert
            expect(result).toBeUndefined()
        })

        it("should instanciate a new object of type if not any known type", () => {
            //arrange

            class Something {
                something: string;
                doSomething(): any { return "string"; }
            }

            var value = { something: "asd" };
            var type = Something;

            //act
            var result = TypesHelper.instance.castToType(value, type);

            //assert
            expect(result.something).toEqual(value.something);
            expect(result.doSomething()).toEqual("string");
        })

    })

})