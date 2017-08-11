import {Server,ServerConfigurator} from "./";
import {ControllerActivator,ControllerLoader,/*DefaultControllerActivator,*/InversifyContainer,HubContainer} from "../"
import {MetadataControllerLoader} from "../../metadata-core";

import {Hub} from "./hub";
 
export class HubBuilder {

    private supportedServers: { server: Server, serverConfigurator: ServerConfigurator<Server> }[] = [];
    //private controllerActivator: ControllerActivator;
    private controllerLoader: ControllerLoader;
    private container: HubContainer;

    private static _instance: HubBuilder;
    public static get instance() {
        return this._instance || (this._instance = new HubBuilder());
    }

    private constructor() {

    }

    public setContainer(container: HubContainer): HubBuilder {
        this.container = container;
        return this;
    }
/*
    public setControllerActivator(controllerActivator: ControllerActivator): HubBuilder{
        this.controllerActivator = controllerActivator;
        return this;
    }*/

    public setControllerLoader(controllerLoader: ControllerLoader): HubBuilder {
        this.controllerLoader = controllerLoader;
        return this;
    }

    public setServerSupport<T extends Server>(server: T, serverConfigurator?: ServerConfigurator<T>): HubBuilder {
        this.supportedServers.push({ server: server, serverConfigurator: serverConfigurator});
        return this;
    }

    public buildHub() : Hub {

        var container = this.container || new InversifyContainer();
        /*var controllerActivator = this.controllerActivator || new DefaultControllerActivator(container);*/
        var controllerLoader = this.controllerLoader || new MetadataControllerLoader();

        return new Hub(
            this.supportedServers, 
            container, 
            /*controllerActivator,*/
            controllerLoader);
    }

}