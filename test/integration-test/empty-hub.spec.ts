import "reflect-metadata";
import { TsFramework } from './../../src/server/ts-framework';
import { HubBuilder } from './../../src/server/hub-builder';
import "jasmine";


describe("empty hub", () => {
    it("should run correctly", async (done) => {
        //arrange
        var framework = jasmine.createSpyObj<TsFramework>("TsFramework", ["setupFramework"]);
        framework.setupFramework.and.returnValue({
            loadControllerBuilders: () : any => []
        });
        
        var hub = HubBuilder.instance
            .withFramework(framework)
            .buildHub();

        //act
        var result = await hub.run();

        //assert
        expect(result.length).toEqual(0);
        done();
    })
})