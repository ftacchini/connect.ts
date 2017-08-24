import {Server, ServerConfigurator} from "./";
import {HubContainer, ControllerLoader} from "../";

export class Hub {

    constructor(
        private serverConfigs: { server: Server, serverConfigurator: ServerConfigurator<Server> }[],
        public container: HubContainer,
        private controllerLoader: ControllerLoader){

    }

    public run(): void {
        var controllerBuilders = this.controllerLoader.loadControllerBuilders(this.container);

        this.serverConfigs.forEach((serverConfig) => {

            serverConfig.serverConfigurator && serverConfig.serverConfigurator.configureServer(serverConfig.server, this.container);
            
            controllerBuilders = controllerBuilders.filter((controllerBuilder) => {
                if(controllerBuilder.supportsServer(serverConfig.server))
                {
                    var controller = controllerBuilder.buildController();
                    controller.attachToServer(serverConfig.server);
                    return false;
                }

                return true;
            });

        });
        
    }

}