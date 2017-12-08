import {Server, ServerConfigurator} from "./";
import {HubContainer, ControllerLoader} from "../";

export class Hub {

    constructor(
        private serverConfigs: { server: Server, serverConfigurator: ServerConfigurator<Server> }[],
        public container: HubContainer,
        private controllerLoader: ControllerLoader){

    }

    public async run(): Promise<boolean[]> {
        var controllerBuilders = this.controllerLoader.loadControllerBuilders(this.container);

        var promises = this.serverConfigs.map((serverConfig) => {

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

           return serverConfig.server.run();
        });
        
        return Promise.all(promises);
    }


    public stop(): Promise<boolean[]> {
        var promises = this.serverConfigs.map((serverConfig) => {
            if(serverConfig.server) {
                return Promise.resolve(true);
            }
            
            return serverConfig.server.stop();
        })

        return Promise.all(promises);
    }

}