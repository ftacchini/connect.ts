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
    private container: Container;

    private static _instance: HubBuilder;
    public static get instance() {
        return this._instance || (this._instance = new HubBuilder());
    }

    private constructor() {

    }

    public setContainer(container: Container): HubBuilder {
        this.container = container;
        return this;
    }

    public setControllerActivator(controllerActivator: ControllerActivator): HubBuilder{
        this.controllerActivator = controllerActivator;
        return this;
    }

    public setControllerFactory(controllerFactory: ControllerFactory): HubBuilder {
        this.controllerFactory = controllerFactory;
        return this;

    }

    public setControllerLoader(controllerLoader: ControllerLoader): HubBuilder {
        this.controllerLoader = controllerLoader;
        return this;
    }

    public setServerSupport<T extends Server>(server: T, serverConfigurator?: ServerConfigurator<T>): HubBuilder {
        this.supportedServers.push({ server: server, serverConfigurator: serverConfigurator});
        return this;
    }

    public buildHub() : Hub {

        var controllerFactory = this.controllerFactory || new DefaultControllerFactory(this.container);
        var controllerActivator = this.controllerActivator || new DefaultControllerActivator(controllerFactory);
        var controllerLoader = this.controllerLoader || new DefaultControllerLoader();
        var container = this.container || new Container();

        return new Hub(
            this.supportedServers, 
            container, 
            controllerActivator,
            controllerFactory, 
            controllerLoader);
    }

}