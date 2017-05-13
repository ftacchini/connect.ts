import {Server} from "./server";
import {ServerConfigurator} from "./server-configurator";
import {
    ControllerActivator,ControllerFactory,ControllerLoader,
    DefaultControllerActivator,DefaultControllerFactory,DefaultControllerLoader} from "../controller/controller-module";
import {Container} from "inversify";
import {Hub} from "./hub";
 
export class HubBuilder {

    private supportedServers: { server: Server, serverConfigurator: ServerConfigurator<Server> }[] = [];
    private controllerActivator: ControllerActivator;
    private controllerFactory: ControllerFactory;
    private controllerLoader: ControllerLoader;

    public static instance(container: Container): HubBuilder {
        return new HubBuilder(container);
    }

    private constructor(private container: Container) {

    }

    public setControllerActivator(controllerActivator: ControllerActivator): void{
        this.controllerActivator = controllerActivator;
    }

    public setControllerFactory(controllerFactory: ControllerFactory): void {
        this.controllerFactory = controllerFactory;

    }

    public setControllerLoader(controllerLoader: ControllerLoader): void {
        this.controllerLoader = controllerLoader;
    }

    public setServerSupport<T extends Server>(server: T, serverConfigurator: ServerConfigurator<T>): void {
        this.supportedServers.push({ server: server, serverConfigurator: serverConfigurator});
    }

    public buildHub() : Hub {

        var controllerFactory = this.controllerFactory || new DefaultControllerFactory(this.container);
        var controllerActivator = this.controllerActivator || new DefaultControllerActivator(controllerFactory);
        var controllerLoader = this.controllerLoader || new DefaultControllerLoader();

        return new Hub(this.supportedServers);
    }

}