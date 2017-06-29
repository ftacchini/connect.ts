import {Server, ServerConfigurator} from "./";
import {HubContainer, ControllerActivator, ControllerLoader} from "../";

export class Hub {

    constructor(
        private servers: { server: Server, serverConfigurator: ServerConfigurator<Server> }[],
        public container: HubContainer,
        private controllerActivator: ControllerActivator,
        private controllerLoader: ControllerLoader){

    }

    public run(): void {
        
        this.servers.forEach((server) => {
            server.serverConfigurator && server.serverConfigurator.configureServer(server.server);
        });

        var controllerBuilders = this.controllerLoader.loadControllerBuilders(this.container);
        var routers = controllerBuilders.map((controllerBuilder) => {
            return controllerBuilder.buildController();
        });

        routers.forEach((router) => {
            this.servers.forEach((server) => {
                router.supportsServer(server.server) && router.attachToServer(server.server);
            });
        });
        
    }

}