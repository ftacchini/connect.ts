import "reflect-metadata";
import { ConsoleLogger } from './../../../src/logging/console-logger';

describe("ConsoleLogger", () => {

    let consoleLogger: ConsoleLogger;
    let consoleInstance: jasmine.SpyObj<Console>;

    beforeEach(() => {
        consoleInstance = jasmine.createSpyObj<Console>("console", ["log"]);
        consoleLogger = new ConsoleLogger(consoleInstance);
    })

    it("should log objects as json", () => {
        //arrange
        var object = {
            something: "something"
        };

        //act
        consoleLogger.alert(object);

        //assert
        expect(consoleInstance.log).toHaveBeenCalledWith('ALERT: {"something":"something"}')
    })

    it("should log strings as json", () => {
        //arrange
        var object = "something";

        //act
        consoleLogger.alert(object);

        //assert
        expect(consoleInstance.log).toHaveBeenCalledWith('ALERT: "something"')
    })
})