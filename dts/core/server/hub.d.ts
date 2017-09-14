import { Server, ServerConfigurator } from "./";
import { HubContainer, ControllerLoader } from "../";
export declare class Hub {
    private serverConfigs;
    container: HubContainer;
    private controllerLoader;
    constructor(serverConfigs: {
        server: Server;
        serverConfigurator: ServerConfigurator<Server>;
    }[], container: HubContainer, controllerLoader: ControllerLoader);
    run(): void;
}
