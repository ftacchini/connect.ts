import {Server} from "./server";
import {ServerConfigurator} from "./server-configurator";
import {ControllerActivator,ControllerFactory,ControllerLoader} from "../controller";
import {Container} from "inversify";

export class Hub {

    constructor(
        private servers: { server: Server, serverConfigurator: ServerConfigurator<Server> }[],
        public container: Container,
        private controllerActivator: ControllerActivator,
        private controllerFactory: ControllerFactory,
        private controllerLoader: ControllerLoader){

    }

    public run(): void {
        
        this.servers.forEach((server) => {
            server.serverConfigurator && server.serverConfigurator.configureServer(server.server);
        });

        var controllerBuilders = this.controllerLoader.loadControllerBuilders();
        var routers = controllerBuilders.map((controllerBuilder) => {
            return controllerBuilder.buildRouter(this.controllerActivator);
        });

        routers.forEach((router) => {
            this.servers.forEach((server) => {
                router.supportsServer(server.server) && router.attachToServer(server.server);
            });
        });
        
    }

}