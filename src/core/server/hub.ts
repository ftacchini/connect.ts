import {Server} from "./server";
import {ServerConfigurator} from "./server-configurator";
import {ControllerActivator,ControllerFactory,ControllerLoader} from "../controller/controller-module";

export class Hub {

    constructor(
        private servers: { server: Server, serverConfigurator: ServerConfigurator<Server> }[],
        private controllerActivator: ControllerActivator,
        private controllerFactory: ControllerFactory,
        private controllerLoader: ControllerLoader){

    }

    public Run(): void {
        
        this.servers.forEach((server) => {
            server.serverConfigurator.configureServer(server.server);
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