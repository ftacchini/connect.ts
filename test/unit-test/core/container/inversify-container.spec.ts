import { injectable } from 'inversify';
import { InversifyContainer, Types } from './../../../../src';
import "jasmine";

@injectable()
class NewService {
    constructor(){

    }
}

describe("InversifyContainer", () => {

    let container: InversifyContainer;

    beforeEach(() => {
        container = new InversifyContainer();
    })

    describe("bindAndGet", () => {

        it("should bind type to container", () => {
            //arrange
            container.bindAndGet<NewService>(NewService);

            //act
            var instance = container.get<NewService>(Types[NewService.name]);

            //assert
            expect(instance).not.toBeNull();            
        })

        it("should return the bound instance", () => {
            //arrange
            //act
            var instance = container.bindAndGet<NewService>(NewService);

            //assert
            expect(instance).not.toBeNull();
        })

        it("should bind the instance only the first time", () => {
            //arrange
            spyOn(container, "bind").and.callThrough();

            //act
            var instance = container.bindAndGet<NewService>(NewService);

            //assert
            expect(container.bind).toHaveBeenCalledTimes(1);
        })
    })

})
