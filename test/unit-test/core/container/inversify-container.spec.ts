import { InversifyContainer } from './../../../../src';
import "jasmine";

class NewType {

}

describe("InversifyContainer", () => {

    let container: InversifyContainer;

    beforeEach(() => {
        container = new InversifyContainer();
    })

    describe("bindAndGet", () => {

        it("should bind type to container", () => {
            //arrange
            container.bindAndGet<NewType>(NewType);

            //act
            var instance = container.get<NewType>(NewType);

            //assert
            expect(instance).not.toBeNull();            
        })

        it("should return the bound instance", () => {
            //arrange
            //act
            var instance = container.bindAndGet<NewType>(NewType);

            //assert
            expect(instance).not.toBeNull();
        })

        it("should bind the instance only the first time", () => {
            //arrange
            spyOn(container, "bind");

            //act
            var instance = container.bindAndGet<NewType>(NewType);

            //assert
            expect(container.bind).toHaveBeenCalledTimes(1);
        })
    })

})
